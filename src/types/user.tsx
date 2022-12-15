import { JobName } from "./job";
import { UserIconType } from "./userIcon";

export interface User {
  name: string;
  money: number;
  icon: UserIconType;
  nowJob: JobName;
  gachaStandBy: boolean;
}