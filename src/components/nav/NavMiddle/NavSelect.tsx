import { View, Image, Text, StyleSheet } from "react-native";
import BoardImg from "../../background/BoardImg";
import RankingButton from "../../animation/animationButton/RankingButton";
import NextButton from "../../animation/animationButton/NextButton";
import PrevButton from "../../animation/animationButton/PrevButton";
import { Job, JobType } from "../../../types/job";
import { page } from "../../../types/page";
import { ShadowText } from "../../text/ShadowText";

type Props = {
  maxMoney: number;
  activeBoard: JobType;
  page: page;
  prevJob: Job;
  nextJob: Job;
  activeJobsLength: number;
  jobDecideHandler: (job: Job) => void;
  rankingMove: () => void;
};

const NavSelect = ({
  maxMoney,
  activeBoard,
  prevJob,
  nextJob,
  page,
  activeJobsLength,
  jobDecideHandler,
  rankingMove,
}: Props) => {
  const prevHandler = () => {
    jobDecideHandler(prevJob);
  };

  const nextHandler = () => {
    jobDecideHandler(nextJob);
  };

  const pressHandler = () => {
    rankingMove();
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerTop}>
        {activeJobsLength === 1 && (
          <Image
            source={require("../../../assets/ui/prevButtonStop.png")}
            style={styles.button}
          />
        )}
        {activeJobsLength !== 1 && <PrevButton pressHandler={prevHandler} />}
        <BoardImg type={activeBoard} />
        {activeJobsLength !== 1 && <NextButton pressHandler={nextHandler} />}
        {activeJobsLength === 1 &&
          <Image
            source={require("../../../assets/ui/nextButtonStop.png")}
            style={styles.button}
          />
        }
      </View>
      {page !== "ranking" && (
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
