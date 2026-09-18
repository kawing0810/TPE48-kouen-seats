"use client";

import { MAP_SIZE, SEAT_TYPE_LABEL, seats, type Seat } from "@/data/seats";

type Props = {
  visitsBySeat: Record<string, number>;
  selectedId: string | null;
  onSelect: (seat: Seat) => void;
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Canva 座標是文字框；原圖格子往上長、含橘色外框。 */
function visualBox(seat: Seat) {
  const x = seat.x - 0.4;
  const y = seat.y - 9;
  const w = seat.w + 0.8;
  const h = seat.h + 9;
  return {
    x,
    y,
    w,
    h,
    cx: x + w / 2,
    cy: y + h / 2,
    rx: Math.min(6, w * 0.18, h * 0.22),
  };
}

function cellFill(count: number, selected: boolean) {
  if (count > 0) return "#3dcf7a";
  if (selected) return "#ffe566";
  return "transparent";
}

export function SeatMap({ visitsBySeat, selectedId, onSelect }: Props) {
  return (
    <svg
      viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full touch-manipulation select-none"
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
        const filled = count > 0 || selected;
        const box = visualBox(seat);

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
              className={filled ? undefined : "seat-hit"}
              x={box.x}
              y={box.y}
              width={box.w}
              height={box.h}
              rx={box.rx}
              fill={cellFill(count, selected)}
            />
            {filled ? (
              <text
                x={box.cx}
                y={box.cy + 0.5}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#3a2418"
                fontSize={box.w > 32 ? 12 : 10}
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
