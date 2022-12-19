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

// import { View, StyleSheet, Pressable, Animated } from "react-native";
// import React, { useState, useCallback, useRef, useEffect } from "react";

// const Game = () => {
//   //指定するパラメーター
//   const velocity = 100; //速度
//   const distance = [100, 120, 160, 200]; //間隔
//   const direction = [1, -1, -1, 1]; //方向
//   let themeColor = "green"; //ターゲットの色
//   let allowGap = 50; //中心からここまで成功範囲
//   let failureGap = 10; //これ以上行くと失敗

//   //各種宣言
//   let gaps: number[] = [];
//   let translateX: number[] = [];
//   const [count, setCount] = useState<number>(0); //アニメーションを動かす基盤の数
//   const [isRunning, setIsRunning] = useState<boolean>(false); //アニメーションが動いているかどうか
//   const [laps, setLaps] = useState<number[]>([]); //ボタンを押したときのカウント
//   const [opacities, setOpacities] = useState<number[]>([]); //ターゲットそれぞれの透明度
//   const [color, setColor] = useState<string>(themeColor); //ターゲットのそれぞれの色

//   // const [success, setSuccess] = useState<number>(0);
//   // const [failure, setFailure] = useState<number>(0);

//   //成功時のアニメーション
//   let TargetAnim = useRef(new Animated.Value(0)).current;

//   const targetOpacity = TargetAnim.interpolate({
//     inputRange: [0, 50, 51, 100, 101, 150, 151, 199, 200],
//     outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0],
//   });

//   const AnimationStart = () => {
//     Animated.timing(TargetAnim, {
//       toValue: 200,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   };

//   //スタートした時の処理
//   const startHandler = () => {
//     setIsRunning(true);
//   };

//   //ボタンを押した時の処理
//   const lapHandler = () => {
//     AnimationStart();
//     setTimeout(() => {
//       TargetAnim.setValue(0);
//     }, 200);

//     setLaps((prevCount) => [...prevCount, count]);
//   };

//   //ストップボタンを押した時の処理
//   const stopRenderHandler = () => {
//     setLaps([]);
//     setIsRunning(false);
//     setTimeout(() => {
//       ResetCountHandler();
//     }, 1000);
//   };

//   //スタート時にリセットする処理
//   const ResetCountHandler = () => {
//     setCount(0);
//     setOpacities([]);
//     setColor(themeColor);
//     // setSuccess((prevCount) => ++prevCount);
//   };

//   // console.log("success" + success);
//   // console.log("failure" + failure);

//   //translateの位置を指定
//   for (let i = 0; i < distance.length; i++) {
//     translateX[i] = distance[i] - (velocity * count) / 100;

//     gaps[i] = distance[i] - laps[i];

//     if (laps.length > i && laps.length >= i + 1) {
//       translateX[i] = distance[i] - (velocity * laps[i]) / 100;

//       if (gaps[i] <= allowGap) {
//         opacities[i] = 0;
//       } else {
//         opacities[i] = 1;
//       }
//     }

//     if (translateX[i] < -failureGap) {
//       translateX[i] = 0;
//     }
//   }

//   //すべてのターゲットを範囲内で押す⇒成功

//   if (
//     laps.length === distance.length &&
//     gaps.every((value) => value <= allowGap)
//   ) {
//     console.log("success!");
//     stopRenderHandler();
//   }

//   //ターゲットを押すのが早すぎた

//   if (gaps.some((value) => value >= allowGap)) {
//     console.log("Too Early!");
//     setColor("red");
//     stopRenderHandler();
//   }

//   //ターゲットを押すのが遅すぎた
//   useEffect(() => {
//     if (translateX.some((value) => value === -failureGap)) {
//       console.log("Too Late!");
//       setColor("red");
//       stopRenderHandler();
//     }
//   }, [translateX.some((value) => value === -failureGap)]);

//   //カウンター設定
//   const useAnimationFrame = (isRunning: boolean, callback = () => {}) => {
//     const reqIdRef = useRef<number>(0);
//     const loop = useCallback(() => {
//       if (isRunning) {
//         callback();
//         reqIdRef.current = requestAnimationFrame(loop);
//       }
//     }, [isRunning, callback]);

//     useEffect(() => {
//       reqIdRef.current = requestAnimationFrame(loop);
//       return () => cancelAnimationFrame(reqIdRef.current);
//     }, [loop]);
//   };

//   const box = useCallback(() => {
//     setCount((prevCount) => ++prevCount);
//   }, []);

//   useAnimationFrame(isRunning, box);

//   //ターゲットをfor文で表示
//   var Targets = [];
//   for (let i = 0; i < distance.length; i++) {
//     Targets.push(
//       <View
//         key={i}
//         style={[
//           styles.boxInnerContainer,
//           {
//             transform: [{ translateX: translateX[i] * direction[i] }],
//             opacity: opacities[i],
//           },
//         ]}
//       >
//         <View
//           style={[
//             styles.box,
//             {
//               backgroundColor: color,
//             },
//           ]}
//         ></View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.rootContainer}>
//       <View style={styles.boxInnerContainer}>
//         <Animated.View
//           style={[
//             styles.box,
//             { backgroundColor: color, opacity: targetOpacity },
//           ]}
//         ></Animated.View>
//       </View>
//       <View style={styles.boxOuterContainer}>{Targets}</View>
//       <View
//         style={[
//           styles.boxBackground,
//           { backgroundColor: themeColor, width: allowGap * 2 },
//         ]}
//       ></View>
//       <Pressable
//         style={({ pressed }) => [
//           pressed && styles.pressed,
//           styles.button,
//           { backgroundColor: "red" },
//         ]}
//         android_ripple={{ color: "#ccc" }}
//         onPress={startHandler}
//       ></Pressable>
//       <Pressable
//         style={({ pressed }) => [
//           pressed && styles.pressed,
//           styles.button,
//           { backgroundColor: "blue" },
//         ]}
//         android_ripple={{ color: "#ccc" }}
//         onPress={lapHandler}
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
//   boxOuterContainer: {
//     width: "100%",
//     height: 100,
//   },
//   boxInnerContainer: {
//     position: "absolute",
//     width: "100%",
//     height: 100,
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   box: {
//     position: "absolute",
//     width: 10,
//     height: 100,
//   },
//   boxBackground: {
//     position: "absolute",
//     height: 100,
//     opacity: 0.1,
//   },
//   button: {
//     marginTop: 20,
//     width: 100,
//     height: 100,
//     backgroundColor: "red",
//   },
//   pressed: {
//     opacity: 0.75,
//   },
// });

