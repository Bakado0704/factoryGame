import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { PlayGap } from "../../types/play";
import PlayPattern from "../../models/playpattern";
import Target from "./Target";
import Animation from "./Animation";
import ImageButton from "../../components/ui/ImageButton";

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
        setIsRunning(true);
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
      setTimeout(() => {
        setIsRunning(false);
      }, 200);
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
              backgroundColor: "yellow",
              width: allowGap * 2,
              left: -allowGap,
              transform: [{ translateX: transformX }],
            },
          ]}
        />
      </View>
      <ImageButton
        source={playpattern.target.ImageSource}
        style={styles.button}
        onPress={lapHandler}
      />
    </>
  );
};

export default Targets;

const styles = StyleSheet.create({
  animationContainer: {
    position: "absolute",
    width: "100%",
    height: 64,
  },
  box: {
    position: "absolute",
    width: 10,
    height: 64,
  },
  boxBackground: {
    position: "absolute",
    height: 64,
    opacity: 0.02,
  },
  button: {
    marginTop: 72,
    marginBottom: 8,
    marginHorizontal: 10,
    width: 59,
    height: 64,
  },
  pressed: {
    opacity: 0.75,
  },
});
