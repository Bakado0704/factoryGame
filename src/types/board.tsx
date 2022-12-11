export const BoardType = {
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
  zimu: "事務",
} as const;
export type BoardType = typeof BoardType[keyof typeof BoardType];
