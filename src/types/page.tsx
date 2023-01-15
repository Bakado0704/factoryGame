export const page = {
    start: "start",
    jobChange: "jobChange",
    game: "game",
    gacha: "gacha",
    ranking: "ranking",
  } as const;
  export type page = typeof page[keyof typeof page];