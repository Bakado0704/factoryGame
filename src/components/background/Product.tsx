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
import Explosion from "./Explostion";
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
  FAILUREPRODUCT: ImageSourcePropType;
  jobType: JobType;
};

const Product = ({
  playState,
  activeProductWidth,
  activeProductHeight,
  width,
  NEXTPRODUCT,
  CENTERPRODUCT,
  FAILUREPRODUCT,
  jobType,
}: Props) => {
  //画像を動かす
  let TargetAnim = useRef(new Animated.Value(0)).current;

  const targeTranslateX = TargetAnim.interpolate({
    inputRange: [0, 120, 200],
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

  //次の画像
  var nextImage = (
    <View style={styles.ImageContainer}>
      <Image
        source={NEXTPRODUCT}
        style={{ width: activeProductWidth, height: activeProductHeight }}
      />
    </View>
  );

  //中央の画像
  var centerImage = (
    <View style={styles.ImageContainer}>
      <Image
        source={CENTERPRODUCT}
        style={{ width: activeProductWidth, height: activeProductHeight }}
      />
    </View>
  );

  if (playState.judge === judgeStatus.failure) {
    centerImage = (
      <View style={styles.ImageContainer}>
        <Image
          source={FAILUREPRODUCT}
          style={{ width: activeProductWidth, height: activeProductHeight }}
        />
      </View>
    );
  }

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
        {nextImage}
        {centerImage}
        {centerImage}
      </Animated.View>
      <Light playState={playState} jobType={jobType} />
      <Explosion playState={playState}/>
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
