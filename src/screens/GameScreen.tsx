import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/background/BgBlack";
import Game from "../libs/game";
import { useDispatch, useSelector } from "react-redux";
import { judgeStatus, PlayPattern, PlayStatus } from "../types/play";
import { Job } from "../types/job";
import { RootState } from "../store/store";
import { productType } from "../types/product";
import {
  changeActivePattern,
  changeCombo,
  changeCompletecount,
  changeJudge,
  changeNowMoney,
  changeProcessCount,
  changeStatus,
  resetCompletecount,
  staminaDecrese,
} from "../store/play";
import {
  changeNextProductType,
  changePrevProductType,
  userMoneyIncrease,
} from "../store/user";
import { changeJobMaxMoney, changeJobRecord } from "../store/job";

const GameScreen = () => {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  //現在のplay状態
  const playState = useSelector((state: RootState) => state.play.play);
  //現在のjob
  const Job: Job = useSelector((state: RootState) => state.job.job);
  //現在のuser
  const user = useSelector((state: RootState) => state.user.user);
  //changeJobRecordに渡すための現在のJob
  const nowJob = useSelector((state: RootState) => state.job.jobs).find(
    (job: Job) => job.id === Job.id
  );

  const nowMoney = playState.money;
  const combo = playState.combo;
  const completeCount = playState.completeCount;
  const maxMoney = Job.maxMoney;
  const perMoney = Job.outline.basicMoney;
  const jobName = Job.name;
  const name = Job.owner.name;
  const iconType = Job.icon;
  const prevProductType = user.prevProductType;
  const drink = user.drink;

  let bonus = 1.0;
  if (prevProductType === "bonus") {
    bonus = 2.0;
  }

  let plusMoney = Math.floor(perMoney) * bonus * (1 + drink * 0.2);
  if (combo <= 2) {
    plusMoney = Math.floor(perMoney * bonus * (1 + drink * 0.2));
  } else if (combo <= 4) {
    plusMoney = Math.floor(perMoney * 1.2 * bonus * (1 + drink * 0.2));
  } else if (combo <= 6) {
    plusMoney = Math.floor(perMoney * 1.6 * bonus * (1 + drink * 0.2));
  } else {
    plusMoney = Math.floor(perMoney * 2.0 * bonus * (1 + drink * 0.2));
  }

  let r = Math.random() * 10;
  
  //dispatch関数の宣言
  const judgeHandler = (judge: judgeStatus) => {
    dispatch(changeJudge(judge));
  };
  const damageHandler = (number: number) => {
    dispatch(staminaDecrese(number));
  };
  const processCountHandler = (number: number) => {
    dispatch(changeProcessCount(number));
  };
  const selectedPatternHandler = (pattern: PlayPattern[]) => {
    dispatch(changeActivePattern(pattern));
  };
  const changeNowMoneyHandler = (number: number) => {
    dispatch(changeNowMoney(number));
  };
  const changeComboHandler = (number: number) => {
    dispatch(changeCombo(number));
  };
  const changeCompleteCount = (number: number) => {
    dispatch(changeCompletecount(number));
  };
  const changeNextProductTypeHandler = () => {
    if (r > 7) {
      dispatch(changeNextProductType(productType.bonus));
    } else {
      dispatch(changeNextProductType(productType.default));
    }
  };
  const changePrevProductTypeHandler = () => {
    if (r > 7) {
      dispatch(changePrevProductType(productType.bonus));
    } else {
      dispatch(changePrevProductType(productType.default));
    }
  };

  //スタミナが0になるとゲームオーバー
  useEffect(() => {
    if (playState.stamina <= 0 && nowJob) {
      dispatch(changeStatus(PlayStatus.gameover));
      dispatch(userMoneyIncrease(nowMoney));
      if (maxMoney <= nowMoney) {
        dispatch(changeJobRecord(nowMoney));
        dispatch(changeJobMaxMoney(nowJob));
      }
    }
  }, [playState.stamina <= 0 && nowJob]);

  //結果を受け入れたとき,ステータスをstopに戻し、スタート画面に戻る
  const offModalHandler = () => {
    dispatch(changeStatus(PlayStatus.stop));
    dispatch(changeNowMoney(0));
    dispatch(changeCombo(0));
    dispatch(resetCompletecount());
    navigation.navigate("Start");
  };

  const youdeadMessage = [
    "倒れてしまった…",
    "メンタルがやられてしまった...",
    "やる気が失せてしまった...",
    "意識を失った...",
    "目が昇天した...",
    "疲労で動けなくなった...",
    "目の前が真っ暗になった...",
    "気を失ってしまった...",
  ];

  const messageNumber = Math.floor(Math.random() * youdeadMessage.length);

  //statusがplayingの場合Gameを出す
  let game;
  if (playState.status === PlayStatus.playing) {
    game = (
      <Game
        type={jobName}
        playState={playState}
        drink={drink}
        combo={combo}
        nowMoney={nowMoney}
        plusMoney={plusMoney}
        productType={prevProductType}
        judgeHandler={judgeHandler}
        damageHandler={damageHandler}
        changeComboHandler={changeComboHandler}
        changeCompleteCount={changeCompleteCount}
        changeNowMoneyHandler={changeNowMoneyHandler}
        processCountHandler={processCountHandler}
        selectedPatternHandler={selectedPatternHandler}
        changePrevProductTypeHandler={changePrevProductTypeHandler}
        changeNextProductTypeHandler={changeNextProductTypeHandler}
      />
    );
  }

  //statusがgameoverの場合モーダルを出す
  let bgModal;
  if (playState.status === PlayStatus.gameover) {
    bgModal = <BgBlack />;
    setTimeout(() => {
      dispatch(changeStatus(PlayStatus.result));
    }, 1000);
  }

  //statusがresultの場合結果を出す
  let result;
  if (playState.status === PlayStatus.result) {
    result = (
      <>
        <BgBlack />
        <Gameover
          offModal={offModalHandler}
          completeCount={completeCount}
          message={youdeadMessage[messageNumber]}
          nowMoney={nowMoney}
          maxMoney={maxMoney}
          name={name}
          iconType={iconType}
        />
      </>
    );
  }

  return (
    <View style={styles.rootScreen}>
      {game}
      {bgModal}
      {result}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
