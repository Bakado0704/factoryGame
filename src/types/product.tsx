export const productType = {
  default: "default",
  bonus: "bonus",
} as const;
export type productType = typeof productType[keyof typeof productType];
