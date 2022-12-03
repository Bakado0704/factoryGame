import { ImageBackground } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode
};

const JobChangeBackground: React.FC<Props> = ({ children }) => {
  return <ImageBackground>{children}</ImageBackground>;
};

export default JobChangeBackground;
