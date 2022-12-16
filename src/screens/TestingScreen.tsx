import { View, StyleSheet, Pressable } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";

const Testing = () => {
  const useAnimationFrame = (isRunning: boolean, callback = () => {}) => {
    const reqIdRef = useRef<number>();
    const loop = useCallback(() => {
      if (isRunning) {
        callback();
        reqIdRef.current = requestAnimationFrame(loop);
      }
    }, [isRunning, callback]);

    useEffect(() => {
      reqIdRef.current = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(reqIdRef.current);
    }, [loop]);
  };

  let startTime: number;
  const duration = 1000;
  const velocity = 20;
  const distance = [100, 200];

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateXX, setTranslateXX] = useState<number>(0);

  const boxFirst = useCallback(() => {
    const progress = (Date.now() - startTime) / duration;
    const translateX = distance[0] - velocity * progress;
    const translateXX = distance[1] - velocity * progress;

    if (translateX > 0) {
      setTranslateX(translateX);
    }
    if (translateXX > 0) {
      setTranslateXX(translateXX);
    }
  }, []);

  useAnimationFrame(isRunning, boxFirst);

  const pressHandler = () => {
    setIsRunning(true);
    startTime = Date.now();
  };

  const pressSecondHandler = () => {
    setIsRunning(false);
    startTime = Date.now();
  };

  return (
    <View style={styles.rootContainer}>
      <View
        style={[styles.box, { transform: [{ translateX: translateX }] }]}
      ></View>
      <View
        style={[styles.box, { transform: [{ translateX: -translateXX }] }]}
      ></View>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.button,
          { backgroundColor: "red" },
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={pressHandler}
      ></Pressable>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.button,
          { backgroundColor: "blue" },
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={pressSecondHandler}
      ></Pressable>
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    width: 100,
    height: 20,
    backgroundColor: "red",
  },
  pressed: {
    opacity: 0.75,
  },
});
