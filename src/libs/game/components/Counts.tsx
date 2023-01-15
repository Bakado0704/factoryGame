import { View, StyleSheet, Image } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { judgeStatus, Play, PlayGap, PlayStatus } from "../../../types/play";
import PlayPattern from "../../../models/playpattern";
import Targets from "./Targets";
import NavGame from "../../../components/game/NavGame";
import playpattern from "../../../models/playpattern";

type Props = {
  playpattern: PlayPattern[][];
  playgap: PlayGap;
  playState: Play;
  perMoney: number;
  judgeHandler: (judge: judgeStatus) => void;
  stateHandler: (state: PlayStatus) => void;
  damageHandler: (number: number) => void;
  changeComboHandler: (number: number) => void;
  changeCompleteCount: (number: number) => void;
  changeNowMoneyHandler: (number: number) => void;
  processCountHandler: (number: number) => void;
  selectedPatternHandler: (pattern: PlayPattern[]) => void;
  changeProductTypeHandler: () => void;
  changeNextProductHandler: () => void;
  changeCenterProductHandler: () => void;
};

const Counts = ({
  playpattern,
  playgap,
  playState,
  perMoney,
  judgeHandler,
  stateHandler,
  damageHandler,
  changeComboHandler,
  changeCompleteCount,
  changeNowMoneyHandler,
  processCountHandler,
  selectedPatternHandler,
  changeProductTypeHandler,
  changeNextProductHandler,
  changeCenterProductHandler,
}: Props) => {
  //各種宣言
  const [count, setCount] = useState<number>(0); //アニメーションを動かす基盤の数
  const [allGaps, setAllGaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true); //アニメーションが動いているかどうか
  const [selectedPlayPattern, setSelectedPlayPattern] = useState<PlayPattern[]>(
    playpattern[0]
  );

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

  //judgeが waitingに変わったときパターンの選定
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      setSelectedPlayPattern(
        playpattern[Math.floor(Math.random() * playpattern.length)]
      );
      selectedPatternHandler(selectedPlayPattern);
      console.log("changed!");
    }
  }, [playState.judge === judgeStatus.waiting]);

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
    processCountHandler(allGaps.length);
    if (
      allDistance.length === allGaps.length &&
      allGaps.every((value) => value <= playgap.frontGap)
    ) {
      judgeHandler(judgeStatus.success);
      changeNowMoneyHandler(perMoney);
      changeProductTypeHandler(),
      changeNextProductHandler(),
      changeComboHandler(1);
      changeCompleteCount(1);
      setTimeout(() => {
        setIsRunning(false);
      }, 200);
      setTimeout(() => {
        changeCenterProductHandler();
        judgeHandler(judgeStatus.waiting);
      }, 800);
    }
  }, [allGaps]);

  //ターゲットを押すのが早すぎた
  useEffect(() => {
    if (allGaps.some((value) => value >= 20)) {
      damageHandler(100);
      judgeHandler(judgeStatus.failure);
      console.log("ターゲットを押すのが早すぎた");
    }
  }, [allGaps.some((value) => value >= 20)]);

  // judgeが失敗の時,isRunnningをfalse＋100ダメージ、waitingにもどす
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      changeProductTypeHandler(),
      changeNextProductHandler(),
      setIsRunning(false);
      changeComboHandler(0);
      setTimeout(() => {
        changeCenterProductHandler();
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
        playgap={playgap}
        count={count}
        isRunning={isRunning}
        allGaps={allGaps}
        playState={playState}
        setAllGaps={setAllGaps}
        stateHandler={stateHandler}
        setCount={setCount}
        setIsRunning={setIsRunning}
        judgeHandler={judgeHandler}
        damageHandler={damageHandler}
      />
    );
  }

  return (
    <>
      <Image
        source={require("../../../assets/ui/playBoardBackground.png")}
        style={styles.boardTop}
      />
      <Image
        source={require("../../../assets/ui/playBoard.png")}
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
