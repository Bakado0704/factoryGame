import { View, StyleSheet, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

type Props = {
  laps: number[];
  color: string;
  isRunning: boolean;
};

const Animation = ({ color, laps, isRunning }: Props) => {
  let TargetAnim = useRef(new Animated.Value(0)).current;

  const targetOpacity = TargetAnim.interpolate({
    inputRange: [0, 50, 51, 100, 101, 150, 151, 199, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0],
  });

  useEffect(() => {
    if (laps.some((value) => !Number.isNaN(value))) {
      Animated.timing(TargetAnim, {
        toValue: 200,
        duration: 200,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        TargetAnim.setValue(0);
      }, 200);
    }
  }, [laps]);

  return (
    <View style={styles.boxInnerContainer}>
      {isRunning && (
        <Animated.View
          style={[
            styles.box,
            { backgroundColor: color, opacity: targetOpacity },
          ]}
        ></Animated.View>
      )}
    </View>
  );
};
export default Animation;

const styles = StyleSheet.create({
  boxInnerContainer: {
    position: "absolute",
    width: "100%",
    height: 64,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    position: "absolute",
    width: 10,
    height: 64,
  },
});
