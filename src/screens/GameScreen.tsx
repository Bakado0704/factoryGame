import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/ui/BgBlack";
import NavGameYamagawa from "../components/nav/NavFooter/NavGame/NavGameYamagawa";
import { Display } from "../components/ui/Display";

const GameScreen = () => {
  const [time, setTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>();
  const [stopLogSecond, setStopLogSecond] = useState<number[]>([]);
  const [translateX, setTranslateX] = useState<number>(0);

  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [modalIsSetted, setModalIsSetted] = useState(false);
  const navigation = useNavigation();

  const duration = 1000;
  let startingTime: number;

  const pressFirstHandler = () => {
    setModalIsSetting(true);
    scrollAnimation();
    startingTime = Date.now();
  };

  const scrollAnimation = () => {
    const progress = Math.min(1, (Date.now() - startingTime) / duration);
    // スクロール位置はスタート位置からの（1 - 進捗度）を掛けたもの
    const scrollX = 200 * progress;

    setTranslateX(scrollX);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  };

  console.log(translateX);

  const pressSecondHandler = () => {
    // const startTime = new Date().getTime();
    // const id = setInterval(() => {
    //   setTime(new Date().getTime() - startTime + time);
    // }, 10);
    // setIntervalId(id);
    // setStopLogSecond([0]);
  };

  const pressThirdHandler = () => {
    // setStopLogSecond((prevLaps) => [time, ...prevLaps]);
  };

  const pressFourthHandler = () => {
    // clearInterval(intervalId);
    // setIntervalId(null);
    // setTime(0);
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
      <View style={styles.innerContainer}>
        <Text>{time}</Text>
      </View>
      {!modalIsSetted && !modalIsSetting && (
        <NavGameYamagawa
          pressFirstHandler={pressFirstHandler}
          pressSecondHandler={pressSecondHandler}
          pressThirdHandler={pressThirdHandler}
          pressFourthHandler={pressFourthHandler}
          time={stopLogSecond}
        />
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
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
