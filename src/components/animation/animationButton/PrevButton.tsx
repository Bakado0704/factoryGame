import { StyleSheet, Animated, Pressable, Image, Easing } from "react-native";
import { useRef } from "react";

type Props = {
  pressHandler: () => void;
};

const PrevButton = ({ pressHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 80, 100, 150, 200, 220, 350, 400],
    outputRange: [0, -1.8, -2, -2.2, -2, -1.8, -0.3, 0],
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
        styles.prevButtonContainer,
      ]}
      onPress={pressHandler}
    >
      <Animated.View
        style={[
          styles.prevButton,
          { transform: [{ translateX: ButtonImage }] },
        ]}
      >
        <Image
          source={require("../../../assets/ui/prevButtonOff.png")}
          style={styles.prevButtonOff}
        />
        <Animated.Image
          source={require("../../../assets/ui/prevButton.png")}
          style={[styles.prevButton, { opacity: ButtonOpacity }]}
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
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  prevButton: {
    width: 25,
    height: 70,
  },
  prevButtonOff: {
    position: "absolute",
    width: 25,
    height: 70,
  },
  pressed: {
    opacity: 0.75,
  },
});
