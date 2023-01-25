import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";

export interface Props {
  onPress: () => void;
  source: ImageSourcePropType;
  width: number;
  height: number;
  diffWidth: number;
  diffHeight: number;
  padding: number;
}

const ImageButton = ({
  source,
  onPress,
  width,
  height,
  diffWidth,
  diffHeight,
  padding,
}: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;
  const ButtonWidth = ButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [width, width - diffWidth],
  });

  const ButtonHeight = ButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [height, height - diffHeight],
  });

  const pressInHandler = () => {
    Animated.timing(ButtonAnim, {
      toValue: 200,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  const pressOutHandler = () => {
    ButtonAnim.setValue(0);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={[
        styles.imageContainer,
        {
          padding: padding,
          width: width + padding * 2,
          height: height + padding * 2,
        },
      ]}
    >
      <Animated.Image
        style={{ width: ButtonWidth, height: ButtonHeight }}
        source={source}
      />
    </Pressable>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
