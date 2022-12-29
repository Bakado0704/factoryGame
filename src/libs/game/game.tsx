import { View, StyleSheet } from "react-native";
import React from "react";
import { BackgroundType } from "../../types/background";

import Counts from "../components/Counts";
import { PATTERN_DATES } from "../datas/dates";
import PlayGap from "../../models/playgap";
import { judgeStatus, Play, PlayPattern } from "../../types/play";

type Props = {
  type: BackgroundType;
  playState: Play;
  perMoney: number;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
  changeComboHandler: (number: number) => void;
  changeNowMoneyHandler: (number: number) => void;
  processCountHandler: (number: number) => void;
  selectedPatternHandler: (pattern: PlayPattern[]) => void;
};

const Game = ({
  type,
  playState,
  perMoney,
  judgeHandler,
  damageHandler,
  changeComboHandler,
  changeNowMoneyHandler,
  processCountHandler,
  selectedPatternHandler,
}: Props) => {
  let playgap = new PlayGap(20, 10);
  let playpattern = PATTERN_DATES[0];

  switch (type) {
    case "山川製作所": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "蒼月": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "アッシュベリーInc": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "オリジン弁太郎": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "アグロン精密": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "スターフーズ": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "鹿賀水産": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "玉津アーセナル": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "小篠建設": {
      playpattern = PATTERN_DATES[0];
      break;
    }
    case "タナベ建設": {
      playpattern = PATTERN_DATES[0];
      break;
    }
  }

  return (
    <>
      <View style={styles.rootContainer}>
        <Counts
          playpattern={playpattern}
          playgap={playgap}
          playState={playState}
          judgeHandler={judgeHandler}
          damageHandler={damageHandler}
          changeComboHandler={changeComboHandler}
          changeNowMoneyHandler={changeNowMoneyHandler}
          processCountHandler={processCountHandler}
          selectedPatternHandler={selectedPatternHandler}
          perMoney={perMoney}
        />
      </View>
    </>
  );
};

export default Game;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
