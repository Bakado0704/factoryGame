import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { PlayGap } from "../../types/play";
import PlayPattern from "../../models/playpattern";
import Target from "./Target";
import Animation from "./Animation";

type Props = {
  playpattern: PlayPattern;
  playpatternLength: number;
  playgap: PlayGap;
  count: number;
  isRunning: boolean;
  allGaps: number[];
  targetSuccess: string[];
  setAllGaps: (number: number[]) => void;
  setIsRunning: (state: boolean) => void;
  setCount: (number: number) => void;
  setTargetSuccess: (state: string[]) => void;
};

const Targets = ({
  playpattern,
  playpatternLength,
  playgap,
  count,
  isRunning,
  allGaps,
  targetSuccess,
  setAllGaps,
  setIsRunning,
  setCount,
  setTargetSuccess,
}: Props) => {
  let themeColor = playpattern.target.color; //ターゲットの色
  let allowGap = playgap.frontGap; //中心からここまで成功範囲

  //各種宣言
  const [laps, setLaps] = useState<number[]>([]); //ボタンを押したときのカウント
  const [opacities, setOpacities] = useState<number[]>([]); //ターゲットそれぞれの透明度
  const [color, setColor] = useState<string>(themeColor); //ターゲットのそれぞれの色

  //ストップボタンを押した時の処理
  const failureStopHandler = () => {
    setIsRunning(false);
  };

  //スタート時にリセットする処理
  useEffect(() => {
    if (!isRunning) {
      setTimeout(() => {
        setCount(0);
        setLaps([]);
        setOpacities([]);
        setAllGaps([]);
        setTargetSuccess([]);
        setColor(themeColor);
      }, 1000);
    }
  }, [isRunning]);

  //ボタンを押した時の処理
  const lapHandler = () => {
    setLaps((prevCount) => [...prevCount, count]);
  };

  //targetがすべて成功した時;
  useEffect(() => {
    if (targetSuccess.length === playpatternLength) {
      setIsRunning(false);
    }
  }, [targetSuccess]);

  const { width, height, scale } = Dimensions.get("window");

  let transformX = width / 2;

  return (
    <>
      <View style={styles.animationContainer}>
        <Animation color={color} laps={laps} isRunning={isRunning} />
        <Target
          playpattern={playpattern}
          playgap={playgap}
          laps={laps}
          opacities={opacities}
          color={color}
          count={count}
          targetSuccess={targetSuccess}
          allGaps={allGaps}
          setAllGaps={setAllGaps}
          setColor={setColor}
          failureStopHandler={failureStopHandler}
          setTargetSuccess={setTargetSuccess}
        />
        <View
          style={[
            styles.boxBackground,
            {
              backgroundColor: themeColor,
              width: allowGap * 2,
              left: -allowGap,
              transform: [{ translateX: transformX }],
            },
          ]}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.button,
          { backgroundColor: themeColor },
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={lapHandler}
      ></Pressable>
    </>
  );
};

export default Targets;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    width: "100%",
    height: 100,
  },
  boxOuterContainer: {
    width: "100%",
    height: 100,
  },
  boxInnerContainer: {
    position: "absolute",
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    position: "absolute",
    width: 10,
    height: 100,
  },
  boxBackground: {
    position: "absolute",
    height: 100,
    opacity: 0.1,
  },
  button: {
    marginTop: 120,
    marginHorizontal: 10,
    width: 66,
    height: 66,
    backgroundColor: "red",
  },
  pressed: {
    opacity: 0.75,
  },
});

//targetのすべての数
// let array1 = [];
// for (let i = 0; i < playpattern.length; i++) {
//   for (let y = 0; y < playpattern[i].distance.length; y++) {
//     array1.push(playpattern[i].distance[y]);
//   }
// }

//1番目のボタンのGap配列
// const gapsHandler = (gaps: number[]) => {
//   useEffect(() => {
//     if (gaps.length !== 0) {
//       setFirstGaps(gaps.filter((gaps) => { return !Number.isNaN(gaps)}))
//     }
//   }, [gaps.filter((gaps) => { return !Number.isNaN(gaps) }).length]);
// }

// console.log(firstGaps)

//すべての色のボタンのターゲットを範囲内で押す⇒成功
