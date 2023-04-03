import PlayPattern from "../../../models/playpattern";
import PlayTarget from "../../../models/playtarget";
import Colors from "../../../constants/color";

export const PATTERN_DATES = [
  //山川製作所
  [
    [
      new PlayPattern(
        [80],
        [-1],
        new PlayTarget(
          100,
          Colors.Black,
          require("../../../assets/play/blackButton.png"),
          require("../../../assets/play/blackButtonOff.png"),
          require("../../../assets/play/blackButtonPressed.png")
        )
      ),
      new PlayPattern(
        [120, 140],
        [-1, 1],
        new PlayTarget(
          80,
          Colors.Green,
          require("../../../assets/play/greenButton.png"),
          require("../../../assets/play/greenButtonOff.png"),
          require("../../../assets/play/greenButtonPressed.png")
        )
      ),
      new PlayPattern(
        [100, 180],
        [1, -1],
        new PlayTarget(
          120,
          Colors.Yellow,
          require("../../../assets/play/yellowButton.png"),
          require("../../../assets/play/yellowButtonOff.png"),
          require("../../../assets/play/yellowButtonPressed.png"),
        )
      )
    ],

  ],
];
