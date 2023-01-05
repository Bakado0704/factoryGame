import { GachaStatus } from "./gacha";
import { JobName } from "./job";
import { page } from "./page";
import { productType } from "./product";
import { UserIconType } from "./userIcon";

export interface User {
  name: string;
  money: number;
  icon: UserIconType;
  nowJob: JobName;
  gachaStandBy: boolean;
  productType: productType;
  page: page;
  gachaStatus: GachaStatus;
  gachaCost: number;
}