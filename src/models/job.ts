import { BackgroundType } from "../types/background";
import { BoardType } from "../types/board";
import { IconType } from "../types/icon";
import { JobProduct, Job as _Job, JobName } from "../types/job";
import { Outline } from "../types/outline";

export default class job implements _Job {
  constructor(
    public id: string,
    public icon: IconType,
    public name: JobName,
    public isActive : boolean,
    public level : number,
    public maxMoney : number,
    public maxNumber : number,
    public perMoney : number,
    public backgroundImg : BackgroundType,
    public boardImg : BoardType,
    public product: JobProduct,
    public owner: {
      name: string;
      message: string;
    },
    public outline: Outline,

  ) {
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.isActive = isActive;
    this.level = level;
    this.maxNumber = maxNumber;
    this.maxMoney = maxMoney;
    this.perMoney = perMoney;
    this.backgroundImg = backgroundImg;
    this.boardImg = boardImg;
    this.owner = owner;
    this.outline = outline;
  }
}