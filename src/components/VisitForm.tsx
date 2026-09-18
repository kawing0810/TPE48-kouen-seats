"use client";

import { SEAT_TYPE_LABEL, type Seat } from "@/data/seats";
import { PERFORMANCES, TEAMS, optionLabel } from "@/data/shows";
import { formatVisitWhen, type Visit } from "@/lib/store";

export type VisitDraft = {
  date: string;
  time: string;
  performanceId: string;
  customTitle: string;
  teamId: string;
  customTeam: string;
  note: string;
};

type Props = {
  selected: Seat | null;
  draft: VisitDraft;
  selectedVisits: Visit[];
  onChange: (patch: Partial<VisitDraft>) => void;
  onSave: () => void;
  onClear: () => void;
  onDelete: (id: string) => void;
};

export function visitTitleFromDraft(draft: VisitDraft) {
  return optionLabel(PERFORMANCES, draft.performanceId, draft.customTitle);
}

export function visitTeamFromDraft(draft: VisitDraft) {
  return optionLabel(TEAMS, draft.teamId, draft.customTeam);
}

export function VisitForm({
  selected,
  draft,
  selectedVisits,
  onChange,
  onSave,
  onClear,
  onDelete,
}: Props) {
  const datetimeValue =
    draft.date && draft.time
      ? `${draft.date}T${draft.time}`
      : draft.date
        ? `${draft.date}T18:30`
        : "";

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-widest text-zinc-500">目前選擇</p>
          {selected ? (
            <>
              <p className="text-xs text-zinc-400">{SEAT_TYPE_LABEL[selected.type]}</p>
              <h2 className="text-xl font-bold text-white">{selected.id}</h2>
            </>
          ) : (
            <p className="mt-1 text-sm text-zinc-400">尚未選擇位子，請先點座位圖。</p>
          )}
        </div>
        {selected ? (
          <button
            className="min-h-11 rounded-lg px-3 text-sm text-zinc-400"
            onClick={onClear}
            type="button"
          >
            清除選擇
          </button>
        ) : null}
      </div>

      <label className="block text-sm text-zinc-300">
        公演名
        <select
          className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
          value={draft.performanceId}
          onChange={(e) => onChange({ performanceId: e.target.value })}
        >
          {PERFORMANCES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      {draft.performanceId === "other" ? (
        <label className="block text-sm text-zinc-300">
          自訂公演名稱
          <input
            className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
            placeholder="例如：手牽手公演"
            value={draft.customTitle}
            onChange={(e) => onChange({ customTitle: e.target.value })}
          />
        </label>
      ) : null}

      <label className="block text-sm text-zinc-300">
        活動日期及時間
        <input
          className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
          type="datetime-local"
          value={datetimeValue}
          onChange={(e) => {
            const value = e.target.value;
            onChange({
              date: value.slice(0, 10),
              time: value.slice(11, 16),
            });
          }}
          required
        />
      </label>

      <label className="block text-sm text-zinc-300">
        組別／隊伍名稱
        <select
          className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
          value={draft.teamId}
          onChange={(e) => onChange({ teamId: e.target.value })}
        >
          <option value="">選擇隊伍（可選）</option>
          {TEAMS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      {draft.teamId === "other" ? (
        <label className="block text-sm text-zinc-300">
          自訂隊伍名稱
          <input
            className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
            placeholder="例如：混編／特別編成"
            value={draft.customTeam}
            onChange={(e) => onChange({ customTeam: e.target.value })}
          />
        </label>
      ) : null}

      <label className="block text-sm text-zinc-300">
        備註
        <input
          className="mt-1 min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white"
          placeholder="可填成員、心情或其他"
          value={draft.note}
          onChange={(e) => onChange({ note: e.target.value })}
        />
      </label>

      <button
        className="min-h-11 w-full rounded-lg bg-orange-500 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-700"
        disabled={!selected}
        onClick={onSave}
        type="button"
      >
        儲存紀錄
      </button>

      {selected ? (
        <ul className="space-y-2">
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
                    <p className="font-medium text-white">{formatVisitWhen(visit)}</p>
                    <p className="text-zinc-300">
                      {visit.title || "未填公演名稱"}
                      {visit.team ? `　${visit.team}` : ""}
                    </p>
                    {visit.note ? <p className="text-zinc-500">{visit.note}</p> : null}
                  </div>
                  <button
                    className="min-h-11 px-2 text-sm text-rose-300"
                    onClick={() => onDelete(visit.id)}
                    type="button"
                  >
                    刪除
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
