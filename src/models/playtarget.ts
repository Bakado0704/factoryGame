import { ImageSourcePropType } from "react-native";
import { PlayTarget as _PlayTarget } from "../types/play";

export default class playtarget implements _PlayTarget {
  constructor(
    public velocity: number,
    public color: string,
    public ImageSourceOn: ImageSourcePropType,
    public ImageSourceOff: ImageSourcePropType,
    public ImageSourcePressed: ImageSourcePropType
  ) {
    this.velocity = velocity;
    this.color = color;
    this.ImageSourceOn = ImageSourceOn;
    this.ImageSourceOff = ImageSourceOff;
    this.ImageSourcePressed = ImageSourcePressed;
  }
}
