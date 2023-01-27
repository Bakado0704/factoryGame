import { useEffect, useRef, useState } from "react";
import { View, Image, StyleSheet, Dimensions, Animated } from "react-native";
import Colors from "../../constants/color";
import { judgeStatus, Play } from "../../types/play";
const { width } = Dimensions.get("window");

type Props = {
  playState: Play;
};

const NavGame = ({ playState }: Props) => {
  const [failureOpacity, setFailureOpacity] = useState(0);
  const LightAnim = useRef(new Animated.Value(0)).current;
  const lightOpacity = LightAnim.interpolate({
    inputRange: [0, 1, 70, 71, 100],
    outputRange: [0, 1, 1, 0, 0],
  });
  //デフォルトの場合
  useEffect(() => {
    if (playState.judge === judgeStatus.waiting) {
      LightAnim.setValue(0);
      setFailureOpacity(0);
    }
  }, [playState.judge === judgeStatus.waiting]);

  //judgeが成功の時
  useEffect(() => {
    if (playState.judge === judgeStatus.success) {
      Animated.loop(
        Animated.timing(LightAnim, {
          toValue: 100,
          duration: 200,
          useNativeDriver: false,
        })
      ).start();
    }
  }, [playState.judge === judgeStatus.success]);

  //judgeが失敗の時
  useEffect(() => {
    if (playState.judge === judgeStatus.failure) {
      setFailureOpacity(1);
    }
  }, [playState.judge === judgeStatus.failure]);

  const length = Math.floor((playState.stamina / 300) * width * 0.136);

  return (
    <View style={styles.innerContainer}>
      <View style={[styles.stamina, { width: length }]} />
      <Image
        source={require("../../assets/ui/judgeOff.png")}
        style={styles.judge}
      />
      <Image
        source={require("../../assets/ui/judgeFalse.png")}
        style={[styles.judge, { opacity: failureOpacity }]}
      />
      <Animated.Image
        source={require("../../assets/ui/judgeSuccess.png")}
        style={[styles.judge, { opacity: lightOpacity }]}
      />
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
    height: width * 0.267,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: width * 0.197,
    left: 0,
  },
  judge: {
    position: "absolute",
    height: width * 0.061,
    width: width * 0.061,
    bottom: "69%",
    right: width * 0.149,
  },
  board: {
    position: "absolute",
    height: width * 0.267,
    width: "100%",
    top: 0,
    left: 0,
  },
  stamina: {
    height: width * 0.045,
    backgroundColor: Colors.stamina,
    position: "absolute",
    bottom: "72%",
    left: width * 0.627,
  },
});
