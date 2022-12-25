import {
  PlayPattern as _PlayPattern,
  PlayTarget,
} from "../types/play";

export default class playpattern implements _PlayPattern {
  constructor(
    public distance: number[],
    public direction: number[],
    public target: PlayTarget,
  ) {
    this.distance = distance;
    this.direction = direction;
    this.target = target;
  }
}
