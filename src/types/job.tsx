import { ImageSourcePropType } from "react-native";
import { BackgroundType } from "./background";
import { BoardType } from "./board";
import { IconType } from "./icon";
import { Outline } from "./outline";

export const JobType = {
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
export type JobType = typeof JobType[keyof typeof JobType];

export interface Job {
  id: string;
  icon: IconType;
  name: JobType;
  isActive: boolean;
  level: number;
  maxNumber: number;
  maxMoney: number;
  perMoney: number[];
  backgroundImg: BackgroundType;
  boardImg: BoardType;
  product: JobProduct;
  owner: {
    name: string;
    message: string;
  };
  outline: Outline;
}

export interface JobProduct {
  default: {
    before: ImageSourcePropType;
  }[];
  bonus: {
    before: ImageSourcePropType;
  }[];
  style: { width: number; height: number };
}