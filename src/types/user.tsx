import { GachaStatus } from "./gacha";
import { JobName } from "./job";
import { page } from "./page";
import { productType } from "./product";
import { UserIconType } from "./userIcon";

export interface User {
  name: string;
  id: string;
  money: number;
  icon: UserIconType;
  nowJob: JobName;
  gachaStandBy: boolean;
  productType: productType;
  page: page;
  gachaStatus: GachaStatus;
  gachaCost: number;
  drink: number;
  drinkCost: number;
  mute: Mute;
}

export const Mute = {
  on: "on",
  off: "off",
} as const;
export type Mute = typeof Mute[keyof typeof Mute];