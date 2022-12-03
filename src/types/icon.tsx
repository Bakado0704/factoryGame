export const IconType = {
  apng: "image/apng",
  avif: "image/avif",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  webp: "image/webp",
} as const;
export type IconType = typeof IconType[keyof typeof IconType];
