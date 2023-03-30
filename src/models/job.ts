import { JobProduct, Job as _Job, JobType, CommentType } from "../types/job";
import { Outline } from "../types/outline";

export default class job implements _Job {
  constructor(
    public id: string,
    public icon: JobType,
    public name: JobType,
    public isActive : boolean,
    public level : number,
    public maxMoney : number,
    public maxNumber : number,
    public perMoney : number[],
    public backgroundImg : JobType,
    public boardImg : JobType,
    public product: JobProduct,
    public owner: {
      name: string;
      message: string;
    },
    public comments: {
      poor: CommentType[];
      average: CommentType[];
      good: CommentType[];
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
    this.comments = comments;
    this.outline = outline;
  }
}
