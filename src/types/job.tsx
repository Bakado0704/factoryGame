import { ImageSourcePropType } from "react-native";
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
  icon: JobType;
  name: JobType;
  isActive: boolean;
  level: number;
  maxNumber: number;
  maxMoney: number;
  perMoney: number[];
  backgroundImg: JobType;
  boardImg: JobType;
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
  defaultFailure: {
    before: ImageSourcePropType;
  }[];
  bonus: {
    before: ImageSourcePropType;
  }[];
  bonusFailure: {
    before: ImageSourcePropType;
  }[];
  style: { width: number; height: number };
}