import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { BackgroundType } from "../../types/background";

import Counts from "./components/Counts";
import { PATTERN_DATES } from "./datas/dates";
import PlayGap from "../../models/playgap";
import { judgeStatus, Play, PlayPattern, PlayStatus } from "../../types/play";
import NowMoney from "../../components/money/NowMoney";

type Props = {
  type: BackgroundType;
  playState: Play;
  drink: number;
  perMoney: number;
  nowMoney: number;
  judgeHandler: (judge: judgeStatus) => void;
  stateHandler: (state: PlayStatus) => void;
  damageHandler: (number: number) => void;
  changeComboHandler: (number: number) => void;
  changeCompleteCount: (number: number) => void;
  changeNowMoneyHandler: (number: number) => void;
  processCountHandler: (number: number) => void;
  selectedPatternHandler: (pattern: PlayPattern[]) => void;
  changeProductTypeHandler: () => void;
  changeNextProductHandler: () => void;
  changeCenterProductHandler: () => void;
};

const Game = ({
  type,
  playState,
  drink,
  perMoney,
  nowMoney,
  judgeHandler,
  stateHandler,
  damageHandler,
  changeComboHandler,
  changeCompleteCount,
  changeNowMoneyHandler,
  processCountHandler,
  selectedPatternHandler,
  changeProductTypeHandler,
  changeNextProductHandler,
  changeCenterProductHandler,
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
      <NowMoney nowMoney={nowMoney} perMoney={perMoney}/>
        <Counts
          playpattern={playpattern}
          playgap={playgap}
          drink={drink}
          playState={playState}
          judgeHandler={judgeHandler}
          stateHandler={stateHandler}
          damageHandler={damageHandler}
          changeComboHandler={changeComboHandler}
          changeCompleteCount={changeCompleteCount}
          changeNowMoneyHandler={changeNowMoneyHandler}
          processCountHandler={processCountHandler}
          selectedPatternHandler={selectedPatternHandler}
          perMoney={perMoney}
          changeProductTypeHandler={changeProductTypeHandler}
          changeNextProductHandler={changeNextProductHandler}
          changeCenterProductHandler={changeCenterProductHandler}
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    transform: [{ translateY: -120 }],
  },
  moneyImg: {
    width: 70,
    height: 70,
  },
  moneyText: {
    fontSize: 60,
    fontFamily: "MochiyPop",
    color: "black",
  },
});
