import { View, StyleSheet } from "react-native";
import Count from "../animation/Count";

type Props = {
  nowMoney: number;
  plusMoney: number;
};

const NowMoney = ({ nowMoney, plusMoney }: Props) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.moneyContainer}>
        <Count
          targetNum={nowMoney}
          diffNum={plusMoney}
        />
      </View>
    </View>
  );
};

export default NowMoney;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    transform: [{ translateY: -120 }],
  },
  moneyImg: {
    width: 50,
    height: 50,
  },
});
