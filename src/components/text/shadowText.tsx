import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/color";
import { TextStroke } from "./TextStroke";
const { width } = Dimensions.get("window");

type Props = {
  size: number;
  children: React.ReactNode;
  color: string;
};

export const ShadowText = ({ children, size, color }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TextStroke stroke={width * 0.002} color={Colors.textMainColor}>
          <Text
            style={{ fontSize: size, fontFamily: "MochiyPop", color: Colors.textMainColor }}
          >
            {children}
          </Text>
        </TextStroke>
      </View>
      <TextStroke stroke={width * 0.002} color={Colors.textMainColor}>
        <Text
          style={{ fontSize: size, fontFamily: "MochiyPop", color: color }}
        >
          {children}
        </Text>
      </TextStroke>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    transform: [{ translateY: -width * 0.002 }],
  },
  innerContainer: {
    position: "absolute",
    transform: [{ translateY: width * 0.005 }],
  },
});
