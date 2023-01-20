import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Colors from "../../constants/color";
import { judgeStatus, Play } from "../../types/play";
import JudgeLightSuccess from "../animation/JudgeLightSuccess";

type Props = {
  playState: Play;
};

const NavGame = ({ playState }: Props) => {
  const [judgeLight, setJudgeLight] = useState<JSX.Element>();
  //デフォルトの場合
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      setJudgeLight(undefined);
    }
  }, [playState.judge === judgeStatus.waiting]);

  //judgeが成功の時
  useEffect(() => {
    if (playState.judge === judgeStatus.success) {
      setJudgeLight(<JudgeLightSuccess />);
    }
  }, [playState.judge === judgeStatus.success]);

  //judgeが失敗の時
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      setJudgeLight(
        <Image
          source={require("../../assets/ui/judgeFalse.png")}
          style={styles.judge}
        />
      );
    }
  }, [playState.judge === judgeStatus.failure]);

  const length = Math.floor((playState.stamina / 300) * 51);

  return (
    <View style={styles.innerContainer}>
      <View style={[styles.stamina, { width: length }]} />
      <Image
        source={require("../../assets/ui/judgeOff.png")}
        style={styles.judge}
      />
      {judgeLight}
      <Image
        source={require("../../assets/ui/playBoardTop.png")}
        style={styles.board}
      />
    </View>
  );
};

export default NavGame;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    height: 100,
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: 74,
    left: 0,
  },
  judge: {
    position: "absolute",
    height: 23,
    width: 23,
    bottom: 69,
    right: 56,
  },
  board: {
    position: "absolute",
    height: 100,
    width: "100%",
    top: 0,
    left: 0,
  },
  stamina: {
    height: 17,
    backgroundColor: Colors.stamina,
    position: "absolute",
    bottom: 72,
    left: 235,
  },
});
