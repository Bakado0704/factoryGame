import { GachaStatus } from "../types/gacha";
import { JobType} from "../types/job";
import { page } from "../types/page";
import { productType } from "../types/product";
import { Mute, User as _User } from "../types/user";
import { UserIconType } from "../types/userIcons";

export default class User implements User {
  constructor(
    public name: string,
    public id: string,
    public money: number,
    public icon: UserIconType,
    public nowJob: JobType,
    public gachaStandBy: boolean,
    public productType: productType,
    public page: page,
    public gachaStatus: GachaStatus,
    public gachaCost: number,
    public drink: number,
    public drinkCost: number,
    public mute: Mute,
  ) {
    this.name = name;
    this.id = id;
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
    this.mute = mute;
  }
}