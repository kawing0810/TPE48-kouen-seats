"use client";

import { useMemo, useRef, useState } from "react";
import { MAP_SIZE, seats, type Seat } from "@/data/seats";
import { PERFORMANCES, TEAMS, optionIdFromLabel } from "@/data/shows";
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
import { RecordsPanel } from "./RecordsPanel";
import { SeatMap } from "./SeatMap";
import {
  VisitForm,
  visitTeamFromDraft,
  visitTitleFromDraft,
  type VisitDraft,
} from "./VisitForm";

type Props = {
  username: string;
  onLogout: () => void;
};

type Tab = "memo" | "records";

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function initialDraft(): VisitDraft {
  return {
    date: todayDate(),
    time: "18:30",
    performanceId: "reset",
    customTitle: "",
    teamId: "",
    customTeam: "",
    note: "",
  };
}

export function SeatApp({ username, onLogout }: Props) {
  const [tab, setTab] = useState<Tab>("memo");
  const [visits, setVisits] = useState<Visit[]>(() => getVisits(username));
  const [selected, setSelected] = useState<Seat | null>(null);
  const [draft, setDraft] = useState<VisitDraft>(initialDraft);
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
      visit.team.toLowerCase().includes(q) ||
      visit.note.toLowerCase().includes(q) ||
      visit.date.includes(q) ||
      visit.time.includes(q)
    );
  });

  function refresh() {
    setVisits(getVisits(username));
  }

  function handleAdd() {
    if (!selected) {
      setMessage("請先點一個位子");
      return;
    }
    if (!draft.date) {
      setMessage("請填活動日期及時間");
      return;
    }
    const title = visitTitleFromDraft(draft);
    if (draft.performanceId === "other" && !title) {
      setMessage("請填自訂公演名稱");
      return;
    }
    const team = visitTeamFromDraft(draft);
    if (draft.teamId === "other" && !team) {
      setMessage("請填自訂隊伍名稱");
      return;
    }
    addVisit(username, {
      seatId: selected.id,
      date: draft.date,
      time: draft.time,
      title,
      team,
      note: draft.note.trim(),
    });
    setDraft((current) => ({ ...current, note: "" }));
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

  function openSeatFromRecord(seatId: string) {
    const seat = seats.find((item) => item.id === seatId) ?? null;
    setSelected(seat);
    const visit = visits.find((item) => item.seatId === seatId);
    if (visit) {
      setDraft((current) => ({
        ...current,
        date: visit.date || current.date,
        time: visit.time || current.time,
        performanceId: optionIdFromLabel(PERFORMANCES, visit.title) || "other",
        customTitle: optionIdFromLabel(PERFORMANCES, visit.title) === "other" ? visit.title : "",
        teamId: optionIdFromLabel(TEAMS, visit.team),
        customTeam: optionIdFromLabel(TEAMS, visit.team) === "other" ? visit.team : "",
      }));
    }
    setTab("memo");
  }

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-zinc-800 px-3 py-3 sm:px-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs tracking-widest text-orange-300">烏梅劇場座位表</p>
            <h1 className="text-xl font-bold text-white sm:text-2xl">公演座位紀錄</h1>
            <p className="mt-1 text-sm text-zinc-400">
              {getDisplayName(username)}　已坐 {uniqueSeats} / {seats.length} 席　共 {visits.length} 場
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
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
        </div>

        <nav className="mt-3 grid grid-cols-2 gap-2">
          <button
            className={`min-h-11 rounded-full text-sm font-medium ${
              tab === "memo"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800 text-zinc-300"
            }`}
            onClick={() => setTab("memo")}
            type="button"
          >
            座位備忘
          </button>
          <button
            className={`min-h-11 rounded-full text-sm font-medium ${
              tab === "records"
                ? "bg-orange-500 text-white"
                : "bg-zinc-800 text-zinc-300"
            }`}
            onClick={() => setTab("records")}
            type="button"
          >
            保存紀錄
          </button>
        </nav>
      </header>

      {message ? (
        <p className="mx-3 mt-3 rounded-lg bg-emerald-950 px-3 py-2 text-sm text-emerald-200 sm:mx-4">
          {message}
        </p>
      ) : null}

      {tab === "records" ? (
        <RecordsPanel
          visits={filteredHistory}
          query={query}
          onQuery={setQuery}
          onOpenSeat={openSeatFromRecord}
          onDelete={handleDelete}
        />
      ) : (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-3 py-3 sm:px-4 lg:flex-row lg:items-start">
          <section className="min-w-0 flex-1">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-xs text-zinc-500">
                整張圖會縮進畫面。要點小位子時再放大。
              </p>
              <div className="flex gap-1">
                <button
                  className="min-h-11 min-w-11 rounded-lg bg-zinc-800 text-sm text-zinc-200"
                  onClick={() => setZoom((z) => Math.max(1, Number((z - 0.35).toFixed(2))))}
                  type="button"
                >
                  −
                </button>
                <button
                  className="min-h-11 rounded-lg bg-zinc-800 px-3 text-sm text-zinc-200"
                  onClick={() => setZoom(1)}
                  type="button"
                >
                  全圖
                </button>
                <button
                  className="min-h-11 min-w-11 rounded-lg bg-zinc-800 text-sm text-zinc-200"
                  onClick={() => setZoom((z) => Math.min(3, Number((z + 0.35).toFixed(2))))}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>

            <div className="overflow-auto overscroll-contain rounded-2xl border border-zinc-800 bg-[#141416]">
              <div
                className="mx-auto"
                style={{
                  width: `${zoom * 100}%`,
                  height: zoom === 1 ? "min(48dvh, 460px)" : undefined,
                  aspectRatio:
                    zoom === 1
                      ? undefined
                      : `${MAP_SIZE.width} / ${MAP_SIZE.height}`,
                }}
              >
                <SeatMap
                  visitsBySeat={visitsBySeat}
                  selectedId={selected?.id ?? null}
                  onSelect={setSelected}
                />
              </div>
            </div>
          </section>

          <aside className="w-full shrink-0 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 lg:w-[360px]">
            <VisitForm
              selected={selected}
              draft={draft}
              selectedVisits={selectedVisits}
              onChange={(patch) => setDraft((current) => ({ ...current, ...patch }))}
              onSave={handleAdd}
              onClear={() => setSelected(null)}
              onDelete={handleDelete}
            />
          </aside>
        </div>
      )}
    </div>
  );
}
