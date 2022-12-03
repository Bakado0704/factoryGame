export interface Gacha {
  status: GachaStatus;
  cost: number;
  result: GachaResult;
}

export const GachaResult = {
  yamagawa: "山川製作所",
  souzuki: "蒼月",
  ashBerry: "アッシュベリーInc",
  bentaro: "オリジン弁太郎",
  aguron: "アグロン精密",
  starFoods: "スターフーズ",
  sikaga: "鹿賀水産",
  tamazu: "玉津アーセナル",
  ozasa: "小篠建設",
  tanabe: "タナベ建設",
} as const;
export type GachaResult = typeof GachaResult[keyof typeof GachaResult];

export const GachaStatus = {
  stop: "stop",
  closed: "closed",
  opened: "opened",
  result: "result",
} as const;
export type GachaStatus = typeof GachaStatus[keyof typeof GachaStatus];
