import { View, StyleSheet, Image, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import StartButtons from "../../animation/animationButton/StartButtons";

type Props = {
  onSetting: () => void;
  staminaResetHandler: () => void;
  playingStatusHandler: () => void;
  startPressInHandler: () => void;
  startPressOutHandler: () => void;
  drinkPressInHandler: () => void;
  drinkPressOutHandler: () => void;
  jobPressInHandler: () => void;
  jobPressOutHandler: () => void;
  drinkFlag: boolean;
  startFlag: boolean;
  jobFlag: boolean;
};

const NavOperation = ({
  onSetting,
  staminaResetHandler,
  playingStatusHandler,
  startPressInHandler,
  startPressOutHandler,
  drinkPressInHandler,
  drinkPressOutHandler,
  jobPressInHandler,
  jobPressOutHandler,
  drinkFlag,
  startFlag,
  jobFlag,
}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const pressHandler = () => {
    navigation.navigate("JobChange");
  };

  const gameHandler = () => {
    navigation.navigate("Game");
    staminaResetHandler();
    playingStatusHandler();
  };

  const StartButtonsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(StartButtonsAnim, {
        toValue: 200,
        duration: 1200,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <>
      <View style={styles.rootConteiner}>
        <Image
          source={require("../../../assets/ui/operationBoard.png")}
          style={styles.operationBoard}
        />
        <StartButtons
          gameHandler={gameHandler}
          onSetting={onSetting}
          pressHandler={pressHandler}
          startPressInHandler={startPressInHandler}
          startPressOutHandler={startPressOutHandler}
          jobPressInHandler={jobPressInHandler}
          jobPressOutHandler={jobPressOutHandler}
          drinkPressInHandler={drinkPressInHandler}
          drinkPressOutHandler={drinkPressOutHandler}
          drinkFlag={drinkFlag}
          startFlag={startFlag}
          jobFlag={jobFlag}
          StartButtonsAnim={StartButtonsAnim}
        />
      </View>
    </>
  );
};

export default NavOperation;

const styles = StyleSheet.create({
  rootConteiner: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
    transform: [{ translateY: -5 }],
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 102,
  },
  settingButton: {
    width: 52,
    height: 56,
  },
  operationBoard: {
    width: 360,
    height: 102,
    position: "absolute",
  },
  startButtonContainer: {
    position: "absolute",
    top: 12,
    left: 52,
    width: 216,
    height: 78,
    marginHorizontal: 10,
  },
  startButton: {
    width: 216,
    height: 78,
    marginHorizontal: 10,
  },
  jobChangeButton: {
    width: 52,
    height: 56,
  },
});
