export const GachaStatus = {
  stop: "stop",
  closed: "closed",
  opened: "opened",
  result: "result",
} as const;
export type GachaStatus = typeof GachaStatus[keyof typeof GachaStatus];
