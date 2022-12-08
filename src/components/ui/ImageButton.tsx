import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";

export interface Props {
  onPress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style: object;
  source: string;
}

const ImageButton= ({ source, onPress, style }: Props) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "#ccc" }}
      >
        <Image style={style} source={source} />
      </Pressable>
    </View>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
