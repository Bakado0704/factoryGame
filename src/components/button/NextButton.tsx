import { useState } from "react";
import {
  StyleSheet,
  Animated,
  Pressable,
  Easing,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");

type Props = {
  pressHandler: () => void;
  ButtonAnim: Animated.Value;
  NextButtonAnim: Animated.Value;
};

const NextButton = ({ pressHandler, ButtonAnim, NextButtonAnim }: Props) => {
  const [nextFlag, setNextFlag] = useState(false);

  const prevButtonOff = require("../../assets/ui/nextButtonOff.png");
  const prevButtonOn = require("../../assets/ui/nextButton.png");

  let imageSource = nextFlag ? prevButtonOn : prevButtonOff;

  const nextPressInHandler = () => {
    setNextFlag(true);
    Animated.timing(NextButtonAnim, {
      toValue: 100,
      duration: 50,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const nextPressOutHandler = () => {
    setNextFlag(false);
    NextButtonAnim.setValue(0);
  };

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 80, 100, 150, 200, 220, 350, 400],
    outputRange: [0, width * 0.005, width * 0.0053, width * 0.0058, width * 0.0053, width * 0.005, width * 0.001, 0],
  });

  const ButtonOpacity = ButtonAnim.interpolate({
    inputRange: [0, 100, 300, 400],
    outputRange: [0, 1, 1, 0],
  });

  const ButtonWidth = NextButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [width * 0.066, width * 0.072],
  });

  const ButtonHeight = NextButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [width * 0.187, width * 0.208],
  });

  return (
    <Pressable
      style={[styles.nextButtonContainer]}
      onPress={pressHandler}
      onPressIn={nextPressInHandler}
      onPressOut={nextPressOutHandler}
    >
      <Animated.View style={{ transform: [{ translateX: ButtonImage }] }}>
        <Animated.Image
          source={require("../../assets/ui/nextButton.png")}
          style={{ width: ButtonWidth, height: ButtonHeight }}
        />
        <Animated.Image
          source={imageSource}
          style={{
            opacity: ButtonOpacity,
            position: "absolute",
            width: ButtonWidth,
            height: ButtonHeight,
          }}
        />
      </Animated.View>
    </Pressable>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  nextButtonContainer: {
    width: width * 0.12,
    height: width * 0.213,
    justifyContent: "center",
    alignItems: "center",
  },
});
