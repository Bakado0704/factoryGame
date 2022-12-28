import { StyleSheet, Image, View, processColor } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  //useSelectorの宣言
  const activeProductLength = useSelector(
    (state) => state.job.job.product.default.length
  );
  const proccessCount = useSelector((state) => state.job.play.processCount);
  const selectedPlayPattern = useSelector(
    (state) => state.job.activePlayPattern
  );
  const activeProductWidth = useSelector(
    (state) => state.job.job.product.style.width
  );
  const activeProductHeight = useSelector(
    (state) => state.job.job.product.style.height
  );

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

  const activeProduct = useSelector(
    (state) => state.job.job.product.default[productNumber].before
  );

  return (
    <View style={styles.productBox}>
      <Image
        source={activeProduct}
        style={{ width: activeProductWidth, height: activeProductHeight }}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  conveyor: {
    position: "absolute",
    height: 282,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  productBox: {
    position: "absolute",
    width: "100%",
    bottom: "29%",
    alignItems: "center",
    justifyContent: "center",
  },
});
