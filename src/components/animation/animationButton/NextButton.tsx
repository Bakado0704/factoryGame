import { StyleSheet, Animated, Pressable, Image, Easing } from "react-native";
import { useRef } from "react";

type Props = {
  pressHandler: () => void;
};

const NextButton = ({ pressHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 80, 100, 150, 200, 220, 350, 400],
    outputRange: [0, 1.8, 2, 2.2, 2, 1.8, 0.3, 0],
  });

  const ButtonOpacity = ButtonAnim.interpolate({
    inputRange: [0, 100, 300, 400],
    outputRange: [0, 1, 1, 0],
  });

  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 400,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.nextButtonContainer,
      ]}
      onPress={pressHandler}
    >
      <Animated.View
        style={[
          styles.nextButton,
          { transform: [{ translateX: ButtonImage }] },
        ]}
      >
        <Image
          source={require("../../../assets/ui/nextButtonOff.png")}
          style={styles.nextButtonOff}
        />
        <Animated.Image
          source={require("../../../assets/ui/nextButton.png")}
          style={[styles.nextButton, {opacity: ButtonOpacity }]}
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
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  nextButton: {
    width: 25,
    height: 70,
  },
  nextButtonOff: {
    position: "absolute",
    width: 25,
    height: 70,
  },
  pressed: {
    opacity: 0.75,
  },
});
