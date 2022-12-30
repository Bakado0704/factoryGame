import { Image, Text, View, StyleSheet } from "react-native";

type Props = {
  nowMoney: number;
};

const NowMoney = ({ nowMoney }: Props) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>{nowMoney}</Text>
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
  moneyText: {
    fontSize: 50,
    fontFamily: "MochiyPop",
    color: "black",
    marginLeft: 8,
  },
});
