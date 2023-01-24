import { StyleSheet, Animated, Pressable } from "react-native";

type Props = {
  pressHandler: () => void;
  nextPressInHandler: () => void;
  nextPressOutHandler: () => void;
  nextFlag: boolean;
  ButtonAnim: Animated.Value;
  NextButtonAnim: Animated.Value;
};

const NextButton = ({
  pressHandler,
  nextPressInHandler,
  nextPressOutHandler,
  nextFlag,
  ButtonAnim,
  NextButtonAnim,
}: Props) => {
  const prevButtonOff = require("../../../assets/ui/nextButtonOff.png");
  const prevButtonOn = require("../../../assets/ui/nextButton.png");

  let imageSource = nextFlag ? prevButtonOn : prevButtonOff;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 80, 100, 150, 200, 220, 350, 400],
    outputRange: [0, 1.8, 2, 2.2, 2, 1.8, 0.3, 0],
  });

  const ButtonOpacity = ButtonAnim.interpolate({
    inputRange: [0, 100, 300, 400],
    outputRange: [0, 1, 1, 0],
  });

  const ButtonWidth = NextButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 27],
  });

  const ButtonHeight = NextButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [70, 78],
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
          source={require("../../../assets/ui/nextButton.png")}
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
    width: 45,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  }
});
