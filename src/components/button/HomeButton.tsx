import {
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
const { width } = Dimensions.get("window");

type Props = {
  onPress: () => void;
};

const HomeButton = ({ onPress }: Props) => {
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

  let ImageOff = require("../../assets/ui/homeButton.png")
  let ImagePressed = require("../../assets/ui/homeButtonPressed.png")
  let ImageSource = flag ? ImagePressed : ImageOff;

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={styles.submitButton}
    >
      <Image style={{ width: width * 0.176, height: width * 0.181 }} source={ImageSource} />
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  submitButton: {
    width: width * 0.203,
    height: width * 0.208,
    alignItems: "center",
    justifyContent: "center",
  }
});
