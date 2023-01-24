import { StyleSheet, Animated, View, Image, Pressable } from "react-native";
import React, { useRef } from "react";

type Props = {
  gameHandler: () => void;
  onSetting: () => void;
  pressHandler: () => void;
  startPressInHandler: () => void;
  startPressOutHandler: () => void;
  drinkPressInHandler: () => void;
  drinkPressOutHandler: () => void;
  jobPressInHandler: () => void;
  jobPressOutHandler: () => void;
  drinkFlag: boolean;
  startFlag: boolean;
  jobFlag: boolean;
  StartButtonsAnim: Animated.Value;
};

const StartButtons = ({
  gameHandler,
  onSetting,
  pressHandler,
  startPressInHandler,
  startPressOutHandler,
  drinkPressInHandler,
  drinkPressOutHandler,
  jobPressInHandler,
  jobPressOutHandler,
  drinkFlag,
  startFlag,
  jobFlag,
  StartButtonsAnim,
}: Props) => {
  const ButtonImage = StartButtonsAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  const drinkButtonOff = require("../../../assets/ui/settingButtonOff.png");
  const drinkButtonOn = require("../../../assets/ui/settingButton.png");
  const drinkButtonPressed = require("../../../assets/ui/settingButtonPressed.png");
  const startButtonOff = require("../../../assets/ui/startButtonOff.png");
  const startButtonOn = require("../../../assets/ui/startButton.png");
  const startButtonPressed = require("../../../assets/ui/startButtonPressed.png");
  const jobButtonOff = require("../../../assets/ui/jobChangeButtonOff.png");
  const jobButtonOn = require("../../../assets/ui/jobChangeButton.png");
  const jobButtonPressed = require("../../../assets/ui/jobChangeButtonPressed.png");

  let drinkImageOff = drinkFlag ? drinkButtonPressed : drinkButtonOff;
  let drinkImageOn = drinkFlag ? drinkButtonPressed : drinkButtonOn;
  let startImageOff = startFlag ? startButtonPressed : startButtonOff;
  let startImageOn = startFlag ? startButtonPressed : startButtonOn;
  let jobImageOff = jobFlag ? jobButtonPressed : jobButtonOff;
  let jobImageOn = jobFlag ? jobButtonPressed : jobButtonOn;

  return (
    <View style={styles.innerContainer}>
      <Pressable
        style={styles.settingButtonContainer}
        onPress={onSetting}
        onPressIn={drinkPressInHandler}
        onPressOut={drinkPressOutHandler}
      >
        <Animated.Image source={drinkImageOff} style={styles.settingButton} />
        <Animated.View
          style={[styles.settingButtonActive, { opacity: ButtonImage }]}
        >
          <Image source={drinkImageOn} style={styles.settingButton} />
        </Animated.View>
      </Pressable>
      <Pressable
        style={styles.startButtonContainer}
        onPress={gameHandler}
        onPressIn={startPressInHandler}
        onPressOut={startPressOutHandler}
      >
        <Image source={startImageOff} style={styles.startButton} />
        <Animated.View
          style={[styles.startButtonActive, { opacity: ButtonImage }]}
        >
          <Image source={startImageOn} style={styles.startButton} />
        </Animated.View>
      </Pressable>
      <Pressable
        style={styles.jobChangeButtonContainer}
        onPress={pressHandler}
        onPressIn={jobPressInHandler}
        onPressOut={jobPressOutHandler}
      >
        <Image source={jobImageOff} style={styles.jobChangeButton} />
        <Animated.View
          style={[styles.jobChangeButtonActive, { opacity: ButtonImage }]}
        >
          <Image source={jobImageOn} style={styles.jobChangeButton} />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default StartButtons;

const styles = StyleSheet.create({
  rootConteiner: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 8,
    height: 102,
  },
  settingButtonContainer: {
    width: 64,
    height: 68,
    padding: 5,
  },
  settingButtonActive: {
    position: "absolute",
    top: 5,
    left: 5,
    width: "100%",
    height: "100%",
  },
  settingButton: {
    width: "100%",
    height: "100%",
  },
  startButtonContainer: {
    width: 226,
    height: 88,
    padding: 5,
  },
  startButtonActive: {
    position: "absolute",
    top: 5,
    left: 5,
    width: "100%",
    height: "100%",
  },
  startButton: {
    width: "100%",
    height: "100%",
  },
  jobChangeButtonContainer: {
    width: 64,
    height: 68,
    padding: 5,
  },
  jobChangeButton: {
    width: "100%",
    height: "100%",
  },
  jobChangeButtonActive: {
    position: "absolute",
    top: 5,
    left: 5,
    width: "100%",
    height: "100%",
  }
});
