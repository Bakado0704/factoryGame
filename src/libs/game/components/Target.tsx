import { View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import PlayPattern from "../../../models/playpattern";
import PlayGap from "../../../models/playgap";
import { judgeStatus, Play } from "../../../types/play";
const { width } = Dimensions.get("window");

type Props = {
  playpattern: PlayPattern;
  playgap: PlayGap;
  drink: number;
  laps: number[];
  opacities: number[];
  color: string;
  count: number;
  allGaps: number[];
  playState: Play;
  bonus: number;
  order: number;
  setAllGaps: (number: number[]) => void;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
  setFailureOrder: (number: number | undefined) => void;
};

const Target = ({
  playgap,
  playpattern,
  drink,
  laps,
  count,
  allGaps,
  opacities,
  color,
  playState,
  bonus,
  order,
  setFailureOrder,
  setAllGaps,
  damageHandler,
  judgeHandler,
}: Props) => {
  //指定するパラメーター
  let velocity: number = Math.floor(
    playpattern.target.velocity * (1 + 0.1 * drink) * bonus
  );
  let distance: number[] = playpattern.distance;
  const direction = playpattern.direction; //方向
  let allowGap = playgap.frontGap; //中心からここまで成功範囲
  let failureGap = playgap.passedGap; //これ以上行くと失敗

  //各種宣言
  const [gap, setGap] = useState<number[]>([]);
  let gaps: number[] = [];
  let translateX: number[] = [];

  //translateの位置を指定
  // for (let i = 0; i < distance.length; i++) {
  //   translateX[i] = Math.floor(distance[i] - (velocity * count) / 100);
  //   gaps[i] = Math.floor(distance[i] - (velocity * laps[i]) / 100);

  //   //もしgapsが設定されたら,translateXはそこ
  //   if (gaps[i] || gaps[i] === 0) {
  //     translateX[i] = gaps[i];

  //     //かつallowGapから外れていた場合opecityは1のまま赤く
  //     if (gaps[i] <= allowGap) {
  //       opacities[i] = 0;
  //     } else {
  //       opacities[i] = 1;
  //     }
  //   }

  //   //もしGapsが設定されたら、allgaps,gapに入れる
  //   useEffect(() => {
  //     if (gaps[i] || gaps[i] === 0) {
  //       setAllGaps([...allGaps, gaps[i]]);
  //       setGap([...gap, gaps[i]]);
  //     }
  //   }, [gaps[i] || gaps[i] === 0]);
  // }

  //ターゲットを押すのが早すぎた
  useEffect(() => {
    if (gap.some((value) => value >= 20)) {
      damageHandler(100);
      setGap([]);
      setFailureOrder(order);
      judgeHandler(judgeStatus.failure);

      // console.log("ターゲットを押すのが早すぎた");
    }
  }, [gap.some((value) => value >= 20)]);

  //ターゲットを押すのが遅すぎた
  useEffect(() => {
    if (translateX.some((value) => value <= -failureGap)) {
      damageHandler(100);
      setFailureOrder(order);
      judgeHandler(judgeStatus.failure);
      // console.log("ターゲットを押すのが遅すぎた");
    }
  }, [translateX.some((value) => value <= -failureGap)]);

  // lapsの数がdistanceの数を超えても失敗
  //success後にクリックしても発動しないように
  useEffect(() => {
    if (laps.length > distance.length && playState.judge !== "success") {
      damageHandler(100);
      setFailureOrder(order);
      judgeHandler(judgeStatus.failure);
      // console.log("lapsの数がdistanceの数を超えても失敗");
    }
  }, [laps.length > distance.length]);

  //ターゲットをfor文で表示
  var Targets1 = [];
  for (let i = 0; i < distance.length; i++) {
    Targets1.push(
      <View
        key={i}
        style={[
          styles.boxInnerContainer,
          {
            // transform: [{ translateX: translateX[i] * direction[i] }],
            opacity: opacities[i],
          },
        ]}
      >
        <View
          style={[
            styles.box,
            {
              backgroundColor: color,
            },
          ]}
        ></View>
      </View>
    );
  }

  return <View style={styles.rootContainer}>{Targets1}</View>;
};

export default Target;

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: width * 0.171,
  },
  boxInnerContainer: {
    position: "absolute",
    width: "100%",
    height: width * 0.171,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    position: "absolute",
    width: width * 0.016,
    height: width * 0.171,
  },
});
