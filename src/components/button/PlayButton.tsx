import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { judgeStatus, Play } from "../../types/play";

export interface Props {
  onPress: () => void;
  sourceOn: ImageSourcePropType;
  sourceOff: ImageSourcePropType;
  sourcePressed: ImageSourcePropType;
  order: number;
  failureOrder: number | undefined;
  width: number;
  height: number;
  padding: number;
  playState: Play;
}

const PlayButton = ({
  sourceOn,
  sourceOff,
  sourcePressed,
  onPress,
  order,
  failureOrder,
  width,
  height,
  padding,
  playState,
}: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;
  const ButtonFailureAnim = useRef(new Animated.Value(0)).current;

  const ButtonOpacityOn = ButtonAnim.interpolate({
    inputRange: [0, 1, 100],
    outputRange: [1, 0, 0],
  });

  const ButtonOpacityOff = ButtonAnim.interpolate({
    inputRange: [0, 1, 100],
    outputRange: [0, 1, 1],
  });

  const ButtonFailureOpacity = ButtonFailureAnim.interpolate({
    inputRange: [
      0, 1, 50, 51, 100, 101, 150, 151, 200, 201, 250, 251, 300, 301, 350, 351, 
      400,
    ],
    outputRange: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });

  const pressInHandler = () => {
    Animated.timing(ButtonAnim, {
      toValue: 100,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const pressOutHandler = () => {
    ButtonAnim.setValue(0);
  };

  //自分のorderと失敗したorderが同じ時アニメーションスタート
  useEffect(() => {
    if (playState.judge === judgeStatus.failure && order === failureOrder) {
      Animated.timing(ButtonFailureAnim, {
        toValue: 400,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      setTimeout(() => {
        ButtonFailureAnim.setValue(0);
      }, 1000);
    }
  }, [playState.judge === judgeStatus.failure]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={[
        styles.imageContainer,
        {
          width: width + padding * 2,
          height: height + padding * 2,
        },
      ]}
    >
      <Animated.Image
        style={{
          width: width,
          height: height,
          opacity: ButtonOpacityOn,
          position: "absolute",
        }}
        source={sourceOff}
      />
      <Animated.Image
        style={{
          width: width,
          height: height,
          position: "absolute",
          opacity: ButtonOpacityOff,
        }}
        source={sourcePressed}
      />
      <Animated.Image
        style={{
          width: width,
          height: height,
          position: "absolute",
          opacity: ButtonFailureOpacity,
        }}
        source={sourceOn}
      />
    </Pressable>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
