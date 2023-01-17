import { StyleSheet, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { judgeStatus, Play } from "../../types/play";
export type Props = {
  playState: Play;
};

const Explosion = ({ playState }: Props) => {
  let explosionAnim = useRef(new Animated.Value(0)).current;

//   const explosionSource = explosionAnim.interpolate({
//     inputRange: [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
//     outputRange: [0, 1, 0],
//   });

//   useEffect(() => {
//     if (playState.judge === judgeStatus.success) {
//       Animated.timing(explosionAnim, {
//         toValue: 200,
//         duration: 600,
//         useNativeDriver: false,
//       }).start();
//     }
//   }, [playState.judge === judgeStatus.success]);

//   //waitingの時元に戻す
//   useEffect(() => {
//     if (playState.judge === judgeStatus.waiting) {
//       explosionAnim.setValue(0);
//     }
//   }, [playState.judge === judgeStatus.waiting]);

  return (
    <>
      <Animated.Image
        source={require("../../assets/explosion/explosion1.png")}
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
