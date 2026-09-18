export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";

type GoogleJwtPayload = {
  sub?: string;
  email?: string;
  name?: string;
};

function decodeJwtPayload(credential: string): GoogleJwtPayload {
  const part = credential.split(".")[1];
  if (!part) throw new Error("Google 登入憑證無效");
  const base64 = part.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const json = decodeURIComponent(
    atob(padded)
      .split("")
      .map((ch) => `%${ch.charCodeAt(0).toString(16).padStart(2, "0")}`)
      .join(""),
  );
  return JSON.parse(json) as GoogleJwtPayload;
}

export function parseGoogleCredential(credential: string) {
  const payload = decodeJwtPayload(credential);
  if (!payload.sub) throw new Error("Google 登入失敗");
  return {
    sub: payload.sub,
    email: payload.email,
    name: payload.name,
  };
}

export function loadGoogleIdentity(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("只能在瀏覽器登入"));
  }
  if (window.google?.accounts.id) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    'script[src="https://accounts.google.com/gsi/client"]',
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("無法載入 Google 登入")),
        { once: true },
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("無法載入 Google 登入"));
    document.head.appendChild(script);
  });
}
