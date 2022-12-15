import { JobName } from "../types/job";
import { User as _User } from "../types/user";
import { UserIconType } from "../types/userIcon";

export default class User implements User {
  constructor(
    public name: string,
    public money: number,
    public icon: UserIconType,
    public nowJob: JobName,
    public gachaStandBy: boolean,
  ) {
    this.name = name;
    this.money = money;
    this.icon = icon;
    this.nowJob = nowJob;
    this.gachaStandBy = gachaStandBy;
  }
}