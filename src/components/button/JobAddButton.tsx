import { StyleSheet, Animated, Pressable, Image, Dimensions } from "react-native";
import { useRef, useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
const { width } = Dimensions.get("window");

type Props = {
  jobAddHandler: () => void;
};

const JobAddButton = ({ jobAddHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

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

  let ImagePressed = require("../../assets/ui/jobAddButtonPressed.png")
  let ImageOn = require("../../assets/ui/jobAddButton.png")
  let ImageOff = require("../../assets/ui/jobAddButtonOff.png")

  let ImageSourceOff = flag ? ImagePressed : ImageOff;
  let ImageSourceOn = flag ? ImagePressed : ImageOn;


  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Pressable
      style={styles.jobAddButtonContainer}
      onPress={jobAddHandler}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
    >
      <Image
        source={ImageSourceOff}
        style={styles.jobAddButton}
      />
      <Animated.View
        style={[styles.jobAddButtonActive, { opacity: ButtonImage }]}
      >
        <Image
          source={ImageSourceOn}
          style={styles.jobAddButton}
        />
      </Animated.View>
    </Pressable>
  );
};

export default JobAddButton;

const styles = StyleSheet.create({
  jobAddButtonContainer: {
    width: width * 0.28,
    height: width * 0.099,
    paddingLeft: width * 0.013,
    paddingTop: width * 0.013,
  },
  jobAddButton: {
    width: "100%",
    height: "100%",
  },
  jobAddButtonActive: {
    position: "absolute",
    top: width * 0.013,
    left: width * 0.013,
    width: "100%",
    height: "100%",
  }
});