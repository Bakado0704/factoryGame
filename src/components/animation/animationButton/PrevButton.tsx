import { StyleSheet, Animated, Pressable } from "react-native";

type Props = {
  pressHandler: () => void;
  prevPressInHandler: () => void;
  prevPressOutHandler: () => void;
  prevFlag: boolean;
  ButtonAnim: Animated.Value;
  PrevButtonAnim: Animated.Value;
};

const PrevButton = ({
  pressHandler,
  prevPressInHandler,
  prevPressOutHandler,
  prevFlag,
  ButtonAnim,
  PrevButtonAnim,
}: Props) => {
  const prevButtonOff = require("../../../assets/ui/prevButtonOff.png");
  const prevButtonOn = require("../../../assets/ui/prevButton.png");

  let imageSource = prevFlag ? prevButtonOn : prevButtonOff;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 80, 100, 150, 200, 220, 350, 400],
    outputRange: [0, -1.8, -2, -2.2, -2, -1.8, -0.3, 0],
  });

  const ButtonOpacity = ButtonAnim.interpolate({
    inputRange: [0, 100, 300, 400],
    outputRange: [0, 1, 1, 0],
  });

  const ButtonWidth = PrevButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 27],
  });

  const ButtonHeight = PrevButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [70, 78],
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
          source={require("../../../assets/ui/prevButton.png")}
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
    width: 45,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
