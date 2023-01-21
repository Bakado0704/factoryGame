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
    outputRange: [0, 10, -10, 0, 5, -4, 0, 0, 0],
  });

  const shakeTranslateY = TargetAnim.interpolate({
    inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 200],
    outputRange: [0, -6, 4, -4, 4, -6, -2, 0, 0],
  });

  const successTranslateY = TargetAnim.interpolate({
    inputRange: [0, 10, 20, 30, 200],
    outputRange: [0, 8, -8, 0, 0],
  });

  //successかfailureになったときアニメーション動かす
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

  //waitingの時元に戻す
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      setTimeout(() => {
        TargetAnim.setValue(0);
      }, 200);
    }
  }, [playState.judge === judgeStatus.waiting]);

  let defaultOpacity = 1;
  let bonusOpacity = 0;
  let nextDefaultOpacity = 1;
  let nextBonusOpacity = 0;
  let failureOpacity = 0;

  if (prevProductType === "bonus") {
    defaultOpacity = 0;
    bonusOpacity = 1;
    failureOpacity = 0;
    nextDefaultOpacity = 0;
    nextBonusOpacity = 1;
  }

  if (playState.judge === judgeStatus.failure) {
    defaultOpacity = 0;
    bonusOpacity = 0;
    failureOpacity = 1;
  }

  //ターゲットをfor文で表示
  var CENTERPRODUCT = [];
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

        <View style={{ opacity: failureOpacity, position: "absolute" }}>
          <Image
            source={defaultFailureProduct}
            style={{
              width: activeProductWidth,
              height: activeProductHeight,
            }}
          />
        </View>
      </Animated.View>
    );
  }

  // 次の画像
  let NEXTPRODUCT = (
    <>
      <View style={{ opacity: nextDefaultOpacity, position: "absolute", bottom: 0, }}>
        <Image
          source={defaultProducts[0].before}
          style={{
            width: activeProductWidth,
            height: activeProductHeight,
          }}
        />
      </View>
      <View style={{ opacity: nextBonusOpacity, position: "absolute",bottom: 0, }}>
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
        <ConveyorLine width={width} />
        <View style={styles.ImageContainer}>{NEXTPRODUCT}</View>
        <View style={styles.ImageContainer}>{CENTERPRODUCT}</View>
        <View style={styles.ImageContainer}>{NEXTPRODUCT}</View>
      </Animated.View>
      <Light playState={playState} jobType={jobType} />
      <Explosion playState={playState} />
    </>
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
