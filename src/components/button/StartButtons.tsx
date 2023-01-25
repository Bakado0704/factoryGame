import { StyleSheet, Animated, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import OperationButton from "./operationButton";

type Props = {
  jobChangeMove: () => void;
  onSetting: () => void;
  gameMove: () => void;
  StartButtonsAnim: Animated.Value;
};

const StartButtons = ({
  jobChangeMove,
  onSetting,
  gameMove,
  StartButtonsAnim,
}: Props) => {
  const ButtonImage = StartButtonsAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  const isFocused = useIsFocused();

  useEffect(() => {
    setStartFlag(false);
    setJobFlag(false);
  }, [isFocused]);

  const [startFlag, setStartFlag] = useState(false);
  const [jobFlag, setJobFlag] = useState(false);

  const startPressInHandler = () => {
    setStartFlag(true);
  };

  const startPressOutHandler = () => {
    setStartFlag(false);
  };

  const jobPressInHandler = () => {
    setJobFlag(true);
  };

  const jobPressOutHandler = () => {
    setJobFlag(false);
  };

  const startButtonOff = require("../../assets/ui/startButtonOff.png");
  const startButtonOn = require("../../assets/ui/startButton.png");
  const startButtonPressed = require("../../assets/ui/startButtonPressed.png");
  const jobButtonOff = require("../../assets/ui/jobChangeButtonOff.png");
  const jobButtonOn = require("../../assets/ui/jobChangeButton.png");
  const jobButtonPressed = require("../../assets/ui/jobChangeButtonPressed.png");

  let startImageOff = startFlag ? startButtonPressed : startButtonOff;
  let startImageOn = startFlag ? startButtonPressed : startButtonOn;
  let jobImageOff = jobFlag ? jobButtonPressed : jobButtonOff;
  let jobImageOn = jobFlag ? jobButtonPressed : jobButtonOn;

  return (
    <View style={styles.innerContainer}>
      <OperationButton
        onPress={onSetting}
        ButtonsAnim={StartButtonsAnim}
        ImageOff={require("../../assets/ui/settingButtonOff.png")}
        ImageOn={require("../../assets/ui/settingButton.png")}
        ImagePressed={require("../../assets/ui/settingButtonPressed.png")}
        width={64}
        height={68}
      />
      <Pressable
        style={styles.startButtonContainer}
        onPress={gameMove}
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
        onPress={jobChangeMove}
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
  },
});
