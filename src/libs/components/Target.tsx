import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import PlayPattern from "../../models/playpattern";
import PlayGap from "../../models/playgap";
import { judgeStatus } from "../../types/play";

type Props = {
  playpattern: PlayPattern;
  playgap: PlayGap;
  laps: number[];
  opacities: number[];
  color: string;
  count: number;
  allGaps: number[];
  setAllGaps: (number: number[]) => void;
  setColor: (color: string) => void;
  judgeHandler: (judge: judgeStatus) => void;
};

const Target = ({
  playgap,
  playpattern,
  laps,
  count,
  opacities,
  color,
  allGaps,
  setAllGaps,
  judgeHandler,
}: Props) => {
  //指定するパラメーター
  let velocity: number = playpattern.target.velocity;
  let distance: number[] = playpattern.distance;
  const direction = playpattern.direction; //方向
  let allowGap = playgap.frontGap; //中心からここまで成功範囲
  let failureGap = playgap.passedGap; //これ以上行くと失敗

  //各種宣言
  let gaps: number[] = [];
  let translateX: number[] = [];

  //translateの位置を指定
  for (let i = 0; i < distance.length; i++) {
    translateX[i] = Math.floor(distance[i] - (velocity * count) / 100);

    gaps[i] = distance[i] - laps[i] * velocity / 100;

    useEffect(() => {
      if (gaps[i]) {
        setAllGaps([...allGaps, Math.floor(gaps[i])])
      }
    }, [gaps[i]]);

    if (laps.length > i && laps.length >= i + 1) {
      translateX[i] = distance[i] - (velocity * laps[i]) / 100;

      if (gaps[i] <= allowGap) {
        opacities[i] = 0;
      } else {
        opacities[i] = 1;
      }
    }

    if (translateX[i] < -failureGap) {
      translateX[i] = 0;
    }
  }

  //ターゲットを押すのが早すぎた
  useEffect(() => {
    if (gaps.some((value) => value >= allowGap)) {
      judgeHandler(judgeStatus.failure);
    }
  }, [gaps.some((value) => value >= allowGap)]);

  //ターゲットを押すのが遅すぎた
  useEffect(() => {
    if (translateX.some((value) => value <= -failureGap)) {
      judgeHandler(judgeStatus.failure);
    }
  }, [translateX.some((value) => value <= -failureGap)]);

  //ターゲットをfor文で表示
  var Targets1 = [];
  for (let i = 0; i < distance.length; i++) {
    Targets1.push(
      <View
        key={i}
        style={[
          styles.boxInnerContainer,
          {
            transform: [{ translateX: translateX[i] * direction[i] }],
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
    height: 64,
  },
  boxInnerContainer: {
    position: "absolute",
    width: "100%",
    height: 64,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    position: "absolute",
    width: 6,
    height: 64,
  },
});
