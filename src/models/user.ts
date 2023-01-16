import { GachaStatus } from "../types/gacha";
import { JobName } from "../types/job";
import { page } from "../types/page";
import { productType } from "../types/product";
import { User as _User } from "../types/user";
import { UserIconType } from "../types/userIcon";

export default class User implements User {
  constructor(
    public name: string,
    public money: number,
    public icon: UserIconType,
    public nowJob: JobName,
    public gachaStandBy: boolean,
    public productType: productType,
    public page: page,
    public gachaStatus: GachaStatus,
    public gachaCost: number,
    public drink: number,
    public drinkCost: number,
  ) {
    this.name = name;
    this.money = money;
    this.icon = icon;
    this.nowJob = nowJob;
    this.gachaStandBy = gachaStandBy;
    this.productType = productType;
    this.page = page;
    this.gachaStatus = gachaStatus;
    this.gachaCost = gachaCost;
    this.drink = drink;
    this.drinkCost = drinkCost;
  }
}