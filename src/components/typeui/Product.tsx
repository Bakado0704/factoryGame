import { StyleSheet, Image, Animated, View, Dimensions, ImageSourcePropType } from "react-native";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { judgeStatus, Play, PlayPattern, PlayStatus } from "../../types/play";

export type Props = {
  playState: Play;
  activeProductLength: number;
  proccessCount: number;
  selectedPlayPattern: PlayPattern[];
  activeProductWidth: number;
  activeProductHeight: number;
  width: number;
  nextProduct: ImageSourcePropType;
  defaultProduct: ImageSourcePropType;
  bonusProduct: ImageSourcePropType;
};

const Product = ({
  playState,
  activeProductWidth,
  activeProductHeight,
  width,
  nextProduct,
  defaultProduct,
  bonusProduct,
}: Props) => {
  //画像を動かす
  let TargetAnim = useRef(new Animated.Value(0)).current;

  const targeTranslateX = TargetAnim.interpolate({
    inputRange: [0, 80, 200],
    outputRange: [0, 0, width],
  });

  //judgeがsuccessかfailureになったときアニメーション動かす
  useEffect(() => {
    if (playState.stamina > 0) {
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
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
          <Image
            source={require("../../assets/conveyor/cvLine.png")}
            style={styles.cvLine}
          />
        </View>
        <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
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
