import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { judgeStatus, Play, PlayGap } from "../../../types/play";
import PlayPattern from "../../../models/playpattern";
import Target from "./Target";
import Animation from "./Animation";
import { productType } from "../../../types/product";
import PlayButton from "../../../components/button/PlayButton";
const { width } = Dimensions.get("window");

type Props = {
  playpattern: PlayPattern;
  playgap: PlayGap;
  drink: number;
  count: number;
  isRunning: boolean;
  allGaps: number[];
  playState: Play;
  productType: productType;
  order: number;
  setAllGaps: (number: number[]) => void;
  setIsRunning: (state: boolean) => void;
  setCount: (number: number) => void;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
};

const Targets = ({
  playpattern,
  playgap,
  drink,
  count,
  isRunning,
  allGaps,
  playState,
  productType,
  order,
  setAllGaps,
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
  const [bonus, setBonus] = useState<number>(1.0); //ターゲットのそれぞれの色
  const [failureOrder, setFailureOrder] = useState<number | undefined>(); //失敗した色の番号

  //judgeがfailureになったとき赤くする
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      setColor("red");
    }
  }, [playState.judge === judgeStatus.failure]);

  //judgeがwaitingになったときリセットする
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      setBonus(1.0);
      setCount(0);
      setLaps([]);
      setOpacities([]);
      setAllGaps([]);
      setFailureOrder(undefined);
      setColor(themeColor);
      setIsRunning(true);
    }
  }, [playState.judge === judgeStatus.waiting]);

  //もしproductTypeが"bonus"ならcountが0になってから1.5に
  useEffect(() => {
    if (productType === "bonus" && count === 0) {
      setBonus(1.5);
    }
  }, [productType === "bonus" && count === 0]);

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
          playState={playState}
          playgap={playgap}
          drink={drink}
          laps={laps}
          opacities={opacities}
          color={color}
          count={count}
          allGaps={allGaps}
          bonus={bonus}
          order={order}
          setFailureOrder={setFailureOrder}
          setAllGaps={setAllGaps}
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
      <View style={{ marginTop: width * 0.171 }}>
        <PlayButton
          sourceOn={playpattern.target.ImageSourceOn}
          sourceOff={playpattern.target.ImageSourceOff}
          sourcePressed={playpattern.target.ImageSourcePressed}
          playState={playState}
          order={order}
          failureOrder={failureOrder}
          onPress={lapHandler}
          width={width * 0.157}
          height={width * 0.171}
          padding={width * 0.021}
        />
      </View>
    </>
  );
};

export default Targets;

const styles = StyleSheet.create({
  animationContainer: {
    position: "absolute",
    width: "100%",
    height: width * 0.171,
  },
  box: {
    position: "absolute",
    width: width * 0.027,
    height: width * 0.171,
  },
  boxBackground: {
    position: "absolute",
    height: width * 0.171,
    opacity: 0.02,
  },
  button: {
    marginTop: width * 0.171,
    width: width * 0.157,
    height: width * 0.171,
  }
});
