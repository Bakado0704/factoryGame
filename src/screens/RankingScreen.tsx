import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import { useDispatch, useSelector } from "react-redux";
import { changeCenterProduct, changeFailureProduct, changeJob, changeNextProduct, changeUserNowJob, userPage } from "../store/job";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import { RootState } from "../store/store";
import { Job } from "../types/job";

function RankingScreen() {
  const Job = useSelector((state: RootState) => state.job.job);
  const nextJob = useSelector((state: RootState) => state.job.nextJob);
  const prevJob = useSelector((state: RootState) => state.job.prevJob);
  const user = useSelector((state: RootState) => state.job.user);
  
  const activeBoard = Job.boardImg;
  const maxMoney = Job.maxMoney;
  const page = user.page;
  const nextProductType = user.nextProductType;

  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const returnHandler = () => {
    dispatch(userPage("start"));
    navigation.navigate("Start");
  };

  const jobDecideHandler = (job: Job) => {
    dispatch(changeJob(job));
    dispatch(changeUserNowJob(job.name));
    if (nextProductType === "bonus") {
      dispatch(changeNextProduct(job.product.bonus));
      dispatch(changeCenterProduct(job.product.bonus));
      dispatch(changeFailureProduct(job.product.bonusFailure));
    } else {
      dispatch(changeNextProduct(job.product.default));
      dispatch(changeCenterProduct(job.product.default));
      dispatch(changeFailureProduct(job.product.defaultFailure));
    }
  };

  const rankingMove = () => {
    dispatch(userPage("ranking"));
    navigation.navigate("Ranking");
  };

  return (
    <SafeAreaView style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgRanking.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          <View style={{ flex: 1 }} />
          <NavSelect
            maxMoney={maxMoney}
            activeBoard={activeBoard}
            page={page}
            jobDecideHandler={jobDecideHandler}
            rankingMove={rankingMove}
            prevJob={prevJob}
            nextJob={nextJob}
          />
          <View style={styles.buttonContainer}>
            <ImageButton
              source={require("../assets/ui/returnButton.png")}
              onPress={returnHandler}
              style={styles.returnButton}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default RankingScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  iconContainer: {
    position: "absolute",
    width: 74,
    height: 61,
    left: "16%",
  },
  iconImg: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  returnButton: {
    width: 143,
    height: 52,
    marginBottom: 10
  },
});
