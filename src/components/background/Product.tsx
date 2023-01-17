import {
  StyleSheet,
  Image,
  Animated,
  View,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { judgeStatus, Play, PlayPattern, PlayStatus } from "../../types/play";
import ConveyorLine from "./ConveyorLine";
import Light from "./Light";
import { JobType } from "../../types/job";
export type Props = {
  playState: Play;
  activeProductLength: number;
  proccessCount: number;
  selectedPlayPattern: PlayPattern[];
  activeProductWidth: number;
  activeProductHeight: number;
  width: number;
  NEXTPRODUCT: ImageSourcePropType;
  CENTERPRODUCT: ImageSourcePropType;
  jobType: JobType;
};

const Product = ({
  playState,
  activeProductWidth,
  activeProductHeight,
  width,
  NEXTPRODUCT,
  CENTERPRODUCT,
  jobType,
}: Props) => {
  //画像を動かす
  let TargetAnim = useRef(new Animated.Value(0)).current;

  const targeTranslateX = TargetAnim.interpolate({
    inputRange: [0, 80, 200],
    outputRange: [0, 0, width],
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
      }, 500);
    }
  }, [playState.judge === judgeStatus.waiting]);

  return (
    <>
      <Animated.View
        style={[
          styles.productBox,
          { transform: [{ translateX: targeTranslateX }] },
        ]}
      >
        <ConveyorLine width={width} />
        <View style={styles.ImageContainer}>
          <Image
            source={NEXTPRODUCT}
            style={{ width: activeProductWidth, height: activeProductHeight }}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={CENTERPRODUCT}
            style={{ width: activeProductWidth, height: activeProductHeight }}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={CENTERPRODUCT}
            style={{ width: activeProductWidth, height: activeProductHeight }}
          />
        </View>
      </Animated.View>
      <Light playState={playState} jobType={jobType}/>
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
