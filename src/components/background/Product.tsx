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
export type Props = {
  playState: Play;
  activeProductLength: number;
  proccessCount: number;
  selectedPlayPattern: PlayPattern[];
  activeProductWidth: number;
  activeProductHeight: number;
  width: number;
  productNumber: number;
  nextProduct: { before: ImageSourcePropType }[];
  centerProduct: { before: ImageSourcePropType }[];
  failureProduct: { before: ImageSourcePropType }[];
  jobType: JobType;
};

const Product = ({
  playState,
  activeProductWidth,
  activeProductHeight,
  width,
  productNumber,
  centerProduct,
  failureProduct,
  nextProduct,
  jobType,
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

  let NEXTPRODUCT = nextProduct[0].before;
  let CENTERPRODUCT = centerProduct[productNumber].before;
  let FAILUREPRODUCT = failureProduct[0].before;

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

  //次の画像
  var nextImage = (
    <View style={styles.ImageContainer}>
      <Image
        source={NEXTPRODUCT}
        style={{
          width: activeProductWidth,
          height: activeProductHeight,
        }}
      />
      <Star
        activeProductWidth={activeProductWidth}
        activeProductHeight={activeProductHeight}
      />
    </View>
  );

  //中央の画像
  var centerImage = (
    <Animated.View
      style={[
        styles.ImageContainer,
        {
          transform: [{ translateY: successTranslateY }],
        },
      ]}
    >
      <Image
        source={CENTERPRODUCT}
        style={{
          width: activeProductWidth,
          height: activeProductHeight,
        }}
      />
      <Star
        activeProductWidth={activeProductWidth}
        activeProductHeight={activeProductHeight}
      />
    </Animated.View>
  );

  if (playState.judge === judgeStatus.failure) {
    centerImage = (
      <Animated.View
        style={[
          styles.ImageContainer,
          {
            transform: [
              { translateX: shakeTranslateX },
              { translateY: shakeTranslateY },
            ],
          },
        ]}
      >
        <Image
          source={FAILUREPRODUCT}
          style={{
            width: activeProductWidth,
            height: activeProductHeight,
          }}
        />
        <Star
          activeProductWidth={activeProductWidth}
          activeProductHeight={activeProductHeight}
        />
      </Animated.View>
    );
  }

  return (
    <>
      <Animated.View
        style={[
          styles.productBox,
          { transform: [{ translateX: targetTranslateX }] },
        ]}
      >
        <ConveyorLine width={width} />
        {nextImage}
        {centerImage}
        {centerImage}
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
