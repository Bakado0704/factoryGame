import { StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import BackgroundImg from "../typeui/BackgroundImg";
import Product from "../typeui/Product";
import Conveyor from "../typeui/Conveyor";

export interface Props {
  children: React.ReactNode;
}

const ImageBg = ({ children }: Props) => {
  const activeType = useSelector((state) => state.job.job.icon);
  const playState = useSelector((state) => state.job.play);

  return (
    <BackgroundImg type={activeType}>
      <Conveyor type={activeType} />
      <Product playState={playState}/>
      {children}
    </BackgroundImg>
  );
};

export default ImageBg;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
});
