"use client";

import { MAP_SIZE, SEAT_TYPE_LABEL, seats, type Seat, type SeatType } from "@/data/seats";

const FILL: Record<SeatType, string> = {
  member: "#f2c14e",
  general: "#f08a3a",
  women: "#f3a0b8",
  raised: "#e06b2f",
};

type Props = {
  visitsBySeat: Record<string, number>;
  selectedId: string | null;
  onSelect: (seat: Seat) => void;
};

export function SeatMap({ visitsBySeat, selectedId, onSelect }: Props) {
  return (
    <svg
      viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
      className="h-auto w-full min-w-[720px] select-none"
      role="img"
      aria-label="烏梅劇場座位表"
    >
      <rect width={MAP_SIZE.width} height={MAP_SIZE.height} rx="18" fill="#1b1b1d" />

      <rect x="270" y="78" width="540" height="300" rx="10" fill="#f08a3a" />
      <text
        x="540"
        y="210"
        textAnchor="middle"
        fill="#fff8f0"
        fontSize="42"
        fontWeight="700"
      >
        STAGE
      </text>
      <text x="540" y="258" textAnchor="middle" fill="#fff8f0" fontSize="28">
        舞台
      </text>

      <text
        x="68"
        y="250"
        fill="#cfcfcf"
        fontSize="13"
        transform="rotate(-90 68 250)"
      >
        劇場出口（不對外開放）
      </text>
      <text
        x="1012"
        y="250"
        fill="#cfcfcf"
        fontSize="13"
        transform="rotate(90 1012 250)"
      >
        劇場出口（不對外開放）
      </text>

      <rect x="351" y="522" width="51" height="24" rx="4" fill="#3a3a3e" />
      <text x="376" y="539" textAnchor="middle" fill="#ddd" fontSize="12">
        柱
      </text>
      <rect x="678" y="522" width="51" height="24" rx="4" fill="#3a3a3e" />
      <text x="703" y="539" textAnchor="middle" fill="#ddd" fontSize="12">
        柱
      </text>

      <rect x="88" y="870" width="58" height="230" rx="8" fill="#f3b48a" />
      <text
        x="117"
        y="985"
        textAnchor="middle"
        fill="#3b2418"
        fontSize="18"
        fontWeight="700"
        transform="rotate(-90 117 985)"
      >
        見送等候區
      </text>

      <text
        x="968"
        y="1040"
        fill="#f3b48a"
        fontSize="18"
        fontWeight="700"
        textAnchor="middle"
        transform="rotate(90 968 1040)"
      >
        進場／離場通道
      </text>

      <rect x="501" y="1126" width="78" height="22" rx="4" fill="#3a3a3e" />
      <text x="540" y="1142" textAnchor="middle" fill="#ddd" fontSize="12">
        攝影機
      </text>

      <text x="128" y="1308" textAnchor="middle" fill="#cfcfcf" fontSize="12">
        劇場入口（不對外開放）
      </text>
      <text x="952" y="1308" textAnchor="middle" fill="#cfcfcf" fontSize="12">
        劇場出入口　往成員公式照牆
      </text>

      <g>
        <text x="132" y="548" fill="#f2c14e" fontSize="14" fontWeight="700">
          座位說明
        </text>
        <rect x="82" y="562" width="37" height="14" rx="3" fill={FILL.member} />
        <text x="128" y="574" fill="#eee" fontSize="12">
          會員限定席
        </text>
        <rect x="82" y="602" width="37" height="14" rx="3" fill={FILL.general} />
        <text x="128" y="614" fill="#eee" fontSize="12">
          一般席
        </text>
        <rect x="82" y="642" width="37" height="14" rx="3" fill={FILL.women} />
        <text x="128" y="654" fill="#eee" fontSize="12">
          女性優先席
        </text>
        <rect x="82" y="682" width="37" height="14" rx="3" fill={FILL.raised} />
        <text x="128" y="694" fill="#eee" fontSize="12">
          一般席（階梯加高席）
        </text>
      </g>

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
              x={seat.x}
              y={seat.y - 4}
              width={seat.w}
              height={26}
              rx="4"
              fill={count > 0 ? "#35c27a" : FILL[seat.type]}
              stroke={selected ? "#ffffff" : count > 0 ? "#bbffd8" : "rgba(0,0,0,0.25)"}
              strokeWidth={selected ? 2.4 : 1}
            />
            <text
              x={seat.x + seat.w / 2}
              y={seat.y + 13}
              textAnchor="middle"
              fill={count > 0 ? "#07351d" : "#2b1408"}
              fontSize={seat.w > 30 ? 10 : 8}
              fontWeight="700"
            >
              {seat.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
