import { useRef, useEffect } from "react";
import { StyleSheet, Animated, Dimensions } from "react-native";
import { judgeStatus, Play } from "../../types/play";
const { width } = Dimensions.get("window");

type Props = {
  playState: Play;
  delay: number;
  combo:number;
  allowCombo: number;
};

const Coin = ({ playState, delay, combo, allowCombo }: Props) => {
  const CoinAnim = useRef(new Animated.Value(0)).current;

  const coinTranslateY = CoinAnim.interpolate({
    inputRange: [0, 50, 75, 100, 125, 150, 175, 200],
    outputRange: [0, -width * 0.267, -width * 0.293, -width * 0.309, -width * 0.304, -width * 0.288, -width * 0.245, -width * 0.147],
  });

  const coinOpacity1 = CoinAnim.interpolate({
    inputRange: [0, 10, 11, 80, 81, 90, 91, 160, 161, 170, 171, 200],
    outputRange: [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity2 = CoinAnim.interpolate({
    inputRange: [0, 10, 11, 20, 21, 90, 91, 100, 101, 170, 171, 180, 181, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity3 = CoinAnim.interpolate({
    inputRange: [
      0, 20, 21, 30, 31, 100, 101, 110, 111, 180, 181, 190, 191, 200,
    ],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity4 = CoinAnim.interpolate({
    inputRange: [0, 30, 31, 40, 41, 110, 111, 120, 121, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity5 = CoinAnim.interpolate({
    inputRange: [0, 40, 41, 50, 51, 120, 121, 130, 131, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity6 = CoinAnim.interpolate({
    inputRange: [0, 50, 51, 60, 61, 130, 131, 140, 141, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity7 = CoinAnim.interpolate({
    inputRange: [0, 60, 61, 70, 71, 140, 141, 150, 151, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });
  const coinOpacity8 = CoinAnim.interpolate({
    inputRange: [0, 70, 71, 80, 81, 150, 151, 160, 161, 200],
    outputRange: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  });

  //successかfailureになったときアニメーション動かす
  useEffect(() => {
    if (playState.judge === judgeStatus.success && combo >= allowCombo) {
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(CoinAnim, {
          toValue: 200,
          duration: 600,
          useNativeDriver: false,
        }),
      ]).start();
      setTimeout(() => {
        CoinAnim.setValue(0);
      }, 600 + delay);
    }
  }, [playState.judge === judgeStatus.success]);

  return (
    <Animated.View
      style={[
        styles.coinContainer,
        { transform: [{ translateY: coinTranslateY }] },
      ]}
    >
      <Animated.Image
        source={require("../../assets/ui/money1.png")}
        style={[styles.coin, { opacity: coinOpacity1 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money2.png")}
        style={[styles.coin, { opacity: coinOpacity2 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money3.png")}
        style={[styles.coin, { opacity: coinOpacity3 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money4.png")}
        style={[styles.coin, { opacity: coinOpacity4 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money5.png")}
        style={[styles.coin, { opacity: coinOpacity5 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money6.png")}
        style={[styles.coin, { opacity: coinOpacity6 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money7.png")}
        style={[styles.coin, { opacity: coinOpacity7 }]}
      />
      <Animated.Image
        source={require("../../assets/ui/money8.png")}
        style={[styles.coin, { opacity: coinOpacity8 }]}
      />
    </Animated.View>
  );
};

export default Coin;

const styles = StyleSheet.create({
  coinContainer: {
    position: "absolute",
    bottom: "42%",
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    position: "absolute",
    width: width * 0.08,
    height: width * 0.08,
  },
});