export type SeatType = "member" | "general" | "women" | "raised";

export type Seat = {
  id: string;
  row: string;
  number: number;
  x: number;
  y: number;
  w: number;
  h: number;
  type: SeatType;
};

export const MAP_SIZE = { width: 1080, height: 1350 } as const;

export const SEAT_TYPE_LABEL: Record<SeatType, string> = {
  member: "會員限定席",
  general: "一般席",
  women: "女性優先席",
  raised: "一般席（階梯加高席）",
};

export const seats: Seat[] = [
  {
    "id": "A1",
    "row": "A",
    "number": 1,
    "x": 405.44,
    "y": 535.29,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "A2",
    "row": "A",
    "number": 2,
    "x": 439.5,
    "y": 535.29,
    "w": 33.9,
    "h": 22.54,
    "type": "member"
  },
  {
    "id": "A3",
    "row": "A",
    "number": 3,
    "x": 473.4,
    "y": 535.29,
    "w": 33.9,
    "h": 22.54,
    "type": "member"
  },
  {
    "id": "A6",
    "row": "A",
    "number": 6,
    "x": 574.78,
    "y": 535.29,
    "w": 33.9,
    "h": 22.54,
    "type": "member"
  },
  {
    "id": "A7",
    "row": "A",
    "number": 7,
    "x": 608.68,
    "y": 535.29,
    "w": 33.9,
    "h": 22.54,
    "type": "member"
  },
  {
    "id": "A8",
    "row": "A",
    "number": 8,
    "x": 641.89,
    "y": 535.29,
    "w": 33.9,
    "h": 22.54,
    "type": "member"
  },
  {
    "id": "B1",
    "row": "B",
    "number": 1,
    "x": 405.6,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B2",
    "row": "B",
    "number": 2,
    "x": 439.5,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B3",
    "row": "B",
    "number": 3,
    "x": 473.4,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B4",
    "row": "B",
    "number": 4,
    "x": 506.98,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B5",
    "row": "B",
    "number": 5,
    "x": 540.88,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B6",
    "row": "B",
    "number": 6,
    "x": 574.78,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B7",
    "row": "B",
    "number": 7,
    "x": 608.68,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "B8",
    "row": "B",
    "number": 8,
    "x": 641.73,
    "y": 584.05,
    "w": 33.9,
    "h": 22.55,
    "type": "member"
  },
  {
    "id": "C1",
    "row": "C",
    "number": 1,
    "x": 370.8,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C2",
    "row": "C",
    "number": 2,
    "x": 404.01,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C3",
    "row": "C",
    "number": 3,
    "x": 437.92,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C4",
    "row": "C",
    "number": 4,
    "x": 471.82,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C5",
    "row": "C",
    "number": 5,
    "x": 505.4,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C6",
    "row": "C",
    "number": 6,
    "x": 539.3,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C7",
    "row": "C",
    "number": 7,
    "x": 573.2,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C8",
    "row": "C",
    "number": 8,
    "x": 607.1,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C9",
    "row": "C",
    "number": 9,
    "x": 640.31,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "C10",
    "row": "C",
    "number": 10,
    "x": 674.21,
    "y": 636.66,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D1",
    "row": "D",
    "number": 1,
    "x": 370.8,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D2",
    "row": "D",
    "number": 2,
    "x": 404.01,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D3",
    "row": "D",
    "number": 3,
    "x": 437.92,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D4",
    "row": "D",
    "number": 4,
    "x": 471.82,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D5",
    "row": "D",
    "number": 5,
    "x": 505.4,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D6",
    "row": "D",
    "number": 6,
    "x": 539.3,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D7",
    "row": "D",
    "number": 7,
    "x": 573.2,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D8",
    "row": "D",
    "number": 8,
    "x": 607.1,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D9",
    "row": "D",
    "number": 9,
    "x": 640.31,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "D10",
    "row": "D",
    "number": 10,
    "x": 674.21,
    "y": 689.0,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "E1",
    "row": "E",
    "number": 1,
    "x": 370.8,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "E2",
    "row": "E",
    "number": 2,
    "x": 404.01,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "E3",
    "row": "E",
    "number": 3,
    "x": 437.92,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "E4",
    "row": "E",
    "number": 4,
    "x": 471.82,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "E5",
    "row": "E",
    "number": 5,
    "x": 505.4,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "E6",
    "row": "E",
    "number": 6,
    "x": 539.3,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "E7",
    "row": "E",
    "number": 7,
    "x": 573.2,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "E8",
    "row": "E",
    "number": 8,
    "x": 607.1,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "E9",
    "row": "E",
    "number": 9,
    "x": 640.31,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "E10",
    "row": "E",
    "number": 10,
    "x": 674.21,
    "y": 741.34,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "F1",
    "row": "F",
    "number": 1,
    "x": 370.8,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "F2",
    "row": "F",
    "number": 2,
    "x": 404.01,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "F3",
    "row": "F",
    "number": 3,
    "x": 437.92,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "F4",
    "row": "F",
    "number": 4,
    "x": 471.82,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "F5",
    "row": "F",
    "number": 5,
    "x": 505.4,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "F6",
    "row": "F",
    "number": 6,
    "x": 539.3,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "F7",
    "row": "F",
    "number": 7,
    "x": 573.2,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "F8",
    "row": "F",
    "number": 8,
    "x": 607.1,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "F9",
    "row": "F",
    "number": 9,
    "x": 640.31,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "F10",
    "row": "F",
    "number": 10,
    "x": 674.21,
    "y": 793.68,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "G1",
    "row": "G",
    "number": 1,
    "x": 371.61,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "G2",
    "row": "G",
    "number": 2,
    "x": 404.82,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "G3",
    "row": "G",
    "number": 3,
    "x": 438.72,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "G4",
    "row": "G",
    "number": 4,
    "x": 472.62,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "G5",
    "row": "G",
    "number": 5,
    "x": 506.21,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "G6",
    "row": "G",
    "number": 6,
    "x": 540.11,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "G7",
    "row": "G",
    "number": 7,
    "x": 574.01,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "G8",
    "row": "G",
    "number": 8,
    "x": 607.91,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "G9",
    "row": "G",
    "number": 9,
    "x": 641.12,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "G10",
    "row": "G",
    "number": 10,
    "x": 675.02,
    "y": 846.02,
    "w": 33.9,
    "h": 22.54,
    "type": "women"
  },
  {
    "id": "H1",
    "row": "H",
    "number": 1,
    "x": 370.4,
    "y": 898.37,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H2",
    "row": "H",
    "number": 2,
    "x": 403.61,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H3",
    "row": "H",
    "number": 3,
    "x": 437.51,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H4",
    "row": "H",
    "number": 4,
    "x": 471.41,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H5",
    "row": "H",
    "number": 5,
    "x": 504.99,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H6",
    "row": "H",
    "number": 6,
    "x": 538.9,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H7",
    "row": "H",
    "number": 7,
    "x": 572.8,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H8",
    "row": "H",
    "number": 8,
    "x": 606.7,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H9",
    "row": "H",
    "number": 9,
    "x": 639.91,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "H10",
    "row": "H",
    "number": 10,
    "x": 673.81,
    "y": 898.36,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "I1",
    "row": "I",
    "number": 1,
    "x": 355.28,
    "y": 951.08,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I2",
    "row": "I",
    "number": 2,
    "x": 388.49,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I3",
    "row": "I",
    "number": 3,
    "x": 422.39,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I4",
    "row": "I",
    "number": 4,
    "x": 456.29,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I5",
    "row": "I",
    "number": 5,
    "x": 489.87,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I6",
    "row": "I",
    "number": 6,
    "x": 523.77,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I7",
    "row": "I",
    "number": 7,
    "x": 557.67,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I8",
    "row": "I",
    "number": 8,
    "x": 591.57,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I9",
    "row": "I",
    "number": 9,
    "x": 624.78,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I10",
    "row": "I",
    "number": 10,
    "x": 658.68,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "I11",
    "row": "I",
    "number": 11,
    "x": 692.58,
    "y": 951.07,
    "w": 33.9,
    "h": 22.54,
    "type": "raised"
  },
  {
    "id": "J1",
    "row": "J",
    "number": 1,
    "x": 245.58,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J2",
    "row": "J",
    "number": 2,
    "x": 278.79,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J3",
    "row": "J",
    "number": 3,
    "x": 312.69,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J4",
    "row": "J",
    "number": 4,
    "x": 346.59,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J5",
    "row": "J",
    "number": 5,
    "x": 380.18,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J6",
    "row": "J",
    "number": 6,
    "x": 414.08,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J7",
    "row": "J",
    "number": 7,
    "x": 447.98,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J8",
    "row": "J",
    "number": 8,
    "x": 481.88,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J9",
    "row": "J",
    "number": 9,
    "x": 515.09,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J10",
    "row": "J",
    "number": 10,
    "x": 548.99,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J11",
    "row": "J",
    "number": 11,
    "x": 582.89,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J12",
    "row": "J",
    "number": 12,
    "x": 616.1,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J13",
    "row": "J",
    "number": 13,
    "x": 650.0,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J14",
    "row": "J",
    "number": 14,
    "x": 683.9,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J15",
    "row": "J",
    "number": 15,
    "x": 717.8,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J16",
    "row": "J",
    "number": 16,
    "x": 751.73,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "J17",
    "row": "J",
    "number": 17,
    "x": 785.63,
    "y": 1005.49,
    "w": 33.9,
    "h": 22.54,
    "type": "general"
  },
  {
    "id": "K1",
    "row": "K",
    "number": 1,
    "x": 236.42,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K2",
    "row": "K",
    "number": 2,
    "x": 269.63,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K3",
    "row": "K",
    "number": 3,
    "x": 303.53,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K4",
    "row": "K",
    "number": 4,
    "x": 337.43,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K5",
    "row": "K",
    "number": 5,
    "x": 371.02,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K6",
    "row": "K",
    "number": 6,
    "x": 404.92,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K7",
    "row": "K",
    "number": 7,
    "x": 438.82,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K8",
    "row": "K",
    "number": 8,
    "x": 472.72,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K9",
    "row": "K",
    "number": 9,
    "x": 505.93,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K10",
    "row": "K",
    "number": 10,
    "x": 539.83,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K11",
    "row": "K",
    "number": 11,
    "x": 573.73,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K12",
    "row": "K",
    "number": 12,
    "x": 606.94,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K13",
    "row": "K",
    "number": 13,
    "x": 640.6,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K14",
    "row": "K",
    "number": 14,
    "x": 673.81,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K15",
    "row": "K",
    "number": 15,
    "x": 707.71,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K16",
    "row": "K",
    "number": 16,
    "x": 741.61,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K17",
    "row": "K",
    "number": 17,
    "x": 777.54,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "K18",
    "row": "K",
    "number": 18,
    "x": 809.51,
    "y": 1058.87,
    "w": 33.9,
    "h": 22.55,
    "type": "raised"
  },
  {
    "id": "L1",
    "row": "L",
    "number": 1,
    "x": 235.38,
    "y": 1106.65,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L2",
    "row": "L",
    "number": 2,
    "x": 264.95,
    "y": 1106.65,
    "w": 27.65,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L3",
    "row": "L",
    "number": 3,
    "x": 294.52,
    "y": 1106.65,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L4",
    "row": "L",
    "number": 4,
    "x": 324.08,
    "y": 1106.65,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L5",
    "row": "L",
    "number": 5,
    "x": 353.65,
    "y": 1107.48,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L6",
    "row": "L",
    "number": 6,
    "x": 383.21,
    "y": 1107.48,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L7",
    "row": "L",
    "number": 7,
    "x": 412.78,
    "y": 1107.48,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L8",
    "row": "L",
    "number": 8,
    "x": 442.35,
    "y": 1107.48,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L9",
    "row": "L",
    "number": 9,
    "x": 471.91,
    "y": 1106.65,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L10",
    "row": "L",
    "number": 10,
    "x": 580.59,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L11",
    "row": "L",
    "number": 11,
    "x": 609.84,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L12",
    "row": "L",
    "number": 12,
    "x": 639.08,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L13",
    "row": "L",
    "number": 13,
    "x": 668.33,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L14",
    "row": "L",
    "number": 14,
    "x": 697.58,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L15",
    "row": "L",
    "number": 15,
    "x": 726.83,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L16",
    "row": "L",
    "number": 16,
    "x": 756.08,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L17",
    "row": "L",
    "number": 17,
    "x": 785.33,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "L18",
    "row": "L",
    "number": 18,
    "x": 814.58,
    "y": 1106.65,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M1",
    "row": "M",
    "number": 1,
    "x": 207.18,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M2",
    "row": "M",
    "number": 2,
    "x": 236.94,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M3",
    "row": "M",
    "number": 3,
    "x": 266.19,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M4",
    "row": "M",
    "number": 4,
    "x": 295.94,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M5",
    "row": "M",
    "number": 5,
    "x": 325.7,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M6",
    "row": "M",
    "number": 6,
    "x": 355.45,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M7",
    "row": "M",
    "number": 7,
    "x": 385.21,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M8",
    "row": "M",
    "number": 8,
    "x": 414.96,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M9",
    "row": "M",
    "number": 9,
    "x": 444.72,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M10",
    "row": "M",
    "number": 10,
    "x": 474.47,
    "y": 1160.61,
    "w": 26.41,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M11",
    "row": "M",
    "number": 11,
    "x": 579.66,
    "y": 1161.86,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M12",
    "row": "M",
    "number": 12,
    "x": 608.91,
    "y": 1161.44,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M13",
    "row": "M",
    "number": 13,
    "x": 638.16,
    "y": 1161.44,
    "w": 29.76,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M14",
    "row": "M",
    "number": 14,
    "x": 667.41,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M15",
    "row": "M",
    "number": 15,
    "x": 696.66,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M16",
    "row": "M",
    "number": 16,
    "x": 726.11,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M17",
    "row": "M",
    "number": 17,
    "x": 755.15,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M18",
    "row": "M",
    "number": 18,
    "x": 784.4,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M19",
    "row": "M",
    "number": 19,
    "x": 813.65,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "M20",
    "row": "M",
    "number": 20,
    "x": 843.41,
    "y": 1161.44,
    "w": 29.55,
    "h": 22.55,
    "type": "general"
  },
  {
    "id": "N1",
    "row": "N",
    "number": 1,
    "x": 227.07,
    "y": 469.33,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N2",
    "row": "N",
    "number": 2,
    "x": 227.34,
    "y": 437.74,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N3",
    "row": "N",
    "number": 3,
    "x": 227.34,
    "y": 406.14,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N4",
    "row": "N",
    "number": 4,
    "x": 227.34,
    "y": 374.54,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N5",
    "row": "N",
    "number": 5,
    "x": 227.34,
    "y": 342.95,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N6",
    "row": "N",
    "number": 6,
    "x": 227.34,
    "y": 311.35,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N7",
    "row": "N",
    "number": 7,
    "x": 227.34,
    "y": 279.76,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N8",
    "row": "N",
    "number": 8,
    "x": 227.34,
    "y": 248.16,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N9",
    "row": "N",
    "number": 9,
    "x": 227.34,
    "y": 216.57,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N10",
    "row": "N",
    "number": 10,
    "x": 227.34,
    "y": 184.97,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "N11",
    "row": "N",
    "number": 11,
    "x": 227.6,
    "y": 153.38,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O1",
    "row": "O",
    "number": 1,
    "x": 175.43,
    "y": 500.93,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O2",
    "row": "O",
    "number": 2,
    "x": 175.43,
    "y": 469.33,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O3",
    "row": "O",
    "number": 3,
    "x": 174.92,
    "y": 437.74,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O4",
    "row": "O",
    "number": 4,
    "x": 174.92,
    "y": 406.14,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O5",
    "row": "O",
    "number": 5,
    "x": 174.92,
    "y": 374.54,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O6",
    "row": "O",
    "number": 6,
    "x": 174.92,
    "y": 342.95,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O7",
    "row": "O",
    "number": 7,
    "x": 174.92,
    "y": 311.35,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O8",
    "row": "O",
    "number": 8,
    "x": 174.92,
    "y": 279.76,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O9",
    "row": "O",
    "number": 9,
    "x": 174.92,
    "y": 248.16,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O10",
    "row": "O",
    "number": 10,
    "x": 174.92,
    "y": 216.57,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O11",
    "row": "O",
    "number": 11,
    "x": 174.92,
    "y": 184.97,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O12",
    "row": "O",
    "number": 12,
    "x": 175.18,
    "y": 153.38,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "O13",
    "row": "O",
    "number": 13,
    "x": 174.92,
    "y": 122.07,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P1",
    "row": "P",
    "number": 1,
    "x": 816.24,
    "y": 464.45,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P2",
    "row": "P",
    "number": 2,
    "x": 816.24,
    "y": 433.32,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P3",
    "row": "P",
    "number": 3,
    "x": 816.24,
    "y": 401.72,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P4",
    "row": "P",
    "number": 4,
    "x": 816.24,
    "y": 370.13,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P5",
    "row": "P",
    "number": 5,
    "x": 816.24,
    "y": 338.53,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P6",
    "row": "P",
    "number": 6,
    "x": 816.24,
    "y": 306.94,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P7",
    "row": "P",
    "number": 7,
    "x": 816.24,
    "y": 275.34,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P8",
    "row": "P",
    "number": 8,
    "x": 816.24,
    "y": 243.75,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P9",
    "row": "P",
    "number": 9,
    "x": 816.24,
    "y": 212.15,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P10",
    "row": "P",
    "number": 10,
    "x": 816.24,
    "y": 180.55,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "P11",
    "row": "P",
    "number": 11,
    "x": 816.49,
    "y": 148.96,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q1",
    "row": "Q",
    "number": 1,
    "x": 868.85,
    "y": 496.22,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q2",
    "row": "Q",
    "number": 2,
    "x": 868.85,
    "y": 464.63,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q3",
    "row": "Q",
    "number": 3,
    "x": 868.34,
    "y": 433.03,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q4",
    "row": "Q",
    "number": 4,
    "x": 868.34,
    "y": 401.44,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q5",
    "row": "Q",
    "number": 5,
    "x": 868.34,
    "y": 369.84,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q6",
    "row": "Q",
    "number": 6,
    "x": 868.34,
    "y": 338.25,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q7",
    "row": "Q",
    "number": 7,
    "x": 868.34,
    "y": 306.65,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q8",
    "row": "Q",
    "number": 8,
    "x": 868.34,
    "y": 275.06,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q9",
    "row": "Q",
    "number": 9,
    "x": 868.34,
    "y": 243.46,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q10",
    "row": "Q",
    "number": 10,
    "x": 868.34,
    "y": 211.87,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q11",
    "row": "Q",
    "number": 11,
    "x": 868.34,
    "y": 180.27,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q12",
    "row": "Q",
    "number": 12,
    "x": 868.6,
    "y": 148.68,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  },
  {
    "id": "Q13",
    "row": "Q",
    "number": 13,
    "x": 868.34,
    "y": 117.36,
    "w": 34.81,
    "h": 22.0,
    "type": "general"
  }
];
