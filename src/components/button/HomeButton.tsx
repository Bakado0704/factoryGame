import {
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

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
      <Image style={{ width: 66, height: 68 }} source={ImageSource} />
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  submitButton: {
    width: 76,
    height: 78,
    alignItems: "center",
    justifyContent: "center",
  }
});
