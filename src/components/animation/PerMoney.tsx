import { useRef, useEffect } from "react";
import { StyleSheet, Animated } from "react-native";
import { judgeStatus, Play } from "../../types/play";
import { ShadowText } from "../text/ShadowText";

type Props = {
  playState: Play;
  perMoney: number;
};

const PerMoney = ({ playState, perMoney }: Props) => {
  const MoneyAnim = useRef(new Animated.Value(0)).current;

  const moneyTranslateY = MoneyAnim.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -100],
  });

  const moneyOpacity = MoneyAnim.interpolate({
    inputRange: [0, 30, 170, 200],
    outputRange: [0, 1, 1, 0],
  });

  //successかfailureになったときアニメーション動かす
  useEffect(() => {
    if (playState.judge === judgeStatus.success) {
      Animated.sequence([
        Animated.timing(MoneyAnim, {
          toValue: 200,
          duration: 600,
          useNativeDriver: false,
        }),
      ]).start();
      setTimeout(() => {
        MoneyAnim.setValue(0);
      }, 600);
    }
  }, [playState.judge === judgeStatus.success]);

  return (
    <Animated.View
      style={[
        styles.moneyContainer,
        { transform: [{ translateY: moneyTranslateY }] },
        { opacity: moneyOpacity },
      ]}
    >
      <ShadowText color="white" size={24}>
        +{perMoney}
      </ShadowText>
    </Animated.View>
  );
};

export default PerMoney;

const styles = StyleSheet.create({
  moneyContainer: {
    position: "absolute",
    bottom: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    position: "absolute",
    width: 30,
    height: 30,
  },
});
