import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import BackgroundImg from "../typeui/BackgroundImg";
import Product from "../typeui/Product";
import Conveyor from "../typeui/Conveyor";

export interface Props {
  children: React.ReactNode;
}

const ImageBg = ({ children }: Props) => {
  //useSelectorの宣言
  const job = useSelector((state) => state.job.job);
  const activeType = useSelector((state) => state.job.job.icon);
  const playState = useSelector((state) => state.job.play);
  const selectedPlayPattern = useSelector(
    (state) => state.job.activePlayPattern
  );
  const activeProductLength = job.product.default.length;
  const activeProductWidth = job.product.style.width;
  const activeProductHeight = job.product.style.height;
  const proccessCount = playState.processCount;
  const { width } = Dimensions.get("window");

  // すべてのDitanceの宣言
  let allDistance = [];
  for (let i = 0; i < selectedPlayPattern.length; i++) {
    for (let y = 0; y < selectedPlayPattern[i].distance.length; y++) {
      allDistance.push(selectedPlayPattern[i].distance[y]);
    }
  }

  //使用する画像の段階
  let productNumber = Math.floor(
    ((activeProductLength - 1) * proccessCount) / allDistance.length
  );

  //使用する画像の選定
  const nextProduct = job.product.default[0].before;
  const defaultProduct = job.product.default[productNumber].before;
  const bonusProduct = job.product.bonus[productNumber].before;
  const activeProduct = [
    defaultProduct,
    defaultProduct,
    defaultProduct,
    defaultProduct,
    bonusProduct,
  ][Math.floor(Math.random() * 4)];

  return (
    <BackgroundImg type={activeType}>
      <Conveyor type={activeType} />
      <Product
        playState={playState}
        activeProductLength={activeProductLength}
        proccessCount={proccessCount}
        selectedPlayPattern={selectedPlayPattern}
        activeProductWidth={activeProductWidth}
        activeProductHeight={activeProductHeight}
        width={width}
        nextProduct={nextProduct}
        defaultProduct={defaultProduct}
        bonusProduct={bonusProduct}
      />
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
