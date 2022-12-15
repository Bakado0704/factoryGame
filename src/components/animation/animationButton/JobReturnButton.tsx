import { StyleSheet, Animated, Pressable, Image } from "react-native";
import { useRef } from "react";

type Props = {
  jobReturnHandler: () => void;
};

const JobReturnButton = ({ jobReturnHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.jobReturnButtonContainer,
      ]}
      onPress={jobReturnHandler}
    >
      <Image
        source={require("../../../assets/ui/jobReturnButtonOff.png")}
        style={styles.jobReturnButton}
      />
      <Animated.View
        style={[styles.jobReturnButtonActive, { opacity: ButtonImage }]}
      >
        <Image
          source={require("../../../assets/ui/jobReturnButton.png")}
          style={styles.jobReturnButton}
        />
      </Animated.View>
    </Pressable>
  );
};

export default JobReturnButton;

const styles = StyleSheet.create({
  jobReturnButtonContainer: {
    width: 100,
    height: 32,
  },
  jobReturnButton: {
    width: "100%",
    height: "100%",
  },
  jobReturnButtonActive: {
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