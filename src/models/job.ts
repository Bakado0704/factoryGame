import { BackgroundType } from "../types/background";
import { IconType } from "../types/icon";
import { JobName, JobProduct, Job as _Job } from "../types/job";
import { Outline } from "../types/outline";

export default class Job implements _Job {
  constructor(
    public id: string,
    public icon: IconType,
    public name: string,
    public isActive : boolean,
    public level : number,
    public maxMoney : number,
    public maxNumber : number,
    public perMoney : number,
    public backgroundImg : BackgroundType,
    public product: JobProduct,
    public owner: {
      name: string;
      message: string;
    },
    public Outline: Outline,

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
    this.owner = owner;
    this.Outline = Outline;
  }
}
