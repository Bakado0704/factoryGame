import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import PlayPattern from "../../../models/playpattern";
import PlayGap from "../../../models/playgap";
import { judgeStatus, Play, PlayStatus } from "../../../types/play";
import user from "../../../store/user";
import { productType } from "../../../types/product";

type Props = {
  playpattern: PlayPattern;
  playgap: PlayGap;
  drink: number;
  laps: number[];
  opacities: number[];
  color: string;
  count: number;
  allGaps: number[];
  productType: productType;
  setAllGaps: (number: number[]) => void;
  judgeHandler: (judge: judgeStatus) => void;
  damageHandler: (number: number) => void;
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
  productType,
  setAllGaps,
  damageHandler,
  judgeHandler,
}: Props) => {
  //指定するパラメーター
  let velocity: number = Math.floor(
    playpattern.target.velocity * (1 + 0.1 * drink)
  );
  let distance: number[] = playpattern.distance;
  const direction = playpattern.direction; //方向
  let allowGap = playgap.frontGap; //中心からここまで成功範囲
  let failureGap = playgap.passedGap; //これ以上行くと失敗

  if (productType === "bonus") {
    velocity = Math.floor(
      playpattern.target.velocity * (1 + 0.1 * drink) * 1.5
    );
  }

  //各種宣言
  let gaps: number[] = [];
  let translateX: number[] = [];

  //translateの位置を指定
  for (let i = 0; i < distance.length; i++) {
    translateX[i] = Math.floor(distance[i] - (velocity * count) / 100);
    gaps[i] = Math.floor(distance[i] - (velocity * laps[i]) / 100);

    //もしgapsが設定されたら,移動量はそこになる
    if (gaps[i] || gaps[i] === 0) {
      translateX[i] = gaps[i];

      if (gaps[i] <= allowGap) {
        opacities[i] = 0;
      } else {
        opacities[i] = 1;
      }
    }

    //もしGapsが設定されたら、allgapsに入れる
    useEffect(() => {
      if (gaps[i] || gaps[i] === 0) {
        setAllGaps([...allGaps, gaps[i]]);
      }
    }, [gaps[i] || gaps[i] === 0]);
  }

  //ターゲットを押すのが遅すぎた
  useEffect(() => {
    if (translateX.some((value) => value <= -failureGap)) {
      damageHandler(100);
      judgeHandler(judgeStatus.failure);
      // console.log("ターゲットを押すのが遅すぎた");
    }
  }, [translateX.some((value) => value <= -failureGap)]);

  // lapsの数がdistanceの数を超えても失敗
  useEffect(() => {
    if (laps.length > playpattern.distance.length) {
      damageHandler(100);
      judgeHandler(judgeStatus.failure);
      // console.log("lapsの数がdistanceの数を超えても失敗");
    }
  }, [laps.length > playpattern.distance.length]);

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
