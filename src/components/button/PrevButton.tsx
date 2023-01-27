import { useState } from "react";
import { StyleSheet, Animated, Pressable, Easing, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

type Props = {
  pressHandler: () => void;
  ButtonAnim: Animated.Value;
  PrevButtonAnim: Animated.Value;
};

const PrevButton = ({
  pressHandler,
  ButtonAnim,
  PrevButtonAnim,
}: Props) => {
  const [prevFlag, setPrevFlag] = useState(false);
  const prevButtonOff = require("../../assets/ui/prevButtonOff.png");
  const prevButtonOn = require("../../assets/ui/prevButton.png");

  const prevPressInHandler = () => {
    setPrevFlag(true);
    Animated.timing(PrevButtonAnim, {
      toValue: 100,
      duration: 50,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const prevPressOutHandler = () => {
    setPrevFlag(false);
    PrevButtonAnim.setValue(0);
  };

  let imageSource = prevFlag ? prevButtonOn : prevButtonOff;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 80, 100, 150, 200, 220, 350, 400],
    outputRange: [0, -width * 0.005, -width * 0.0053, -width * 0.0058, -width * 0.0053, -width * 0.005, -width * 0.001, 0],
  });

  const ButtonOpacity = ButtonAnim.interpolate({
    inputRange: [0, 100, 300, 400],
    outputRange: [0, 1, 1, 0],
  });

  const ButtonWidth = PrevButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [width * 0.066, width * 0.072],
  });

  const ButtonHeight = PrevButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [width * 0.187, width * 0.208],
  });

  return (
    <Pressable
      style={styles.prevButtonContainer}
      onPress={pressHandler}
      onPressIn={prevPressInHandler}
      onPressOut={prevPressOutHandler}
    >
      <Animated.View style={{ transform: [{ translateX: ButtonImage }] }}>
        <Animated.Image
          source={require("../../assets/ui/prevButton.png")}
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

export default PrevButton;

const styles = StyleSheet.create({
  prevButtonContainer: {
    width: width * 0.12,
    height: width * 0.213,
    justifyContent: "center",
    alignItems: "center",
  },
});
