import {
  StyleSheet,
  Animated,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

type Props = {
  onPress: () => void;
  ButtonsAnim: Animated.Value;
  ImageOff: ImageSourcePropType;
  ImageOn: ImageSourcePropType;
  ImagePressed: ImageSourcePropType;
  width: number;
  height: number;
};

const OperationButton = ({
  onPress,
  ButtonsAnim,
  ImageOff,
  ImageOn,
  ImagePressed,
  width,
  height,
}: Props) => {
  const ButtonImage = ButtonsAnim.interpolate({
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

  let drinkImageOff = flag ? ImagePressed : ImageOff;
  let drinkImageOn = flag ? ImagePressed : ImageOn;

  return (
    <Pressable
      style={{ width: width, height: height, padding: 5 }}
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
    >
      <Animated.Image source={drinkImageOff} style={styles.settingButton} />
      <Animated.View style={[styles.buttonActive, { opacity: ButtonImage }]}>
        <Image source={drinkImageOn} style={styles.settingButton} />
      </Animated.View>
    </Pressable>
  );
};

export default OperationButton;

const styles = StyleSheet.create({
  buttonActive: {
    position: "absolute",
    top: 5,
    left: 5,
    width: "100%",
    height: "100%",
  },
  settingButton: {
    width: "100%",
    height: "100%",
  },
});
