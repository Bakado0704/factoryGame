import { Dimensions } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import BackgroundImg from "./BackgroundImg";
import Product from "./Product";
import Conveyor from "./Conveyor";
import { RootState } from "../../store/store";

export interface Props {
  children: React.ReactNode;
}

const ImageBg = ({ children }: Props) => {
  //useSelectorの宣言
  const job = useSelector((state: RootState) => state.job.job);
  const user = useSelector((state: RootState) => state.user.user);
  const playState = useSelector((state: RootState) => state.play.play);
  const defaultProducts = job.product.default;
  const bonusProducts = job.product.bonus;
  const defaultFailureProduct = job.product.defaultFailure[0].before;
  const bonusFailureProduct = job.product.bonusFailure[0].before;
  const selectedPlayPattern = useSelector(
    (state: RootState) => state.play.activePlayPattern
  );

  const activeType = job.icon;
  const jobType = user.nowJob;
  const prevProductType = user.prevProductType;
  const nextProductType = user.nextProductType;
  const activeProductLength = job.product.default.length;
  const activeProductWidth = job.product.style.width;
  const activeProductHeight = job.product.style.height;
  const proccessCount = playState.processCount;
  const { width, height } = Dimensions.get("window");

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
        height={height}
        productNumber={productNumber}
        jobType={jobType}
        prevProductType={prevProductType}
        nextProductType={nextProductType}
        defaultProducts={defaultProducts}
        bonusProducts={bonusProducts}
        defaultFailureProduct={defaultFailureProduct}
        bonusFailureProduct={bonusFailureProduct}
      />
      {children}
    </BackgroundImg>
  );
};

export default ImageBg;
