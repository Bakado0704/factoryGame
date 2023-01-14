
import React from "react";
import { Text } from "react-native";
import { TextStroke } from "./textStroke";

type Props = {
  size: number,
  children: React.ReactNode;
};

export const ShadowText = ({ children, size }: Props) => {
  return (
    <TextStroke stroke={1} color="black">
      <Text style={{ fontSize: size, fontFamily: "MochiyPop", color: "white" }}>
        {children}
      </Text>
    </TextStroke>
  );
};