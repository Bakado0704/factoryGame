import { PlayColor, PlayTarget as _PlayTarget } from "../types/play";

export default class playtarget implements _PlayTarget {
  constructor(
    public velocity: number,
    public color: PlayColor,
    public ImageSource: string[]
  ) {
    this.velocity = velocity;
    this.color = color;
    this.ImageSource = ImageSource;
  }
}
