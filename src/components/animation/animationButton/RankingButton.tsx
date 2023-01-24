import { StyleSheet, Animated, Pressable, Image } from "react-native";
import { useRef, useState } from "react";

type Props = {
  rankingPressHandler: () => void;
  rankingPressInHandler: () => void;
  rankingPressOutHandler: () => void;
  rankingFlag: boolean;
  ButtonAnim: Animated.Value;
};

const RankingButton = ({
  rankingPressHandler,
  rankingPressInHandler,
  rankingPressOutHandler,
  rankingFlag,
  ButtonAnim,
}: Props) => {
  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  const rankingButtonOff = require("../../../assets/ui/rankingButtonOff.png");
  const rankingButtonOn = require("../../../assets/ui/rankingButton.png");
  const rankingButtonPressed = require("../../../assets/ui/rankingButtonPressed.png");

  let imageOff = rankingFlag ? rankingButtonPressed : rankingButtonOff;
  let imageOn = rankingFlag ? rankingButtonPressed : rankingButtonOn;

  return (
    <Pressable
      style={styles.rankingButtonContainer}
      onPress={rankingPressHandler}
      onPressIn={rankingPressInHandler}
      onPressOut={rankingPressOutHandler}
    >
      <Image source={imageOff} style={styles.rankingButton} />
      <Animated.View
        style={[styles.rankingButtonActive, { opacity: ButtonImage }]}
      >
        <Image source={imageOn} style={styles.rankingButton} />
      </Animated.View>
    </Pressable>
  );
};

export default RankingButton;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  prevButton: {
    width: 25,
    height: 70,
  },
  nextButton: {
    width: 25,
    height: 70,
  },
  rankingButtonContainer: {
    width: 41,
    height: 45,
    padding: 5,
    alignItems: "flex-start",
  },
  rankingButton: {
    width: "100%",
    height: "100%",
  },
  rankingButtonActive: {
    position: "absolute",
    top: 5,
    left: 5,
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.75,
  },
});
