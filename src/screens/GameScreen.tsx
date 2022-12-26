import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/ui/BgBlack";
import Game from "../libs/game/game";
import { BackgroundType } from "../types/background";
import { useDispatch, useSelector } from "react-redux";
import { staminaDecrese, staminaIncrese } from "../store/job";

const GameScreen = () => {
  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [modalIsSetted, setModalIsSetted] = useState(false);
  const navigation = useNavigation();

  //dispatch関係
  const playState = useSelector((state) => state.job.play);
  const dispatch = useDispatch();
  const damageHandler = (number: number) => {
    dispatch(staminaDecrese(number));
  };
  const comboHandler = (number: number) => {
    dispatch(staminaIncrese(number));
  };

  //スタミナが0になるとゲームオーバー
  useEffect(() => {
    if (playState.stamina <= 0) {
      setModalIsSetting(true);
      setTimeout(() => {
        setModalIsSetted(true);
      }, 1000);
    }
  }, [playState.stamina <= 0]);

  const offModalHandler = () => {
    setModalIsSetted(false);
    setModalIsSetting(false);
    navigation.navigate("Start");
  };

  return (
    <View style={styles.rootScreen}>
      {!modalIsSetted && !modalIsSetting && (
        <>
          <Game
            type={BackgroundType.yamagawa}
            playState={playState}
            damageHandler={damageHandler}
          />
        </>
      )}
      {modalIsSetting && <BgBlack />}
      {modalIsSetted && <Gameover offModal={offModalHandler} />}
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
