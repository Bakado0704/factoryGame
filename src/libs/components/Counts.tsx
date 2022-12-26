import { View, StyleSheet, Image } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Play, PlayGap } from "../../types/play";
import PlayPattern from "../../models/playpattern";
import Targets from "./Targets";
import NavGame from "../../components/nav/NavFooter/NavGame";
import { useDispatch } from "react-redux";

type Props = {
  playpattern: PlayPattern[][];
  playgap: PlayGap;
  playState: Play;
  damageHandler: (number: number) => void;
};

const Counts = ({ playpattern, playgap, playState, damageHandler }: Props) => {
  //各種宣言
  const [count, setCount] = useState<number>(0); //アニメーションを動かす基盤の数
  const [allGaps, setAllGaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false); //アニメーションが動いているかどうか
  const [targetSuccess, setTargetSuccess] = useState<string[]>([]);
  const [selectedPlayPattern, setSelectedPlayPattern] = useState<PlayPattern[]>(
    playpattern[0]
  );

  //時間カウント設定
  const useAnimationFrame = (isRunning: boolean, callback = () => {}) => {
    const dispatch = useDispatch();
    const reqIdRef = useRef<number>(0);
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

  //繰り返す処理(カウントを足していく)
  const box = useCallback(() => {
    setCount((prevCount) => ++prevCount);
    damageHandler(1);
  }, []);

  useAnimationFrame(isRunning, box);

  //パターンの選定
  useEffect(() => {
    if (!isRunning) {
      setTimeout(() => {
        setSelectedPlayPattern(
          playpattern[Math.floor(Math.random() * playpattern.length)]
        );
      }, 1000);
    }
  }, [isRunning]);

  // すべてのDitanceの宣言
  let allDistance = [];
  for (let i = 0; i < selectedPlayPattern.length; i++) {
    for (let y = 0; y < selectedPlayPattern[i].distance.length; y++) {
      allDistance.push(selectedPlayPattern[i].distance[y]);
    }
  }

  //すべてのgapsがdistanceと同じ数になる && gapsがすべて範囲内の時、成功
  useEffect(() => {
    if (
      allDistance.length === allGaps.length &&
      allGaps.every((value) => value <= playgap.frontGap)
    ) {
      console.log("success!!!!");
    }
  }, [allGaps]);

  //ターゲットをfor文で表示
  var TargetSet = [];
  for (let i = 0; i < playpattern.length; i++) {
    TargetSet.push(
      <Targets
        key={i}
        playpattern={selectedPlayPattern[i]}
        playpatternLength={selectedPlayPattern.length}
        playgap={playgap}
        count={count}
        isRunning={isRunning}
        allGaps={allGaps}
        targetSuccess={targetSuccess}
        setAllGaps={setAllGaps}
        setCount={setCount}
        setIsRunning={setIsRunning}
        setTargetSuccess={setTargetSuccess}
      />
    );
  }

  return (
    <>
      <Image
        source={require("../../assets/ui/playBoardBackground.png")}
        style={styles.boardTop}
      />
      <Image
        source={require("../../assets/ui/playBoard.png")}
        style={styles.boardTop}
      />
      <View style={styles.rootContainer}>{TargetSet}</View>
      <NavGame playState={playState} />
    </>
  );
};

export default Counts;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  boardTop: {
    position: "absolute",
    height: 174,
    width: "100%",
    bottom: 0,
    left: 0,
  }
});
