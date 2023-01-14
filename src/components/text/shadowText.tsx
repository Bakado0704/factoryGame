import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/color";
import { TextStroke } from "./TextStroke";

type Props = {
  size: number;
  children: React.ReactNode;
};

export const ShadowText = ({ children, size }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TextStroke stroke={1} color={Colors.textMainColor}>
          <Text
            style={{ fontSize: size, fontFamily: "MochiyPop", color: Colors.textMainColor }}
          >
            {children}
          </Text>
        </TextStroke>
      </View>
      <TextStroke stroke={1} color={Colors.textMainColor}>
        <Text
          style={{ fontSize: size, fontFamily: "MochiyPop", color: "white" }}
        >
          {children}
        </Text>
      </TextStroke>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    transform: [{ translateY: -1 }],
  },
  innerContainer: {
    position: "absolute",
    transform: [{ translateY: 2 }],
  },
});
