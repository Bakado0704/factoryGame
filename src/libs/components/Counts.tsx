import { View, StyleSheet, Image } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { judgeStatus, Play, PlayGap, PlayStatus } from "../../types/play";
import PlayPattern from "../../models/playpattern";
import Targets from "./Targets";
import NavGame from "../../components/nav/NavFooter/NavGame";

type Props = {
  playpattern: PlayPattern[][];
  playgap: PlayGap;
  playState: Play;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
  comboHandler: (number: number) => void;
};

const Counts = ({
  playpattern,
  playgap,
  playState,
  judgeHandler,
  damageHandler,
  comboHandler,
}: Props) => {

  //各種宣言
  const [count, setCount] = useState<number>(0); //アニメーションを動かす基盤の数
  const [allGaps, setAllGaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true); //アニメーションが動いているかどうか
  const [selectedPlayPattern, setSelectedPlayPattern] = useState<PlayPattern[]>(
    playpattern[0]
  );

  //スタミナカウント設定
  const useStaminaFrame = (status: PlayStatus, callback = () => {}) => {
    const reqIdRef = useRef<number>(0);
    const loop = useCallback(() => {
      if (status === PlayStatus.playing) {
        callback();
        reqIdRef.current = requestAnimationFrame(loop);
      }
    }, [status, callback]);

    useEffect(() => {
      reqIdRef.current = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(reqIdRef.current);
    }, [loop]);
  };

  const stamina = useCallback(() => {
    damageHandler(0.1);
  }, []);

  useStaminaFrame(playState.status, stamina);

  //時間カウント設定
  const useAnimationFrame = (isRunning: boolean, callback = () => {}) => {
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

  const box = useCallback(() => {
    setCount((prevCount) => ++prevCount);
  }, []);

  useAnimationFrame(isRunning, box);

  //statusがplayingに変わったときパターンの選定
  useEffect(() => {
    if (playState.judge === judgeStatus.success || judgeStatus.failure) {
      setSelectedPlayPattern(
        playpattern[Math.floor(Math.random() * playpattern.length)]
      );
    }
    console.log(playState.judge === judgeStatus.success || judgeStatus.failure)
  }, [playState.judge === judgeStatus.success || judgeStatus.failure]);

  // すべてのDitanceの宣言
  let allDistance = [];
  for (let i = 0; i < selectedPlayPattern.length; i++) {
    for (let y = 0; y < selectedPlayPattern[i].distance.length; y++) {
      allDistance.push(selectedPlayPattern[i].distance[y]);
    }
  }

  //すべてのgapsがdistanceと同じ数になる && gapsがすべて範囲内の時、成功にする
  //judgeが成功の時,isRunnningをfalseにし、waitingにもどす
  useEffect(() => {
    // console.log(allDistance.length);
    console.log(allGaps);
    if (
      allDistance.length === allGaps.length &&
      allGaps.every((value) => value <= playgap.frontGap)
    ) {
      judgeHandler(judgeStatus.success);
      setTimeout(() => {
        setIsRunning(false);
      }, 200);
      setTimeout(() => {
        judgeHandler(judgeStatus.waiting);
      }, 800);
    }
  }, [allGaps]);


  //judgeが失敗の時,isRunnningをfalse＋100ダメージ、waitingにもどす
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      setIsRunning(false);
      damageHandler(100);
      setTimeout(() => {
        judgeHandler(judgeStatus.waiting);
      }, 1000);
    }
  }, [playState.judge === judgeStatus.failure]);

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
        playState={playState}
        setAllGaps={setAllGaps}
        setCount={setCount}
        setIsRunning={setIsRunning}
        judgeHandler={judgeHandler}
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
  },
});
