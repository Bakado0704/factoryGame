import { StyleSheet, Image, Animated, View, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { judgeStatus, Play, PlayStatus } from "../../types/play";

export type Props = {
  playState: Play;
};

const Product = ({ playState }: Props) => {
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
  const nextProduct = useSelector(
    (state) => state.job.job.product.default[0].before
  );
  const defaultProduct = useSelector(
    (state) => state.job.job.product.default[productNumber].before
  );
  const bonusProduct = useSelector(
    (state) => state.job.job.product.bonus[productNumber].before
  );
  const activeProduct = [
    defaultProduct,
    defaultProduct,
    defaultProduct,
    defaultProduct,
    bonusProduct,
  ][Math.floor(Math.random() * 4)];

  //画像を動かす
  let TargetAnim = useRef(new Animated.Value(0)).current;

  const targeTranslateX = TargetAnim.interpolate({
    inputRange: [0, 80, 200],
    outputRange: [0, 0, width],
  });

  //judgeがsuccessかfailureになったときアニメーション動かす
  useEffect(() => {
    if (playState.status !== PlayStatus.gameover) {
      Animated.timing(TargetAnim, {
        toValue: 200,
        duration: 800,
        useNativeDriver: false,
      }).start();
    }
    console.log(playState.status);
  }, [
    playState.judge === judgeStatus.success ||
      playState.judge === judgeStatus.failure,
  ]);

  //アニメーションが終わったら元に戻す
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      setTimeout(() => {
        TargetAnim.setValue(0);
      }, 200);
    }
  }, [playState.judge === judgeStatus.waiting]);

  return (
    <Animated.View
      style={[
        styles.productBox,
        { transform: [{ translateX: targeTranslateX }] },
      ]}
    >
      <View style={styles.cvContainer}>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, {width: width /5}]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={nextProduct}
          style={{ width: activeProductWidth, height: activeProductHeight }}
        />
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={defaultProduct}
          style={{ width: activeProductWidth, height: activeProductHeight }}
        />
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={defaultProduct}
          style={{ width: activeProductWidth, height: activeProductHeight }}
        />
      </View>
    </Animated.View>
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
  cvContainer: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  cvInnerContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 78,
  },
  cvLine: {
    width: 72,
    height: 78,
  },
  productBox: {
    position: "absolute",
    width: "100%",
    bottom: "28.5%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
