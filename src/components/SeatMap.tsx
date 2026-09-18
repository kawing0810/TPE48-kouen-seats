"use client";

import { MAP_SIZE, SEAT_TYPE_LABEL, seats, type Seat } from "@/data/seats";

type Props = {
  visitsBySeat: Record<string, number>;
  selectedId: string | null;
  onSelect: (seat: Seat) => void;
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SeatMap({ visitsBySeat, selectedId, onSelect }: Props) {
  return (
    <svg
      viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
      className="h-auto w-full min-w-[720px] select-none"
      role="img"
      aria-label="烏梅劇場座位表"
    >
      <image
        href={`${BASE}/wumei-seats.png`}
        width={MAP_SIZE.width}
        height={MAP_SIZE.height}
        preserveAspectRatio="xMidYMid meet"
      />

      {seats.map((seat) => {
        const count = visitsBySeat[seat.id] ?? 0;
        const selected = selectedId === seat.id;
        return (
          <g
            key={seat.id}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`${seat.id} ${SEAT_TYPE_LABEL[seat.type]}${count > 0 ? ` 已坐 ${count} 次` : ""}`}
            onClick={() => onSelect(seat)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(seat);
              }
            }}
          >
            <title>
              {seat.id}　{count > 0 ? `已坐 ${count} 次` : "尚未紀錄"}
            </title>
            <rect
              className={count > 0 || selected ? undefined : "seat-hit"}
              x={seat.x - 1}
              y={seat.y - 6}
              width={seat.w + 2}
              height={28}
              rx="4"
              fill={count > 0 ? "rgba(53, 194, 122, 0.78)" : selected ? "rgba(255,255,255,0.18)" : "transparent"}
              stroke={selected ? "#ffffff" : count > 0 ? "#bbffd8" : "transparent"}
              strokeWidth={selected || count > 0 ? 2 : 0}
            />
            {count > 0 ? (
              <text
                x={seat.x + seat.w / 2}
                y={seat.y + 12}
                textAnchor="middle"
                fill="#07351d"
                fontSize={seat.w > 30 ? 10 : 8}
                fontWeight="700"
              >
                {seat.id}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
