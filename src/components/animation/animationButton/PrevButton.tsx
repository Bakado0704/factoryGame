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
        styles.prevButtonContainer,
        { transform: [{ translateX: ButtonImage }] },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed && styles.pressed, styles.prevButton]}
        onPress={pressHandler}
      >
        <Image
          source={require("../../../assets/ui/prevButton.png")}
          style={styles.prevButton}
        />
      </Pressable>
    </Animated.View>
  );
};

export default PrevButton;

const styles = StyleSheet.create({
  prevButtonContainer: {
    width: 25,
    height: 70,
  },
  prevButton: {
    width: "100%",
    height: "100%",
  },
  prevButtonActive: {
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
