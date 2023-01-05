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
  const activeType = useSelector((state: RootState) => state.job.job.icon);
  const playState = useSelector((state: RootState) => state.job.play);
  const nextProduct = useSelector((state: RootState) => state.job.nextProduct);
  const centerProduct = useSelector((state: RootState) => state.job.centerProduct);
  const selectedPlayPattern = useSelector(
    (state: RootState) => state.job.activePlayPattern
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

  let NEXTPRODUCT = nextProduct[0].before;
  let CENTERPRODUCT = centerProduct[productNumber].before;

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
        NEXTPRODUCT={NEXTPRODUCT}
        CENTERPRODUCT={CENTERPRODUCT}
      />
      {children}
    </BackgroundImg>
  );
};

export default ImageBg;
