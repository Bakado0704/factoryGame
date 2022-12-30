import { View, Image, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import BoardImg from "../../typeui/BoardImg";
import RankingButton from "../../animation/animationButton/RankingButton";
import NextButton from "../../animation/animationButton/NextButton";
import PrevButton from "../../animation/animationButton/PrevButton";
import { useNavigation } from "@react-navigation/native";

type Props = {
  maxMoney: number;
};

const NavBody = ({ maxMoney }: Props) => {
  const activeBoard = useSelector((state) => state.job.job.boardImg);

  const navigation = useNavigation();

  const pressHandler = () => {};

  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerTop}>
        <PrevButton pressHandler={pressHandler} />
        <BoardImg type={activeBoard} />
        <NextButton pressHandler={pressHandler} />
      </View>
      <View style={styles.containerBottom}>
        <RankingButton pressHandler={pressHandler} />
        <Image
          source={require("../../../assets/ui/rankingCoron.png")}
          style={styles.coron}
        />
        <Image
          source={require("../../../assets/ui/money1.png")}
          style={styles.moneyImg}
        />
        <Text style={styles.money}>{maxMoney}</Text>
      </View>
    </View>
  );
};

export default NavBody;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  prevButton: {
    width: 25,
    height: 70,
  },
  nextButton: {
    width: 25,
    height: 70,
  },
  coron: {
    width: 7,
    height: 25,
    marginHorizontal: 10,
  },
  moneyImg: {
    width: 33,
    height: 33,
    padding: 14,
  },
  money: {
    fontSize: 20,
    fontFamily: "MochiyPop",
    marginHorizontal: 7,
  },
});
