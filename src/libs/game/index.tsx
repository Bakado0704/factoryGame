import { View, StyleSheet } from "react-native";
import React from "react";
import Counts from "./components/Counts";
import { PATTERN_DATES } from "./datas/dates";
import PlayGap from "../../models/playgap";
import { judgeStatus, Play, PlayPattern } from "../../types/play";
import { JobType } from "../../types/job";
import Coins from "../../components/money/Coins";
import PlusMoney from "../../components/money/PlusMoney";
import { productType } from "../../types/product";
import { ShadowText } from "../../components/text/ShadowText";

type Props = {
  type: JobType;
  playState: Play;
  combo: number;
  drink: number;
  plusMoney: number;
  nowMoney: number;
  productType: productType;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
  changeComboHandler: (number: number) => void;
  changeCompleteCount: (number: number) => void;
  changeNowMoneyHandler: (number: number) => void;
  processCountHandler: (number: number) => void;
  selectedPatternHandler: (pattern: PlayPattern[]) => void;
  changePrevProductTypeHandler: () => void;
  changeNextProductTypeHandler: () => void;
};

const Game = ({
  type,
  playState,
  drink,
  combo,
  productType,
  plusMoney,
  nowMoney,
  judgeHandler,
  damageHandler,
  changeComboHandler,
  changeCompleteCount,
  changeNowMoneyHandler,
  processCountHandler,
  selectedPatternHandler,
  changePrevProductTypeHandler,
  changeNextProductTypeHandler,
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
        <View style={{ marginTop: 100 }}>
          <ShadowText size={50} color="white">
            {new Intl.NumberFormat().format(nowMoney)}
          </ShadowText>
        </View>
        <Coins playState={playState} combo={combo} />
        <PlusMoney
          playState={playState}
          plusMoney={plusMoney}
          productType={productType}
        />
        <Counts
          playpattern={playpattern}
          playgap={playgap}
          drink={drink}
          playState={playState}
          productType={productType}
          judgeHandler={judgeHandler}
          damageHandler={damageHandler}
          changeComboHandler={changeComboHandler}
          changeCompleteCount={changeCompleteCount}
          changeNowMoneyHandler={changeNowMoneyHandler}
          processCountHandler={processCountHandler}
          selectedPatternHandler={selectedPatternHandler}
          plusMoney={plusMoney}
          changePrevProductTypeHandler={changePrevProductTypeHandler}
          changeNextProductTypeHandler={changeNextProductTypeHandler}
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
});
