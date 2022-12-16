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

  const velocity = 100;
  const distance = [100, 200];
  let translateX: number;
  let translateXX: number;

  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const box = useCallback(() => {
    setCount((prevCount) => ++prevCount);
  }, []);

  translateXX = distance[1] - (velocity * count) / 100;
  translateX = distance[0] - (velocity * count) / 100;

  if (translateX <= 0) {
    translateX = 0;
  }
  if (translateXX <= 0) {
    translateXX = 0;
  }

  const pressHandler = () => {
    setIsRunning(true);
  };

  const pressSecondHandler = () => {
    setIsRunning(false);
  };

  const pressThirdHandler = () => {
    setCount(0);
  };

  console.log(translateX);

  useAnimationFrame(isRunning, box);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.boxContainer}>
        <View
          style={[styles.box, { transform: [{ translateX: translateX }] }]}
        ></View>
        <View
          style={[styles.box, { transform: [{ translateX: -translateXX }] }]}
        ></View>
      </View>

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
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.button,
          { backgroundColor: "black" },
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={pressThirdHandler}
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
  boxContainer: {
    width: "100%",
    height: 100,
  },
  box: {
    position: "absolute",
    right: 170,
    width: 20,
    height: 100,
    backgroundColor: "green",
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
