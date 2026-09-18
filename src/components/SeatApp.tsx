"use client";

import { useMemo, useRef, useState } from "react";
import { SEAT_TYPE_LABEL, seats, type Seat } from "@/data/seats";
import {
  addVisit,
  deleteVisit,
  exportUserData,
  getDisplayName,
  getVisits,
  importUserData,
  logout,
  type Visit,
} from "@/lib/store";
import { SeatMap } from "./SeatMap";

type Props = {
  username: string;
  onLogout: () => void;
};

export function SeatApp({ username, onLogout }: Props) {
  const [visits, setVisits] = useState<Visit[]>(() => getVisits(username));
  const [selected, setSelected] = useState<Seat | null>(null);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(1);
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const visitsBySeat = useMemo(() => {
    const map: Record<string, number> = {};
    for (const visit of visits) {
      map[visit.seatId] = (map[visit.seatId] ?? 0) + 1;
    }
    return map;
  }, [visits]);

  const uniqueSeats = Object.keys(visitsBySeat).length;
  const selectedVisits = selected
    ? visits.filter((v) => v.seatId === selected.id)
    : [];
  const filteredHistory = visits.filter((visit) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      visit.seatId.toLowerCase().includes(q) ||
      visit.title.toLowerCase().includes(q) ||
      visit.note.toLowerCase().includes(q) ||
      visit.date.includes(q)
    );
  });

  function refresh() {
    setVisits(getVisits(username));
  }

  function handleAdd() {
    if (!selected) return;
    if (!date) {
      setMessage("請填公演日期");
      return;
    }
    addVisit(username, {
      seatId: selected.id,
      date,
      title: title.trim(),
      note: note.trim(),
    });
    setTitle("");
    setNote("");
    setMessage(`已記下 ${selected.id}`);
    refresh();
  }

  function handleDelete(id: string) {
    deleteVisit(username, id);
    refresh();
  }

  function handleExport() {
    const blob = new Blob(
      [JSON.stringify(exportUserData(username), null, 2)],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kouen-seats-${username}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleImport(file: File) {
    try {
      const payload = JSON.parse(await file.text());
      importUserData(username, payload);
      refresh();
      setMessage("匯入完成");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "匯入失敗");
    }
  }

  return (
    <div className="flex min-h-full flex-col lg:flex-row">
      <section className={`min-w-0 flex-1 p-3 sm:p-4 lg:p-6 ${selected ? "pb-4 lg:pb-6" : ""}`}>
        <header className="mb-3 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-widest text-orange-300">烏梅劇場座位表</p>
            <h1 className="text-xl font-bold text-white sm:text-2xl">公演座位紀錄</h1>
            <p className="mt-1 text-sm text-zinc-400">
              {getDisplayName(username)}　已坐 {uniqueSeats} / {seats.length} 席　共 {visits.length} 場
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
            <button
              className="min-h-11 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
              onClick={() => setZoom((z) => Math.max(1, Number((z - 0.35).toFixed(2))))}
              type="button"
            >
              縮小
            </button>
            <button
              className="min-h-11 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
              onClick={() => setZoom(1)}
              type="button"
            >
              全圖
            </button>
            <button
              className="min-h-11 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
              onClick={() => setZoom((z) => Math.min(3, Number((z + 0.35).toFixed(2))))}
              type="button"
            >
              放大
            </button>
            <button
              className="min-h-11 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
              onClick={handleExport}
              type="button"
            >
              匯出
            </button>
            <button
              className="min-h-11 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
              onClick={() => fileRef.current?.click()}
              type="button"
            >
              匯入
            </button>
            <button
              className="min-h-11 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
              onClick={() => {
                logout();
                onLogout();
              }}
              type="button"
            >
              登出
            </button>
            <input
              ref={fileRef}
              className="hidden"
              type="file"
              accept="application/json"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void handleImport(file);
                e.target.value = "";
              }}
            />
          </div>
        </header>

        {message ? (
          <p className="mb-3 rounded-lg bg-emerald-950 px-3 py-2 text-sm text-emerald-200">
            {message}
          </p>
        ) : null}

        <div className="overflow-auto overscroll-contain rounded-2xl border border-zinc-800 bg-[#141416] p-1 sm:p-3">
          <div style={{ width: `${zoom * 100}%` }} className="min-w-full">
            <SeatMap
              visitsBySeat={visitsBySeat}
              selectedId={selected?.id ?? null}
              onSelect={(seat) => {
                setSelected(seat);
                window.setTimeout(() => {
                  document.getElementById("seat-panel")?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
                }, 50);
              }}
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-zinc-500">
          手機請先看全圖，再按「放大」點位子。坐過的座位會變成綠色。
        </p>
      </section>

      <aside
        id="seat-panel"
        className={`w-full shrink-0 border-zinc-800 bg-zinc-950 p-4 lg:w-[360px] lg:border-l lg:border-t-0 ${
          selected
            ? "fixed inset-x-0 bottom-0 z-20 max-h-[52vh] overflow-auto rounded-t-2xl border-t pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.45)] lg:static lg:max-h-none lg:overflow-visible lg:rounded-none lg:shadow-none"
            : "border-t"
        }`}
      >
        {selected ? (
          <div className="mb-6">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-400">{SEAT_TYPE_LABEL[selected.type]}</p>
                <h2 className="text-xl font-bold text-white">{selected.id}</h2>
              </div>
              <button
                className="min-h-11 rounded-lg px-3 text-sm text-zinc-400 lg:hidden"
                onClick={() => setSelected(null)}
                type="button"
              >
                關閉
              </button>
            </div>
            <form
              className="mt-3 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleAdd();
              }}
            >
              <label className="block text-sm text-zinc-300">
                公演日期
                <input
                  className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </label>
              <label className="block text-sm text-zinc-300">
                公演名稱
                <input
                  className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
                  placeholder="例如：通常公演／特別公演"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className="block text-sm text-zinc-300">
                備註
                <input
                  className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
                  placeholder="可填成員、心情或其他"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </label>
              <button
                className="min-h-11 w-full rounded-lg bg-orange-500 py-2 font-semibold text-white"
                type="submit"
              >
                記下這個位子
              </button>
            </form>

            <ul className="mt-4 space-y-2">
              {selectedVisits.length === 0 ? (
                <li className="text-sm text-zinc-500">這個位子還沒有紀錄。</li>
              ) : (
                selectedVisits.map((visit) => (
                  <li
                    key={visit.id}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-white">{visit.date}</p>
                        <p className="text-zinc-300">{visit.title || "未填公演名稱"}</p>
                        {visit.note ? (
                          <p className="text-zinc-500">{visit.note}</p>
                        ) : null}
                      </div>
                      <button
                        className="min-h-11 px-2 text-sm text-rose-300"
                        onClick={() => handleDelete(visit.id)}
                        type="button"
                      >
                        刪除
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        ) : (
          <p className="mb-6 text-sm text-zinc-400">點座位圖上的位子，開始記錄這一場坐哪。</p>
        )}

        <div className={selected ? "hidden lg:block" : ""}>
        <h3 className="text-sm font-semibold text-white">全部紀錄</h3>
        <input
          className="mt-2 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
          placeholder="搜尋日期、座位、公演…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="mt-3 max-h-[30vh] space-y-2 overflow-auto lg:max-h-[46vh]">
          {filteredHistory.length === 0 ? (
            <li className="text-sm text-zinc-500">還沒有公演紀錄。</li>
          ) : (
            filteredHistory.map((visit) => (
              <li key={visit.id}>
                <button
                  className="min-h-11 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-left text-sm hover:border-orange-400"
                  onClick={() =>
                    setSelected(seats.find((s) => s.id === visit.seatId) ?? null)
                  }
                  type="button"
                >
                  <span className="font-semibold text-orange-300">{visit.seatId}</span>
                  <span className="ml-2 text-zinc-300">{visit.date}</span>
                  <p className="text-zinc-400">{visit.title || "未填公演名稱"}</p>
                </button>
              </li>
            ))
          )}
        </ul>
        </div>
      </aside>
    </div>
  );
}
