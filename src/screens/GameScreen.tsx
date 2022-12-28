import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/ui/BgBlack";
import Game from "../libs/game/game";
import { BackgroundType } from "../types/background";
import { useDispatch, useSelector } from "react-redux";
import { changeActivePattern, changeJudge, changeProcessCount, changeStatus, staminaDecrese, staminaIncrese } from "../store/job";
import { judgeStatus, PlayPattern, PlayStatus } from "../types/play";

const GameScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const playState = useSelector((state) => state.job.play);

  //dispatch関数の宣言
  const judgeHandler = (judge: judgeStatus) => {
    dispatch(changeJudge(judge));
  };
  const damageHandler = (number: number) => {
    dispatch(staminaDecrese(number));
  };
  const comboHandler = (number: number) => {
    dispatch(staminaIncrese(number));
  };
  const processCountHandler = (number: number) => {
    dispatch(changeProcessCount(number));
  };
  const selectedPatternHandler = (pattern: PlayPattern[]) => {
    dispatch(changeActivePattern(pattern));
  };

  //スタミナが0になるとゲームオーバー
  useEffect(() => {
    if (playState.stamina <= 0) {
      dispatch(changeStatus(PlayStatus.gameover));
    }
  }, [playState.stamina <= 0]);

  //結果を受け入れたとき,ステータスをstopに戻し、スタート画面に戻る
  const offModalHandler = () => {
    dispatch(changeStatus(PlayStatus.stop));
    navigation.navigate("Start");
  };

  //statusがplayingの場合Gameを出す
  let game;
  if (playState.status === PlayStatus.playing) {
    game = (
      <Game
        type={BackgroundType.yamagawa}
        playState={playState}
        judgeHandler={judgeHandler}
        damageHandler={damageHandler}
        comboHandler={comboHandler}
        processCountHandler={processCountHandler}
        selectedPatternHandler={selectedPatternHandler}
      />
    );
  }

  //statusがgameoverの場合モーダルを出す
  var bgModal;
  if (playState.status === PlayStatus.gameover) {
    bgModal = <BgBlack />;
    setTimeout(() => {
      dispatch(changeStatus(PlayStatus.result));
    }, 1000);
  }

  //statusがresultの場合結果を出す
  var result;
  if (playState.status === PlayStatus.result) {
    result = (
      <>
        <BgBlack />
        <Gameover offModal={offModalHandler} />
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