import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const activeProductFirst = useSelector(
    (state) => state.job.job.product.default[0].before
  );
  const activeProductWidth = useSelector(
    (state) => state.job.job.product.style.width
  );
  const activeProductHeight = useSelector(
    (state) => state.job.job.product.style.height
  );

  return (
    <View style={styles.productBox}>
      <Image
        source={activeProductFirst}
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
