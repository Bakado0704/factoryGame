import { StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { judgeStatus, Play } from "../../types/play";
export type Props = {
  playState: Play;
};

const Explosion = ({ playState }: Props) => {
  let ExplosionAnim = useRef(new Animated.Value(0)).current;

  const exOpacity1 = ExplosionAnim.interpolate({
    inputRange: [0, 1, 2, 30],
    outputRange: [0, 1, 0, 0],
  });
  const exOpacity2 = ExplosionAnim.interpolate({
    inputRange: [0, 1, 2, 3, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity3 = ExplosionAnim.interpolate({
    inputRange: [0, 2, 3, 4, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity4 = ExplosionAnim.interpolate({
    inputRange: [0, 3, 4, 5, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity5 = ExplosionAnim.interpolate({
    inputRange: [0, 4, 5, 6, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity6 = ExplosionAnim.interpolate({
    inputRange: [0, 5, 6, 7, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity7 = ExplosionAnim.interpolate({
    inputRange: [0, 6, 7, 8, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity8 = ExplosionAnim.interpolate({
    inputRange: [0, 7, 8, 9, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity9 = ExplosionAnim.interpolate({
    inputRange: [0, 8, 9, 10, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity10 = ExplosionAnim.interpolate({
    inputRange: [0, 9, 10, 11, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity11 = ExplosionAnim.interpolate({
    inputRange: [0, 10, 11, 12, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity12 = ExplosionAnim.interpolate({
    inputRange: [0, 11, 12, 13, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity13 = ExplosionAnim.interpolate({
    inputRange: [0, 12, 13, 14, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity14 = ExplosionAnim.interpolate({
    inputRange: [0, 13, 14, 15, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity15 = ExplosionAnim.interpolate({
    inputRange: [0, 14, 15, 16, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity16 = ExplosionAnim.interpolate({
    inputRange: [0, 15, 16, 17, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity17 = ExplosionAnim.interpolate({
    inputRange: [0, 16, 17, 18, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity18 = ExplosionAnim.interpolate({
    inputRange: [0, 17, 18, 19, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity19 = ExplosionAnim.interpolate({
    inputRange: [0, 18, 19, 20, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity20 = ExplosionAnim.interpolate({
    inputRange: [0, 19, 20, 21, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity21 = ExplosionAnim.interpolate({
    inputRange: [0, 20, 21, 22, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity22 = ExplosionAnim.interpolate({
    inputRange: [0, 21, 22, 23, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity23 = ExplosionAnim.interpolate({
    inputRange: [0, 22, 23, 24, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity24 = ExplosionAnim.interpolate({
    inputRange: [0, 23, 24, 25, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity25 = ExplosionAnim.interpolate({
    inputRange: [0, 24, 25, 26, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity26 = ExplosionAnim.interpolate({
    inputRange: [0, 25, 26, 27, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity27 = ExplosionAnim.interpolate({
    inputRange: [0, 26, 27, 28, 30],
    outputRange: [0, 0, 1, 0, 0],
  });
  const exOpacity28 = ExplosionAnim.interpolate({
    inputRange: [0, 27, 28, 30],
    outputRange: [0, 0, 1, 0],
  });
  const exOpacity29 = ExplosionAnim.interpolate({
    inputRange: [0, 28, 29, 30],
    outputRange: [0, 0, 1, 0],
  });

  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      Animated.timing(ExplosionAnim, {
        toValue: 30,
        duration: 800,
        useNativeDriver: false,
      }).start();
    }
  }, [playState.judge === judgeStatus.failure]);

  //waitingの時元に戻す
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      ExplosionAnim.setValue(0);
    }
  }, [playState.judge === judgeStatus.waiting]);

  return (
    <>
      <Animated.Image
        source={require("../../assets/explosion/explosion1.png")}
        style={[styles.explosion, { opacity: exOpacity1 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion2.png")}
        style={[styles.explosion, { opacity: exOpacity2 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion3.png")}
        style={[styles.explosion, { opacity: exOpacity3 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion4.png")}
        style={[styles.explosion, { opacity: exOpacity4 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion5.png")}
        style={[styles.explosion, { opacity: exOpacity5 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion6.png")}
        style={[styles.explosion, { opacity: exOpacity6 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion7.png")}
        style={[styles.explosion, { opacity: exOpacity7 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion8.png")}
        style={[styles.explosion, { opacity: exOpacity8 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion9.png")}
        style={[styles.explosion, { opacity: exOpacity9 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion10.png")}
        style={[styles.explosion, { opacity: exOpacity10 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion11.png")}
        style={[styles.explosion, { opacity: exOpacity11 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion12.png")}
        style={[styles.explosion, { opacity: exOpacity12 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion13.png")}
        style={[styles.explosion, { opacity: exOpacity13 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion14.png")}
        style={[styles.explosion, { opacity: exOpacity14 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion15.png")}
        style={[styles.explosion, { opacity: exOpacity15 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion16.png")}
        style={[styles.explosion, { opacity: exOpacity16 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion17.png")}
        style={[styles.explosion, { opacity: exOpacity17 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion18.png")}
        style={[styles.explosion, { opacity: exOpacity18 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion19.png")}
        style={[styles.explosion, { opacity: exOpacity19 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion20.png")}
        style={[styles.explosion, { opacity: exOpacity20 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion21.png")}
        style={[styles.explosion, { opacity: exOpacity21 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion22.png")}
        style={[styles.explosion, { opacity: exOpacity22 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion23.png")}
        style={[styles.explosion, { opacity: exOpacity23 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion24.png")}
        style={[styles.explosion, { opacity: exOpacity24 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion25.png")}
        style={[styles.explosion, { opacity: exOpacity25 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion26.png")}
        style={[styles.explosion, { opacity: exOpacity26 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion27.png")}
        style={[styles.explosion, { opacity: exOpacity27 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion28.png")}
        style={[styles.explosion, { opacity: exOpacity28 }]}
      />
      <Animated.Image
        source={require("../../assets/explosion/explosion29.png")}
        style={[styles.explosion, { opacity: exOpacity29 }]}
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
