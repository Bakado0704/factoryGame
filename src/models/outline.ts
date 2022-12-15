import { Outline as _Outline } from "../types/outline";

export default class outline implements _Outline {
  constructor(
    public company: string,
    public category: string,
    public work: string,
    public basicMoney: number,
    public level: number,
    public holiday: string,
    public retirement: string,
    public workplace: string,
    public background: string,
    public button: string,
  ) {
    this.company = company;
    this.category = category;
    this.work = work;
    this.basicMoney = basicMoney;
    this.level = level;
    this.holiday = holiday;
    this.retirement = retirement;
    this.workplace = workplace;
    this.background = background;
    this.button = button;
  }
}
