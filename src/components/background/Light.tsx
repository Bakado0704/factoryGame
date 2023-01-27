import {
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { judgeStatus, Play } from "../../types/play";
import { JobType } from "../../types/job";
export type Props = {
  playState: Play;
  jobType: JobType;
};
const { width } = Dimensions.get("window");

const Light = ({
  playState, jobType
}: Props) => {
  let light = require("../../assets/product/productLightPlate.png");
  let lightWidth = width * 0.533;
  let lightHeight = width * 1.384;

  switch (jobType) {
    case "山川製作所": {
      light = require("../../assets/product/productLightPlate.png");
      lightWidth = width * 0.533;
      lightHeight = width * 1.384;
      break;
    }
    case "蒼月": {
      light = require("../../assets/product/productLightBox.png");
      lightWidth = width * 0.544;
      lightHeight = width * 1.71;
      break;
    }
    case "アッシュベリーInc": {
      light = require("../../assets/product/productLightPlate.png");
      lightWidth = width * 0.533;
      lightHeight = width * 1.384;
      break;
    }
    case "オリジン弁太郎": {
      light = require("../../assets/product/productLightBento.png");
      lightWidth = width * 0.538;
      lightHeight = width * 1.413;
      break;
    }
    case "アグロン精密": {
      light = require("../../assets/product/productLightPlate.png");
      lightWidth = width * 0.533;
      lightHeight = width * 1.384;
      break;
    }
    case "スターフーズ": {
      light = require("../../assets/product/productLightCake.png");
      lightWidth = width * 0.536;
      lightHeight = width * 1.963;
      break;
    }
    case "鹿賀水産": {
      light = require("../../assets/product/productLightFish.png");
      lightWidth = width * 0.565;
      lightHeight = width * 1.467;
      break;
    }
    case "玉津アーセナル": {
      light = require("../../assets/product/productLightRobot.png");
      lightWidth = width * 0.32;
      lightHeight = width * 1.608;
      break;
    }
    case "小篠建設": {
      light = require("../../assets/product/productLightMetal.png");
      lightWidth = width * 0.803;
      lightHeight = width * 1.309;
      break;
    }
    case "タナベ建設": {
      light = require("../../assets/product/productLightWood.png");
      lightWidth = width * 0.616;
      lightHeight = width * 1.283;
      break;
    }
  }
  //画像を動かす
  let LightAnim = useRef(new Animated.Value(0)).current;

  const lightOpacity = LightAnim.interpolate({
    inputRange: [0, 1, 200],
    outputRange: [0, 1, 0],
  });

  useEffect(() => {
    if (playState.judge === judgeStatus.success) {
      Animated.timing(LightAnim, {
        toValue: 200,
        duration: 600,
        useNativeDriver: false,
      }).start();
    }
  }, [playState.judge === judgeStatus.success]);

  //waitingの時元に戻す
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      LightAnim.setValue(0);
    }
  }, [playState.judge === judgeStatus.waiting]);

  return (
    <>
      <Animated.View style={[styles.light, { opacity: lightOpacity }]}>
        <Image
          source={light}
          style={{ width: lightWidth, height: lightHeight }}
        />
      </Animated.View>
    </>
  );
};

export default Light;

const styles = StyleSheet.create({
  light: {
    position: "absolute",
    width: "100%",
    bottom: "28.5%",
    alignItems: "center",
    justifyContent: "center",
  },
});
