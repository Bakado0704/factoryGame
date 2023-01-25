import { View, Image, StyleSheet, Animated, Easing } from "react-native";
import BoardImg from "../../background/BoardImg";
import RankingButton from "../../button/RankingButton";
import NextButton from "../../button/NextButton";
import PrevButton from "../../button/PrevButton";
import { JobType } from "../../../types/job";
import { page } from "../../../types/page";
import { ShadowText } from "../../text/ShadowText";
import { useRef, useEffect } from "react";

type Props = {
  maxMoney: number;
  activeBoard: JobType;
  page: page;
  activeJobsLength: number;
  PrevButtonAnim: Animated.Value;
  NextButtonAnim: Animated.Value;
  prevJobHandler: () => void;
  nextJobHandler: () => void;
  rankingMove: () => void;
};

const NavSelect = ({
  maxMoney,
  activeBoard,
  page,
  activeJobsLength,
  PrevButtonAnim,
  NextButtonAnim,
  prevJobHandler,
  nextJobHandler,
  rankingMove,
}: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(ButtonAnim, {
        toValue: 400,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerTop}>
        {activeJobsLength === 1 && (
          <Image
            source={require("../../../assets/ui/prevButtonStop.png")}
            style={styles.button}
          />
        )}
        {activeJobsLength !== 1 && (
          <PrevButton
            pressHandler={prevJobHandler}
            ButtonAnim={ButtonAnim}
            PrevButtonAnim={PrevButtonAnim}
          />
        )}
        <BoardImg type={activeBoard} />
        {activeJobsLength !== 1 && (
          <NextButton
            pressHandler={nextJobHandler}
            ButtonAnim={ButtonAnim}
            NextButtonAnim={NextButtonAnim}
          />
        )}
        {activeJobsLength === 1 && (
          <Image
            source={require("../../../assets/ui/nextButtonStop.png")}
            style={styles.button}
          />
        )}
      </View>
      {page !== "ranking" && (
        <View style={styles.containerBottom}>
          <RankingButton
            rankingPressHandler={rankingMove}
            ButtonAnim={ButtonAnim}
          />
          <Image
            source={require("../../../assets/ui/rankingCoron.png")}
            style={styles.coron}
          />
          <Image
            source={require("../../../assets/ui/money1.png")}
            style={styles.moneyImg}
          />
          <ShadowText size={20} color="white">
            {new Intl.NumberFormat().format(maxMoney)}
          </ShadowText>
        </View>
      )}
    </View>
  );
};

export default NavSelect;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    transform: [{ translateY: -10 }],
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
  },
  coron: {
    width: 7,
    height: 25,
    marginHorizontal: 5,
  },
  button: {
    width: 25,
    height: 70,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  moneyImg: {
    width: 33,
    height: 33,
    marginHorizontal: 5,
  },
});
