import { Play } from "../../types/play";
import PlayPattern from "../../models/playpattern";
import PlayTarget from "../../models/playtarget";
import playpattern from "../../models/playpattern";
import Colors from "../../constants/color";

export type state = {
  play: Play;
  activePlayPattern: playpattern[];
};

const initialState: state = {
  play: {
    status: "stop", // ゲームの状態を管理
    judge: "waiting", // ゲームの状態を管理
    processCount: 0, // 現在のカウント数
    completeCount: 0, // 成功した数
    money: 0, // 稼いだ金額
    stamina: 300, // スタミナ
    combo: 0, // 今のコンボ数
    pattern: [
      [
        new PlayPattern(
          [100],
          [1],
          new PlayTarget(
            100,
            Colors.Black,
            require("../../assets/play/blackButton.png"),
            require("../../assets/play/blackButtonOff.png"),
            require("../../assets/play/blackButtonPressed.png")
          )
        ),
        new PlayPattern(
          [80, 150, 200],
          [-1, 1, -1],
          new PlayTarget(
            80,
            Colors.Green,
            require("../../assets/play/greenButton.png"),
            require("../../assets/play/greenButtonOff.png"),
            require("../../assets/play/greenButtonPressed.png"),
          )
        ),
        new PlayPattern(
          [90, 150],
          [1, -1],
          new PlayTarget(
            120,
            Colors.Yellow,
            require("../../assets/play/yellowButton.png"),
            require("../../assets/play/yellowButtonOff.png"),
            require("../../assets/play/yellowButtonPressed.png"),
          )
        ),
      ],
      [
        new PlayPattern(
          [200],
          [1],
          new PlayTarget(
            100,
            Colors.Black,
            require("../../assets/play/blackButton.png"),
            require("../../assets/play/blackButtonOff.png"),
            require("../../assets/play/blackButtonPressed.png")
          )
        ),
        new PlayPattern(
          [100, 150, 200],
          [-1, 1, -1],
          new PlayTarget(
            80,
            Colors.Green,
            require("../../assets/play/greenButton.png"),
            require("../../assets/play/greenButtonOff.png"),
            require("../../assets/play/greenButtonPressed.png"),
          )
        ),
        new PlayPattern(
          [120, 250],
          [1, -1],
          new PlayTarget(
            120,
            Colors.Yellow,
            require("../../assets/play/yellowButton.png"),
            require("../../assets/play/yellowButtonOff.png"),
            require("../../assets/play/yellowButtonPressed.png"),
          )
        ),
      ],
      [
        new PlayPattern(
          [300],
          [1],
          new PlayTarget(
            100,
            Colors.Black,
            require("../../assets/play/blackButton.png"),
            require("../../assets/play/blackButtonOff.png"),
            require("../../assets/play/blackButtonPressed.png")
          )
        ),
        new PlayPattern(
          [200, 250, 300],
          [-1, 1, -1],
          new PlayTarget(
            80,
            Colors.Green,
            require("../../assets/play/greenButton.png"),
            require("../../assets/play/greenButtonOff.png"),
            require("../../assets/play/greenButtonPressed.png"),
          )
        ),
        new PlayPattern(
          [120, 250],
          [1, -1],
          new PlayTarget(
            120,
            Colors.Yellow,
            require("../../assets/play/yellowButton.png"),
            require("../../assets/play/yellowButtonOff.png"),
            require("../../assets/play/yellowButtonPressed.png"),
          )
        ),
      ],
    ],
    targets: [
      new PlayTarget(
        100,
        Colors.Black,
        require("../../assets/play/blackButton.png"),
        require("../../assets/play/blackButtonOff.png"),
        require("../../assets/play/blackButtonPressed.png")
      ),
      new PlayTarget(
        80,
        Colors.Green,
        require("../../assets/play/greenButton.png"),
        require("../../assets/play/greenButtonOff.png"),
        require("../../assets/play/greenButtonPressed.png"),
      ),
      new PlayTarget(
        120,
        Colors.Yellow,
        require("../../assets/play/yellowButton.png"),
        require("../../assets/play/yellowButtonOff.png"),
        require("../../assets/play/yellowButtonPressed.png"),
      ),
    ], // 押すボタンの種類
  },

  activePlayPattern: [
    new PlayPattern(
      [100],
      [1],
      new PlayTarget(
        100,
        Colors.Black,
        require("../../assets/play/blackButton.png"),
        require("../../assets/play/blackButtonOff.png"),
        require("../../assets/play/blackButtonPressed.png")
      )
    ),
    new PlayPattern(
      [80, 150, 200],
      [-1, 1, -1],
      new PlayTarget(
        80,
        Colors.Green,
        require("../../assets/play/greenButton.png"),
        require("../../assets/play/greenButtonOff.png"),
        require("../../assets/play/greenButtonPressed.png"),
      )
    ),
    new PlayPattern(
      [90, 150],
      [1, -1],
      new PlayTarget(
        120,
        Colors.Yellow,
        require("../../assets/play/yellowButton.png"),
        require("../../assets/play/yellowButtonOff.png"),
        require("../../assets/play/yellowButtonPressed.png"),
      )
    ),
  ],
};

export default initialState;
