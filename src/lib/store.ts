export type Visit = {
  id: string;
  seatId: string;
  date: string;
  time: string;
  title: string;
  team: string;
  note: string;
  createdAt: string;
};

export function formatVisitWhen(visit: Pick<Visit, "date" | "time">) {
  return visit.time ? `${visit.date} ${visit.time}` : visit.date;
}

function normalizeVisit(visit: Partial<Visit> | null | undefined): Visit | null {
  if (!visit?.seatId || !visit?.date) return null;
  return {
    id: String(visit.id || crypto.randomUUID()),
    seatId: String(visit.seatId),
    date: String(visit.date),
    time: String(visit.time || ""),
    title: String(visit.title || ""),
    team: String(visit.team || ""),
    note: String(visit.note || ""),
    createdAt: String(visit.createdAt || new Date().toISOString()),
  };
}

export type UserRecord = {
  username: string;
  passwordHash: string;
  visits: Visit[];
  provider?: "password" | "google";
  displayName?: string;
  email?: string;
};

type Database = {
  users: Record<string, UserRecord>;
};

const STORAGE_KEY = "kouen-seats:v1";
const SESSION_KEY = "kouen-seats:session";

function emptyDb(): Database {
  return { users: {} };
}

function readDb(): Database {
  if (typeof window === "undefined") return emptyDb();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyDb();
    const parsed = JSON.parse(raw) as Database;
    if (!parsed || typeof parsed.users !== "object") return emptyDb();
    return parsed;
  } catch {
    return emptyDb();
  }
}

function writeDb(db: Database) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

async function hashPassword(username: string, password: string) {
  const data = new TextEncoder().encode(`${username}:${password}:kouen-seats`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function getSessionUser(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SESSION_KEY);
}

export function getDisplayName(username: string) {
  const user = readDb().users[username];
  return user?.displayName || user?.email || username;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.google?.accounts?.id?.disableAutoSelect();
}

export async function register(username: string, password: string) {
  const name = username.trim();
  if (name.length < 2 || name.length > 20) {
    throw new Error("帳號請用 2–20 個字");
  }
  if (password.length < 4) {
    throw new Error("密碼至少 4 個字");
  }
  const db = readDb();
  if (db.users[name]) {
    throw new Error("這個帳號已經存在");
  }
  db.users[name] = {
    username: name,
    passwordHash: await hashPassword(name, password),
    provider: "password",
    displayName: name,
    visits: [],
  };
  writeDb(db);
  localStorage.setItem(SESSION_KEY, name);
  return name;
}

export async function login(username: string, password: string) {
  const name = username.trim();
  const db = readDb();
  const user = db.users[name];
  if (!user || user.provider === "google") {
    throw new Error("帳號或密碼不正確");
  }
  const hash = await hashPassword(name, password);
  if (hash !== user.passwordHash) {
    throw new Error("帳號或密碼不正確");
  }
  localStorage.setItem(SESSION_KEY, name);
  return name;
}

export function loginWithGoogle(profile: {
  sub: string;
  email?: string;
  name?: string;
}) {
  if (!profile.sub) {
    throw new Error("Google 登入失敗");
  }
  const username = `google:${profile.sub}`;
  const db = readDb();
  const existing = db.users[username];
  db.users[username] = {
    username,
    passwordHash: existing?.passwordHash ?? "",
    provider: "google",
    displayName: profile.name || profile.email || "Google 使用者",
    email: profile.email,
    visits: existing?.visits ?? [],
  };
  writeDb(db);
  localStorage.setItem(SESSION_KEY, username);
  return username;
}

export function getVisits(username: string): Visit[] {
  return (readDb().users[username]?.visits ?? [])
    .map((visit) => normalizeVisit(visit))
    .filter((visit): visit is Visit => Boolean(visit));
}

export function addVisit(
  username: string,
  input: Omit<Visit, "id" | "createdAt">,
): Visit {
  const db = readDb();
  const user = db.users[username];
  if (!user) throw new Error("請先登入");
  const visit: Visit = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  user.visits.unshift(visit);
  writeDb(db);
  return visit;
}

export function deleteVisit(username: string, visitId: string) {
  const db = readDb();
  const user = db.users[username];
  if (!user) return;
  user.visits = user.visits.filter((v) => v.id !== visitId);
  writeDb(db);
}

export function exportUserData(username: string) {
  const user = readDb().users[username];
  if (!user) throw new Error("找不到這個帳號");
  return {
    app: "kouen-seats",
    version: 2,
    username: user.username,
    displayName: user.displayName,
    exportedAt: new Date().toISOString(),
    visits: getVisits(username),
  };
}

export function importUserData(username: string, payload: unknown) {
  const data = payload as { visits?: Visit[] };
  if (!data || !Array.isArray(data.visits)) {
    throw new Error("檔案格式不正確");
  }
  const db = readDb();
  const user = db.users[username];
  if (!user) throw new Error("請先登入");
  const seen = new Set(user.visits.map((v) => v.id));
  for (const visit of data.visits) {
    if (!visit?.seatId || !visit?.date) continue;
    const id = visit.id || crypto.randomUUID();
    if (seen.has(id)) continue;
    seen.add(id);
    const next = normalizeVisit({
      ...visit,
      id,
    });
    if (!next) continue;
    user.visits.push(next);
  }
  user.visits.sort((a, b) => {
    const aWhen = `${a.date} ${a.time || "00:00"}`;
    const bWhen = `${b.date} ${b.time || "00:00"}`;
    return aWhen < bWhen ? 1 : -1;
  });
  writeDb(db);
}
