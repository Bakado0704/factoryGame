import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import React, { useState, useRef } from "react";
import ImageButton from "../components/button/ImageButton";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import { RootState } from "../store/store";
import { Job } from "../types/job";
import { changeUserNowJob, userPage } from "../store/user";
import { changeJob } from "../store/job";

function RankingScreen() {
  const Job = useSelector((state: RootState) => state.job.job);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const nextJob = useSelector((state: RootState) => state.job.nextJob);
  const prevJob = useSelector((state: RootState) => state.job.prevJob);
  const user = useSelector((state: RootState) => state.user.user);

  const activeJobs = jobs.filter(function (element) {
    return element.isActive === true;
  });
  const activeJobsLength = activeJobs.length;

  const activeBoard = Job.boardImg;
  const maxMoney = Job.maxMoney;
  const page = user.page;

  const [rankingFlag, setRankingFlag] = useState(false);
  const [nextFlag, setNextFlag] = useState(false);
  const [prevFlag, setPrevFlag] = useState(false);

  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const returnHandler = () => {
    dispatch(userPage("start"));
    navigation.navigate("Start");
  };

  const jobDecideHandler = (job: Job) => {
    dispatch(changeJob(job));
    dispatch(changeUserNowJob(job.name));
  };

  const prevJobHandler = () => {
    jobDecideHandler(prevJob);
  };

  const nextJobHandler = () => {
    jobDecideHandler(nextJob);
  };

  const rankingPressInHandler = () => {
    setRankingFlag(true);
  };

  const rankingPressOutHandler = () => {
    setRankingFlag(false);
  };

  const PrevButtonAnim = useRef(new Animated.Value(0)).current;
  const NextButtonAnim = useRef(new Animated.Value(0)).current;

  const nextPressInHandler = () => {
    setNextFlag(true);
    Animated.timing(NextButtonAnim, {
      toValue: 100,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const nextPressOutHandler = () => {
    setNextFlag(false);
    NextButtonAnim.setValue(0);
  };

  const prevPressInHandler = () => {
    setPrevFlag(true);
    Animated.timing(PrevButtonAnim, {
      toValue: 100,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const prevPressOutHandler = () => {
    setPrevFlag(false);
    PrevButtonAnim.setValue(0);
  };
  const rankingMove = () => {
    dispatch(userPage("ranking"));
    navigation.navigate("Ranking");
  };

  return (
    <SafeAreaView style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgRanking.png")}
        resizeMode="stretch"
        style={styles.bgScreen}
      >
        <View style={styles.innerContainer}>
          <View style={{ flex: 1 }} />
          <NavSelect
            maxMoney={maxMoney}
            activeBoard={activeBoard}
            page={page}
            rankingMove={rankingMove}
            activeJobsLength={activeJobsLength}
            rankingFlag={rankingFlag}
            nextFlag={nextFlag}
            prevFlag={prevFlag}
            prevJobHandler={prevJobHandler}
            nextJobHandler={nextJobHandler}
            rankingPressInHandler={rankingPressInHandler}
            rankingPressOutHandler={rankingPressOutHandler}
            prevPressInHandler={prevPressInHandler}
            prevPressOutHandler={prevPressOutHandler}
            nextPressInHandler={nextPressInHandler}
            nextPressOutHandler={nextPressOutHandler}
            PrevButtonAnim={PrevButtonAnim}
            NextButtonAnim={NextButtonAnim}
          />
          <View style={styles.buttonContainer}>
            <ImageButton
              source={require("../assets/ui/returnButton.png")}
              onPress={returnHandler}
              style={styles.returnButton}
              padding={5}
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
  bgScreen: {
    flex: 1,
    padding: 8,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
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
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    flex: 4,
  },
  returnButton: {
    width: 143,
    height: 52,
  },
});
