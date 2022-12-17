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

  translateX = distance[0] - (velocity * count) / 100;
  translateXX = distance[1] - (velocity * count) / 100;

  if (translateX <= 0) {
    translateX = 0;
  }
  if (translateXX <= 0) {
    translateXX = 0;
  }

  useAnimationFrame(isRunning, box);

  const pressHandler = () => {
    setIsRunning(true);
  };

  const pressSecondHandler = () => {
    setIsRunning(false);
  };

  const pressThirdHandler = () => {
    setCount(0);
  };

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

// import { View, StyleSheet, Pressable } from "react-native";
// import React, { useState, useCallback, useRef, useEffect } from "react";

// const Game = () => {
//   const velocity = 100;
//   const distance = [100, -200];
//   let backgroundColor = "green";
//   let allowGap = 50;

//   const useAnimationFrame = (
//     isRunning: boolean,
//     callback = () => {},
//     gaps: number[]
//   ) => {
//     const reqIdRef = useRef<number>(0);
//     const loop = useCallback(() => {
//       if (
//         isRunning &&
//         gaps.every((value) => value <= allowGap || Number.isNaN(value))
//       ) {
//         callback();
//         reqIdRef.current = requestAnimationFrame(loop);
//       }
//     }, [isRunning, callback, gaps]);

//     useEffect(() => {
//       reqIdRef.current = requestAnimationFrame(loop);
//       return () => cancelAnimationFrame(reqIdRef.current);
//     }, [loop]);
//   };

//   let gaps: number[] = [0, 0];
//   let translateX: number[] = [0, 0];
//   const [count, setCount] = useState<number>(0);
//   const [laps, setLaps] = useState<number[]>([]);
//   const [isRunning, setIsRunning] = useState<boolean>(false);

//   const box = useCallback(() => {
//     setCount((prevCount) => ++prevCount);
//   }, []);

//   const pressHandler = () => {
//     setIsRunning(true);
//   };

//   const pressSecondHandler = () => {
//     setLaps((prevCount) => [...prevCount, count]);
//   };

//   const pressThirdHandler = () => {
//     setLaps([]);
//     setIsRunning(false);
//     setCount(0);
//   };

//   for (let i = 0; i < distance.length; i++) {
//     translateX[i] = distance[i] - (velocity * count) / 100;
//     gaps[i] = distance[i] - laps[i];

//     if (laps.length > i && laps.length >= i + 1) {
//       translateX[i] = distance[i] - (velocity * laps[i]) / 100;
//     }

//     if (translateX[i] <= 0) {
//       translateX[i] = 0;
//     }

//     if (distance[i] < 0) {
//       translateX[i] = distance[i] + (velocity * count) / 100;
//       gaps[i] = -distance[i] - laps[i];

//       if (laps.length > i && laps.length >= i + 1) {
//         translateX[i] = distance[i] + (velocity * laps[i]) / 100;
//       }

//       if (translateX[i] >= 0) {
//         translateX[i] = 0;
//       }
//     }
//   }

//   gaps.some((value) => {
//     if (value >= allowGap) {
//       backgroundColor = "red";

//       setTimeout(() => {
//         pressThirdHandler();
//       }, 1000);
//     }
//   });

//   if (laps.length === distance.length && backgroundColor === "green") {
//     gaps.every((value) => {
//       if (value < allowGap) {
//         setTimeout(() => {
//           pressThirdHandler();
//         }, 1000);
//       }
//     });
//   }

//   useAnimationFrame(isRunning, box, gaps);

//   var Targets = [];
//   for (let i = 0; i < distance.length; i++) {
//     Targets.push(
//       <View
//         key={i}
//         style={[
//           styles.box,
//           {
//             backgroundColor: backgroundColor,
//             transform: [{ translateX: translateX[i] }],
//           },
//         ]}
//       ></View>
//     );
//   }

//   return (
//     <View style={styles.rootContainer}>
//       <View style={styles.boxContainer}>{Targets}</View>
//       <View
//         style={[styles.boxBackground, { backgroundColor: backgroundColor }]}
//       ></View>
//       <Pressable
//         style={({ pressed }) => [
//           pressed && styles.pressed,
//           styles.button,
//           { backgroundColor: "red" },
//         ]}
//         android_ripple={{ color: "#ccc" }}
//         onPress={pressHandler}
//       ></Pressable>
//       <Pressable
//         style={({ pressed }) => [
//           pressed && styles.pressed,
//           styles.button,
//           { backgroundColor: "blue" },
//         ]}
//         android_ripple={{ color: "#ccc" }}
//         onPress={pressSecondHandler}
//       ></Pressable>
//     </View>
//   );
// };

// export default Game;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 4,
//     width: "100%",
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   boxContainer: {
//     width: "100%",
//     height: 100,
//   },
//   box: {
//     position: "absolute",
//     right: 170,
//     width: 20,
//     height: 100,
//   },
//   boxBackground: {
//     position: "absolute",
//     right: 170,
//     height: 100,
//     opacity: 0.1,
//     top: 0,
//   },
//   button: {
//     marginTop: 20,
//     width: 100,
//     height: 20,
//     backgroundColor: "red",
//   },
//   pressed: {
//     opacity: 0.75,
//   },
// });
