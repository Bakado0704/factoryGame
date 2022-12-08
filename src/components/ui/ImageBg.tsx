import { Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { JOB } from "../../data/data";
import { useSelector } from "react-redux";
import BackgroundImg from "../backgroundImg/BackgroundImg";
import Product from "../product/Product";

export interface Props {
  children: React.ReactNode;
  source: string;
}

const ImageBg = ({ children }: Props) => {
  const activeType = useSelector((state) => state.activeJob.type);

  const activeProduct = useSelector((state) => state.activeProduct.type);

  console.log(activeProduct);

  return (
    <BackgroundImg type={activeType}>
      <Product type={activeType}/>
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
