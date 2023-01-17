import { StyleSheet, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { judgeStatus, Play } from "../../types/play";
export type Props = {
  playState: Play;
};

const Explosion = ({ playState }: Props) => {
  let explosionAnim = useRef(new Animated.Value(0)).current;

  let ex1 = require("../../assets/explosion/explosion1.png");
  let ex2 = require("../../assets/explosion/explosion2.png");
  let ex3 = require("../../assets/explosion/explosion3.png");
  let ex4 = require("../../assets/explosion/explosion4.png");
  let ex5 = require("../../assets/explosion/explosion5.png");
  let ex6 = require("../../assets/explosion/explosion6.png");
  let ex7 = require("../../assets/explosion/explosion7.png");
  let ex8 = require("../../assets/explosion/explosion8.png");
  let ex9 = require("../../assets/explosion/explosion9.png");
  let ex10 = require("../../assets/explosion/explosion10.png");
  let ex11 = require("../../assets/explosion/explosion11.png");
  let ex12 = require("../../assets/explosion/explosion12.png");
  let ex13 = require("../../assets/explosion/explosion13.png");
  let ex14 = require("../../assets/explosion/explosion14.png");
  let ex15 = require("../../assets/explosion/explosion15.png");
  let ex16 = require("../../assets/explosion/explosion16.png");
  let ex17 = require("../../assets/explosion/explosion17.png");
  let ex18 = require("../../assets/explosion/explosion18.png");
  let ex19 = require("../../assets/explosion/explosion19.png");
  let ex20 = require("../../assets/explosion/explosion20.png");
  let ex21 = require("../../assets/explosion/explosion21.png");
  let ex22 = require("../../assets/explosion/explosion22.png");
  let ex23 = require("../../assets/explosion/explosion23.png");
  let ex24 = require("../../assets/explosion/explosion24.png");
  let ex25 = require("../../assets/explosion/explosion25.png");
  let ex26 = require("../../assets/explosion/explosion26.png");
  let ex27 = require("../../assets/explosion/explosion27.png");
  let ex28 = require("../../assets/explosion/explosion28.png");
  let ex29 = require("../../assets/explosion/explosion29.png");

  const explosionSource = explosionAnim.interpolate({
    inputRange: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28,
    ],
    outputRange: [
      ex1,
      ex2,
      ex3,
      ex4,
      ex5,
      ex6,
      ex7,
      ex8,
      ex9,
      ex10,
      ex11,
      ex12,
      ex13,
      ex14,
      ex15,
      ex16,
      ex17,
      ex18,
      ex19,
      ex20,
      ex21,
      ex22,
      ex23,
      ex24,
      ex25,
      ex26,
      ex27,
      ex28,
      ex29,
    ],
  });

    useEffect(() => {
      if (playState.judge === judgeStatus.failure) {
        Animated.timing(explosionAnim, {
          toValue: 200,
          duration: 600,
          useNativeDriver: false,
        }).start();
      }
    }, [playState.judge === judgeStatus.failure]);

    //waitingの時元に戻す
    useEffect(() => {
      if (playState.judge === judgeStatus.waiting) {
        explosionAnim.setValue(0);
      }
    }, [playState.judge === judgeStatus.waiting]);

  return (
    <>
      <Animated.Image
        source={explosionSource}
        style={styles.explosion}
      />
    </>
  );
};

export default Explosion;

const styles = StyleSheet.create({
  explosion: {
    position: "absolute",
    width: 375,
    height: 204,
    bottom: "26%",
    alignItems: "center",
    justifyContent: "center",
  },
});
