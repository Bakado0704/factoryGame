import {
  StyleSheet,
  Image,
  Animated,
  View,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { judgeStatus, Play, PlayPattern } from "../../types/play";
import ConveyorLine from "./ConveyorLine";
import Light from "./Light";
import { JobType } from "../../types/job";
import Explosion from "./Explostion";
import Star from "./Star";
import { productType } from "../../types/product";
export type Props = {
  playState: Play;
  activeProductLength: number;
  proccessCount: number;
  selectedPlayPattern: PlayPattern[];
  activeProductWidth: number;
  activeProductHeight: number;
  width: number;
  height: number;
  productNumber: number;
  jobType: JobType;
  prevProductType: productType;
  nextProductType: productType;
  defaultProducts: { before: ImageSourcePropType }[];
  bonusProducts: { before: ImageSourcePropType }[];
  defaultFailureProduct: ImageSourcePropType;
  bonusFailureProduct: ImageSourcePropType;
};

const Product = ({
  playState,
  activeProductWidth,
  activeProductHeight,
  activeProductLength,
  width,
  height,
  productNumber,
  jobType,
  prevProductType,
  nextProductType,
  defaultProducts,
  bonusProducts,
  defaultFailureProduct,
  bonusFailureProduct,
}: Props) => {
  //画像を動かす
  let TargetAnim = useRef(new Animated.Value(0)).current;

  const targetTranslateX = TargetAnim.interpolate({
    inputRange: [0, 120, 200],
    outputRange: [0, 0, width],
  });

  const shakeTranslateX = TargetAnim.interpolate({
    inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 200],
    outputRange: [
      0,
      width * 0.027,
      -width * 0.027,
      0,
      width * 0.013,
      -width * 0.011,
      0,
      0,
      0,
    ],
  });

  const shakeTranslateY = TargetAnim.interpolate({
    inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 200],
    outputRange: [
      0,
      -width * 0.016,
      width * 0.011,
      -width * 0.011,
      width * 0.011,
      -width * 0.016,
      -width * 0.005,
      0,
      0,
    ],
  });

  const successTranslateY = TargetAnim.interpolate({
    inputRange: [0, 10, 20, 30, 200],
    outputRange: [0, width * 0.021, -width * 0.021, 0, 0],
  });

  //アニメーション
  useEffect(() => {
    if (
      playState.judge === judgeStatus.success ||
      playState.judge === judgeStatus.failure
    ) {
      Animated.timing(TargetAnim, {
        toValue: 200,
        duration: 800,
        useNativeDriver: false,
      }).start();
    }
  }, [
    playState.judge === judgeStatus.success ||
      playState.judge === judgeStatus.failure,
  ]);

  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      TargetAnim.setValue(0);
    }
  }, [playState.judge === judgeStatus.waiting]);

  //opacityの設定
  let defaultOpacity = 1;
  let bonusOpacity = 0;
  let nextDefaultOpacity = 1;
  let nextBonusOpacity = 0;
  let failureDefaultOpacity = 0;
  let failureBonusOpacity = 0;

  if (prevProductType === "bonus") {
    defaultOpacity = 0;
    bonusOpacity = 1;
  }

  if (nextProductType === "bonus") {
    nextDefaultOpacity = 0;
    nextBonusOpacity = 1;
  }

  if (playState.judge === judgeStatus.failure) {
    defaultOpacity = 0;
    bonusOpacity = 0;
    if (prevProductType === "bonus") {
      failureBonusOpacity = 1;
    } else {
      failureDefaultOpacity = 1;
    }
  }

  //中心の画像
  let CENTERPRODUCT = [];
  for (let i = 0; i < activeProductLength; i++) {
    let productOpacity = 0;

    if (i === productNumber) {
      productOpacity = 1;
    }

    CENTERPRODUCT.push(
      <Animated.View
        key={i}
        style={[
          styles.ImageContainer,
          {
            transform: [{ translateY: successTranslateY }],
            opacity: productOpacity,
            position: "absolute",
            bottom: 0,
            width: activeProductWidth,
            height: activeProductHeight,
          },
        ]}
      >
        <View style={{ opacity: defaultOpacity, position: "absolute" }}>
          <Image
            source={defaultProducts[i].before}
            style={{
              width: activeProductWidth,
              height: activeProductHeight,
            }}
          />
        </View>

        <View style={{ opacity: bonusOpacity, position: "absolute" }}>
          <Image
            source={bonusProducts[i].before}
            style={{
              width: activeProductWidth,
              height: activeProductHeight,
            }}
          />
          <Star
            activeProductWidth={activeProductWidth}
            activeProductHeight={activeProductHeight}
            productType={prevProductType}
          />
        </View>

        <Animated.View
          style={{
            opacity: failureDefaultOpacity,
            position: "absolute",
            transform: [
              { translateY: shakeTranslateY },
              { translateX: shakeTranslateX },
            ],
          }}
        >
          <Image
            source={defaultFailureProduct}
            style={{
              width: activeProductWidth,
              height: activeProductHeight,
            }}
          />
        </Animated.View>

        <Animated.View
          style={{
            opacity: failureBonusOpacity,
            position: "absolute",
            transform: [
              { translateY: shakeTranslateY },
              { translateX: shakeTranslateX },
            ],
          }}
        >
          <Image
            source={bonusFailureProduct}
            style={{
              width: activeProductWidth,
              height: activeProductHeight,
            }}
          />
        </Animated.View>
      </Animated.View>
    );
  }

  // 前後の画像
  let BOTHSIDESPRODUCT = (
    <>
      <View
        style={{ opacity: nextDefaultOpacity, position: "absolute", bottom: 0 }}
      >
        <Image
          source={defaultProducts[0].before}
          style={{
            width: activeProductWidth,
            height: activeProductHeight,
          }}
        />
      </View>
      <View
        style={{ opacity: nextBonusOpacity, position: "absolute", bottom: 0 }}
      >
        <Image
          source={bonusProducts[0].before}
          style={{
            width: activeProductWidth,
            height: activeProductHeight,
          }}
        />
      </View>
    </>
  );

  return (
    <>
      <Animated.View
        style={[
          styles.productBox,
          { transform: [{ translateX: targetTranslateX }] },
        ]}
      >
        <ConveyorLine width={width} height={height} />
        <View style={styles.ImageContainer}>{BOTHSIDESPRODUCT}</View>
        <View style={styles.ImageContainer}>{CENTERPRODUCT}</View>
        <View style={styles.ImageContainer}>{BOTHSIDESPRODUCT}</View>
      </Animated.View>
      <Light playState={playState} jobType={jobType} />
      <Explosion playState={playState} />
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  productBox: {
    position: "absolute",
    width: "100%",
    bottom: "28.5%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  light: {
    position: "absolute",
    width: "100%",
    bottom: "28.5%",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
