import { PlayColor } from "../../types/play";
import  PlayPattern from "../../models/playpattern";
import PlayTarget from "../../models/playtarget";

export const PATTERN_DATES = [
  //山川製作所
  [[
    new PlayPattern([100], [1], new PlayTarget(100, PlayColor.Black, [""])),
    new PlayPattern(
      [80, 150, 200],
      [-1, 1, -1],
      new PlayTarget(80, PlayColor.Green, [""])
    ),
    new PlayPattern(
      [90, 150],
      [1, -1],
      new PlayTarget(120, PlayColor.Yellow, [""])
    ),
  ],
  [
    new PlayPattern([200], [1], new PlayTarget(100, PlayColor.Black, [""])),
    new PlayPattern(
      [100, 150, 200],
      [-1, 1, -1],
      new PlayTarget(80, PlayColor.Green, [""])
    ),
    new PlayPattern(
      [120, 250],
      [1, -1],
      new PlayTarget(120, PlayColor.Yellow, [""])
    ),
  ],
  [
    new PlayPattern([300], [1], new PlayTarget(100, PlayColor.Black, [""])),
    new PlayPattern(
      [200, 250, 300],
      [-1, 1, -1],
      new PlayTarget(80, PlayColor.Green, [""])
    ),
    new PlayPattern(
      [120, 250],
      [1, -1],
      new PlayTarget(120, PlayColor.Yellow, [""])
    ),
  ]],

];
