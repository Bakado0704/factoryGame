
import React from "react";
import { Text } from "react-native";
import { TextStroke } from "./textStroke";

type Props = {
  children: React.ReactNode;
};

const shadowText = ({ children }: Props) => {
  return (
    <TextStroke stroke={1} color="black">
      <Text style={{ fontSize: 20, fontFamily: "MochiyPop", color: "white" }}>
        {children}
      </Text>
    </TextStroke>
  );
};

export default shadowText;