import { BackgroundType } from "./background";
import { IconType } from "./icon";
import { Outline } from "./outline";

export const JobName = {
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
export type JobName = typeof JobName[keyof typeof JobName];

export interface Job {
  id: string;
  icon: IconType;
  name: string;
  isActive: boolean;
  level: number;
  maxNumber: number;
  maxMoney: number;
  perMoney: number;
  backgroundImg: BackgroundType;
  product: JobProduct;
  owner: {
    name: string;
    message: string;
  };
  outline: Outline;
}

export interface JobProduct {
  default: {
    before: string;
  }[];
  bonus: {
    before: string;
  }[];
  style: { width: number; height: number };
}
