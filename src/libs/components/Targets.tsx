import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { judgeStatus, Play, PlayGap, PlayStatus } from "../../types/play";
import PlayPattern from "../../models/playpattern";
import Target from "./Target";
import Animation from "./Animation";
import ImageButton from "../../components/ui/ImageButton";

type Props = {
  playpattern: PlayPattern;
  playgap: PlayGap;
  count: number;
  isRunning: boolean;
  allGaps: number[];
  playState: Play;
  setAllGaps: (number: number[]) => void;
  stateHandler: (state: PlayStatus) => void;
  setIsRunning: (state: boolean) => void;
  setCount: (number: number) => void;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
};

const Targets = ({
  playpattern,
  playgap,
  count,
  isRunning,
  allGaps,
  playState,
  setAllGaps,
  stateHandler,
  setIsRunning,
  setCount,
  judgeHandler,
  damageHandler,
}: Props) => {
  let themeColor = playpattern.target.color; //ターゲットの色
  let allowGap = playgap.frontGap; //中心からここまで成功範囲

  //各種宣言
  const [laps, setLaps] = useState<number[]>([]); //ボタンを押したときのカウント
  const [opacities, setOpacities] = useState<number[]>([]); //ターゲットそれぞれの透明度
  const [color, setColor] = useState<string>(themeColor); //ターゲットのそれぞれの色

  //judgeがfailureになったとき赤くする
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      setColor("red");
    }
  }, [playState.judge === judgeStatus.failure]);

  //judgeがwaitingになったときリセットする
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      setCount(0);
      setLaps([]);
      setOpacities([]);
      setAllGaps([]);
      setColor(themeColor);
      setIsRunning(true);
    }
  }, [playState.judge === judgeStatus.waiting]);

  //ボタンを押した時の処理
  const lapHandler = () => {
    if (playState.judge !== judgeStatus.failure) {
      setLaps((prevCount) => [...prevCount, count]);
    }
  };

  const { width } = Dimensions.get("window");

  let transformX = width / 2;

  return (
    <>
      <View style={styles.animationContainer}>
        <Animation color={color} laps={laps} isRunning={isRunning} />
        <Target
          playpattern={playpattern}
          playgap={playgap}
          playState={playState}
          laps={laps}
          opacities={opacities}
          color={color}
          count={count}
          allGaps={allGaps}
          setAllGaps={setAllGaps}
          stateHandler={stateHandler}
          judgeHandler={judgeHandler}
          damageHandler={damageHandler}
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
