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

  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 400,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Animated.View
      style={[
        styles.nextButtonContainer,
        { transform: [{ translateX: ButtonImage }] },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed && styles.pressed, styles.nextButton]}
        onPress={pressHandler}
      >
        <Image
          source={require("../../../assets/ui/nextButton.png")}
          style={styles.nextButton}
        />
      </Pressable>
    </Animated.View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  nextButtonContainer: {
    width: 25,
    height: 70,
  },
  nextButton: {
    width: "100%",
    height: "100%",
  },
  nextButtonActive: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.75,
  },
});
