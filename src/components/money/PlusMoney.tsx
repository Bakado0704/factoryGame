import { useRef, useEffect } from "react";
import { StyleSheet, Animated, Dimensions } from "react-native";
import Colors from "../../constants/color";
import { judgeStatus, Play } from "../../types/play";
import { productType } from "../../types/product";
import { ShadowText } from "../text/ShadowText";
const { width } = Dimensions.get("window");

type Props = {
  playState: Play;
  plusMoney: number;
  productType: productType;
};

const PlusMoney = ({ playState, plusMoney, productType }: Props) => {
  const MoneyAnim = useRef(new Animated.Value(0)).current;

  const moneyTranslateY = MoneyAnim.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -width * 0.053],
  });

  const moneyOpacity = MoneyAnim.interpolate({
    inputRange: [0, 20, 180, 200],
    outputRange: [0, 1, 1, 0],
  });

  let textColor = "white";
  if (productType === "bonus") {
    textColor = Colors.textYellowColor;
  }

  //successかfailureになったときアニメーション動かす
  useEffect(() => {
    if (playState.judge === judgeStatus.success) {
      Animated.sequence([
        Animated.timing(MoneyAnim, {
          toValue: 200,
          duration: 800,
          useNativeDriver: false,
        }),
      ]).start();
      setTimeout(() => {
        MoneyAnim.setValue(0);
      }, 800);
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
      <ShadowText color={textColor} size={width * 0.053}>
        +{plusMoney}
      </ShadowText>
    </Animated.View>
  );
};

export default PlusMoney;

const styles = StyleSheet.create({
  moneyContainer: {
    position: "absolute",
    bottom: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    position: "absolute",
    width: width * 0.08,
    height: width * 0.08,
  },
});
