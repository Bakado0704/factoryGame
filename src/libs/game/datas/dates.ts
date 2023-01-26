import { PlayColor } from "../../../types/play";
import PlayPattern from "../../../models/playpattern";
import PlayTarget from "../../../models/playtarget";

export const PATTERN_DATES = [
  //山川製作所
  [
    [
      new PlayPattern(
        [100],
        [1],
        new PlayTarget(
          100,
          PlayColor.Black,
          require("../../../assets/play/blackButton.png"),
          require("../../../assets/play/blackButtonOff.png"),
          require("../../../assets/play/blackButtonPressed.png")
        )
      ),
      new PlayPattern(
        [80, 150, 200],
        [-1, 1, -1],
        new PlayTarget(
          80,
          PlayColor.Green,
          require("../../../assets/play/greenButton.png"),
          require("../../../assets/play/greenButtonOff.png"),
          require("../../../assets/play/greenButtonPressed.png")
        )
      ),
      new PlayPattern(
        [90, 150],
        [1, -1],
        new PlayTarget(
          120,
          PlayColor.Yellow,
          require("../../../assets/play/yellowButton.png"),
          require("../../../assets/play/yellowButtonOff.png"),
          require("../../../assets/play/yellowButtonPressed.png"),
        )
      ),
    ],
    [
      new PlayPattern(
        [200],
        [1],
        new PlayTarget(
          100,
          PlayColor.Black,
          require("../../../assets/play/blackButton.png"),
          require("../../../assets/play/blackButtonOff.png"),
          require("../../../assets/play/blackButtonPressed.png")
        )
      ),
      new PlayPattern(
        [100, 150, 200],
        [-1, 1, -1],
        new PlayTarget(
          80,
          PlayColor.Green,
          require("../../../assets/play/greenButton.png"),
          require("../../../assets/play/greenButtonOff.png"),
          require("../../../assets/play/greenButtonPressed.png")
        )
      ),
      new PlayPattern(
        [120, 250],
        [1, -1],
        new PlayTarget(
          120,
          PlayColor.Yellow,
          require("../../../assets/play/yellowButton.png"),
          require("../../../assets/play/yellowButtonOff.png"),
          require("../../../assets/play/yellowButtonPressed.png"),
        )
      ),
    ],
    [
      new PlayPattern(
        [300],
        [1],
        new PlayTarget(
          100,
          PlayColor.Black,
          require("../../../assets/play/blackButton.png"),
          require("../../../assets/play/blackButtonOff.png"),
          require("../../../assets/play/blackButtonPressed.png")
        )
      ),
      new PlayPattern(
        [200, 250, 300],
        [-1, 1, -1],
        new PlayTarget(
          80,
          PlayColor.Green,
          require("../../../assets/play/greenButton.png"),
          require("../../../assets/play/greenButtonOff.png"),
          require("../../../assets/play/greenButtonPressed.png")
        )
      ),
      new PlayPattern(
        [120, 250],
        [1, -1],
        new PlayTarget(
          120,
          PlayColor.Yellow,
          require("../../../assets/play/yellowButton.png"),
          require("../../../assets/play/yellowButtonOff.png"),
          require("../../../assets/play/yellowButtonPressed.png"),
        )
      ),
    ],
  ],
];
