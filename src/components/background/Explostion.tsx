import { StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { judgeStatus, Play } from "../../types/play";
export type Props = {
  playState: Play;
};

const Explosion = ({ playState }: Props) => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    let countNum = 0;
    let counterData: number;

    if (playState.judge === judgeStatus.failure) {
      const countUp = () => {
        countNum = countNum + 1;
        setNumber(countNum);
        if (countNum >= 30) {
          setNumber(0);
          clearInterval(counterData);
        }
      };

      counterData = setInterval(countUp, 30);
    }
  }, [playState.judge === judgeStatus.failure]);

  const explosionImages = [
    require("../../assets/explosion/explosion0.png"),
    require("../../assets/explosion/explosion1.png"),
    require("../../assets/explosion/explosion2.png"),
    require("../../assets/explosion/explosion3.png"),
    require("../../assets/explosion/explosion4.png"),
    require("../../assets/explosion/explosion5.png"),
    require("../../assets/explosion/explosion6.png"),
    require("../../assets/explosion/explosion7.png"),
    require("../../assets/explosion/explosion8.png"),
    require("../../assets/explosion/explosion9.png"),
    require("../../assets/explosion/explosion10.png"),
    require("../../assets/explosion/explosion11.png"),
    require("../../assets/explosion/explosion12.png"),
    require("../../assets/explosion/explosion13.png"),
    require("../../assets/explosion/explosion14.png"),
    require("../../assets/explosion/explosion15.png"),
    require("../../assets/explosion/explosion16.png"),
    require("../../assets/explosion/explosion17.png"),
    require("../../assets/explosion/explosion18.png"),
    require("../../assets/explosion/explosion19.png"),
    require("../../assets/explosion/explosion20.png"),
    require("../../assets/explosion/explosion21.png"),
    require("../../assets/explosion/explosion22.png"),
    require("../../assets/explosion/explosion23.png"),
    require("../../assets/explosion/explosion24.png"),
    require("../../assets/explosion/explosion25.png"),
    require("../../assets/explosion/explosion26.png"),
    require("../../assets/explosion/explosion27.png"),
    require("../../assets/explosion/explosion28.png"),
    require("../../assets/explosion/explosion29.png"),
  ];

  return (
    <>
      {number !== 0  && <Image source={explosionImages[number]} style={styles.explosion} />}
    </>
  );
};

export default Explosion;

const styles = StyleSheet.create({
  explosion: {
    position: "absolute",
    width: 375,
    height: 204,
    bottom: "26%",
    alignItems: "center",
    justifyContent: "center",
  },
});
