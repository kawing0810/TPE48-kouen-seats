export type ShowOption = {
  id: string;
  label: string;
};

export const PERFORMANCES: ShowOption[] = [
  { id: "reset", label: "RESET公演" },
  { id: "birthday", label: "生日會" },
  { id: "special", label: "特別公演" },
  { id: "other", label: "其他" },
];

export const TEAMS: ShowOption[] = [
  { id: "tiii", label: "Team TIII" },
  { id: "p", label: "Team P" },
  { id: "kenkyuusei", label: "研究生" },
  { id: "ttt", label: "Unit TIC TAC TOE" },
  { id: "pab", label: "Unit Peek A Boo" },
  { id: "other", label: "其他" },
];

export function optionLabel(
  options: ShowOption[],
  id: string,
  custom: string,
) {
  if (id === "other") return custom.trim();
  return options.find((item) => item.id === id)?.label ?? custom.trim();
}

export function optionIdFromLabel(options: ShowOption[], label: string) {
  const match = options.find((item) => item.label === label);
  if (match) return match.id;
  return label ? "other" : "";
}
