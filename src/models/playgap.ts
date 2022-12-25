import { PlayGap as _PlayGap } from "../types/play";

export default class playgap implements _PlayGap {
  constructor(
    public frontGap: number,
    public passedGap: number,
  ) {
    this.frontGap = frontGap;
    this.passedGap = passedGap;
  }
}
