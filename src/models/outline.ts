import { Outline as _Outline } from "../types/outline";

export default class Outline implements _Outline {
  constructor(
    public companey: string,
    public category: string,
    public work: string,
    public basicMoney: number,
    public holiday: string,
    public retirement: string,
    public difficulty: string,
    public workplace: string
  ) {
    this.companey = companey;
    this.category = category;
    this.work = work;
    this.basicMoney = basicMoney;
    this.holiday = holiday;
    this.retirement = retirement;
    this.difficulty = difficulty;
    this.workplace = workplace;
  }
}
