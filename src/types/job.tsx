import { IconType } from "./icon";
import { Img } from "./img";
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
  name: JobName;
  icon: IconType;
  isActive: boolean;
  level: number;
  maxNumber: number;
  maxMoney: number;
  perMoney: number;
  backgroundImg: Img;
  prodct: JobProduct;
  owner: {
    name: string;
    message: string;
  };
  Outline: Outline;
}

export interface JobProduct {
  default: {
    before: Img;
  }[];
  bonus: {
    before: Img;
  }[];
}
