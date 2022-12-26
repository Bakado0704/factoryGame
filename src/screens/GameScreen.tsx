import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/ui/BgBlack";
import Game from "../libs/game/game";
import { BackgroundType } from "../types/background";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, staminaDecrese, staminaIncrese } from "../store/job";
import { PlayStatus } from "../types/play";

const GameScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //dispatch関係
  const playState = useSelector((state) => state.job.play);
  const damageHandler = (number: number) => {
    dispatch(staminaDecrese(number));
  };
  const comboHandler = (number: number) => {
    dispatch(staminaIncrese(number));
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
        damageHandler={damageHandler}
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