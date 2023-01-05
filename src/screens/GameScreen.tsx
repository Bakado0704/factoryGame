import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/background/BgBlack";
import Game from "../libs/game";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActivePattern,
  changeCenterProduct,
  changeCombo,
  changeJobRecord,
  changeJudge,
  changeNextProduct,
  changeNowMoney,
  changeProcessCount,
  changeProductType,
  changeStatus,
  staminaDecrese,
  staminaIncrese,
  userMoneyIncrease,
} from "../store/job";
import { judgeStatus, PlayPattern, PlayStatus } from "../types/play";
import { Job } from "../types/job";
import { RootState } from "../store/store";

const GameScreen = () => {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  //現在のplay状態
  const playState = useSelector((state: RootState) => state.job.play);
  //現在のjob
  const Job: Job = useSelector((state: RootState) => state.job.job);
  //changeJobRecordに渡すための現在のJob
  const nowJob = useSelector((state: RootState) => state.job.jobs).find((job: Job) => job.id === Job.id);

  const nowMoney = playState.money;
  const maxMoney = Job.maxMoney;
  const perMoney = Job.perMoney;
  const jobName = Job.name;
  const name = Job.owner.name;
  const iconType = Job.icon;

  //dispatch関数の宣言
  const judgeHandler = (judge: judgeStatus) => {
    dispatch(changeJudge(judge));
  };
  const stateHandler = (state: PlayStatus) => {
    dispatch(changeStatus(state));
  };
  const recoveryHandler = () => {
    dispatch(staminaIncrese());
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
    dispatch(changeNowMoney(number))
  };
  const changeComboHandler = (number: number) => {
    dispatch(changeCombo(number));
  };
  const changeProductTypeHandler = () => {
    dispatch(changeProductType());
  };
  const changeNextProductHandler = () => {
    dispatch(changeNextProduct());
  };
  const changeCenterProductHandler = () => {
    dispatch(changeCenterProduct());
  };

  //スタミナが0になるとゲームオーバー
  useEffect(() => {
    if (playState.stamina <= 0 && nowJob) {
      dispatch(changeStatus(PlayStatus.gameover));
      dispatch(changeJobRecord(nowJob));
      dispatch(userMoneyIncrease(nowMoney));
    }
  }, [playState.stamina <= 0 && nowJob]);

  //結果を受け入れたとき,ステータスをstopに戻し、スタート画面に戻る
  const offModalHandler = () => {
    dispatch(changeStatus(PlayStatus.stop));
    dispatch(changeNowMoney(0));
    dispatch(changeCombo(0));
    navigation.navigate("Start");
  };

  //statusがplayingの場合Gameを出す
  let game;
  if (playState.status === PlayStatus.playing) {
    game = (
      <Game
        type={jobName}
        playState={playState}
        nowMoney={nowMoney}
        perMoney={perMoney}
        judgeHandler={judgeHandler}
        stateHandler={stateHandler}
        damageHandler={damageHandler}
        recoveryHandler={recoveryHandler}
        changeComboHandler={changeComboHandler}
        changeNowMoneyHandler={changeNowMoneyHandler}
        processCountHandler={processCountHandler}
        selectedPatternHandler={selectedPatternHandler}
        changeProductTypeHandler={changeProductTypeHandler}
        changeNextProductHandler={changeNextProductHandler}
        changeCenterProductHandler={changeCenterProductHandler}
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