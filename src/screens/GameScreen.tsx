import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
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
  const missHandler = () => {
    dispatch(staminaDecrese(100));
  };
  const damageHandler = () => {
    dispatch(staminaDecrese(1));
  };
  const comboHandler = () => {
    dispatch(staminaIncrese(10));
  };

  if (modalIsSetting) {
    setTimeout(() => {
      setModalIsSetted(true);
    }, 1000);
  }

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
            missHandler={missHandler}
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
