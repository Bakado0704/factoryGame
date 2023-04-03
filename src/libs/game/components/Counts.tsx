import { View, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { judgeStatus, Play, PlayGap } from "../../../types/play";
import PlayPattern from "../../../models/playpattern";
import Targets from "./Targets";
import NavGame from "../../../components/game/NavGame";
import { productType } from "../../../types/product";
const { width } = Dimensions.get("window");

type Props = {
  playpattern: PlayPattern[][];
  playgap: PlayGap;
  playState: Play;
  drink: number;
  plusMoney: number;
  productType: productType;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
  changeComboHandler: (number: number) => void;
  changeCompleteCount: (number: number) => void;
  changeNowMoneyHandler: (number: number) => void;
  processCountHandler: (number: number) => void;
  selectedPatternHandler: (pattern: PlayPattern[]) => void;
  changePrevProductTypeHandler: () => void;
  changeNextProductTypeHandler: () => void;
};

const Counts = ({
  playpattern,
  playgap,
  playState,
  drink,
  plusMoney,
  productType,
  judgeHandler,
  damageHandler,
  changeComboHandler,
  changeCompleteCount,
  changeNowMoneyHandler,
  processCountHandler,
  selectedPatternHandler,
  changePrevProductTypeHandler,
  changeNextProductTypeHandler,
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
    }
  }, [playState.judge === judgeStatus.waiting]);

  // すべてのDitanceの宣言
  let allDistance = [];
  for (let i = 0; i < selectedPlayPattern.length; i++) {
    for (let y = 0; y < selectedPlayPattern[i].distance.length; y++) {
      allDistance.push(selectedPlayPattern[i].distance[y]);
    }
  }

  useEffect(() => {
    processCountHandler(allGaps.length);
  }, [allGaps]);

  //すべてのgapsがdistanceと同じ数になる && gapsがすべて範囲内の時、成功にする
  //judgeが成功の時,isRunnningをfalseにし、waitingにもどす
  useEffect(() => {
    if (
      allDistance.length === allGaps.length &&
      allGaps.every((value) => value <= playgap.frontGap)
    ) {
      judgeHandler(judgeStatus.success);
      changeNowMoneyHandler(plusMoney);
      changeNextProductTypeHandler(),
      changeCompleteCount(1);
      setTimeout(() => {
        setIsRunning(false);
      }, 200);
      setTimeout(() => {
        changeComboHandler(1);
        changePrevProductTypeHandler();
        judgeHandler(judgeStatus.waiting);
      }, 800);
    }
  }, [allDistance.length === allGaps.length &&
    allGaps.every((value) => value <= playgap.frontGap)]);

  // judgeが失敗の時,isRunnningをfalse＋100ダメージ、waitingにもどす
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      changeNextProductTypeHandler(),
      setIsRunning(false);
      changeComboHandler(0);
      setTimeout(() => {
        changePrevProductTypeHandler();
      }, 800);
      setTimeout(() => {
        judgeHandler(judgeStatus.waiting);
      }, 1000);
    }
  }, [playState.judge === judgeStatus.failure]);

  //ターゲットをfor文で表示
  var TargetSet = [];
  for (let i = 0; i < playpattern[0].length; i++) {
    TargetSet.push(
      <Targets
        key={i}
        order={i}
        playpattern={selectedPlayPattern[i]}
        playgap={playgap}
        count={count}
        drink={drink}
        isRunning={isRunning}
        allGaps={allGaps}
        playState={playState}
        productType={productType}
        setAllGaps={setAllGaps}
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
    height: width * 0.464,
    width: "100%",
    bottom: 0,
    left: 0,
  },
});
