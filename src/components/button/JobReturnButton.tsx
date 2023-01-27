import { StyleSheet, Animated, Pressable, Image } from "react-native";
import { useRef, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

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

  const isFocused = useIsFocused();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(false);
  }, [isFocused]);

  const pressInHandler = () => {
    setFlag(true);
  };

  const pressOutHandler = () => {
    setFlag(false);
  };

  let ImagePressed = require("../../assets/ui/jobReturnButtonPressed.png")
  let ImageOn = require("../../assets/ui/jobReturnButton.png")
  let ImageOff = require("../../assets/ui/jobReturnButtonOff.png")

  let ImageSourceOff = flag ? ImagePressed : ImageOff;
  let ImageSourceOn = flag ? ImagePressed : ImageOn;
  return (
    <Pressable
      style={styles.jobReturnButtonContainer}
      onPress={jobReturnHandler}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
    >
      <Image
        source={ImageSourceOff}
        style={styles.jobReturnButton}
      />
      <Animated.View
        style={[styles.jobReturnButtonActive, { opacity: ButtonImage }]}
      >
        <Image
          source={ImageSourceOn}
          style={styles.jobReturnButton}
        />
      </Animated.View>
    </Pressable>
  );
};

export default JobReturnButton;

const styles = StyleSheet.create({
  jobReturnButtonContainer: {
    width: 105,
    height: 37,
    paddinRight: 5,
    paddingTop: 5,
  },
  jobReturnButton: {
    width: "100%",
    height: "100%",
  },
  jobReturnButtonActive: {
    position: "absolute",
    top: 5,
    right: 0,
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.75,
  },
});
