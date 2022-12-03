import { View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return <View>{children}</View>;
};

export default Card;
