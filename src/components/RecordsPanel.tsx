"use client";

import { formatVisitWhen, type Visit } from "@/lib/store";

type Props = {
  visits: Visit[];
  query: string;
  onQuery: (value: string) => void;
  onOpenSeat: (seatId: string) => void;
  onDelete: (id: string) => void;
};

export function RecordsPanel({
  visits,
  query,
  onQuery,
  onOpenSeat,
  onDelete,
}: Props) {
  return (
    <section className="mx-auto w-full max-w-3xl px-3 py-4 sm:px-4">
      <p className="text-xs tracking-widest text-orange-300">保存紀錄</p>
      <h2 className="mt-1 text-xl font-bold text-white">座位已保存紀錄</h2>
      <p className="mt-1 text-sm text-zinc-400">
        每場公演會單獨存一筆，包含公演名、日期時間、隊伍與座位。
      </p>

      <input
        className="mt-4 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
        placeholder="搜尋日期、公演、隊伍、座位…"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />

      {visits.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-10 text-center text-sm text-zinc-500">
          尚未有保存紀錄。請到「座位備忘」點位子後儲存。
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {visits.map((visit) => (
            <li
              key={visit.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <button
                  className="min-w-0 flex-1 text-left"
                  onClick={() => onOpenSeat(visit.seatId)}
                  type="button"
                >
                  <p className="font-semibold text-white">
                    {visit.title || "未填公演名稱"}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    {formatVisitWhen(visit)}
                    {visit.team ? `　${visit.team}` : ""}
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold text-orange-300">{visit.seatId}</span>
                    {visit.note ? (
                      <span className="ml-2 text-zinc-500">{visit.note}</span>
                    ) : null}
                  </p>
                </button>
                <button
                  className="min-h-11 shrink-0 px-2 text-sm text-rose-300"
                  onClick={() => onDelete(visit.id)}
                  type="button"
                >
                  刪除
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
