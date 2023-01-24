import { View, StyleSheet, Animated, Easing } from "react-native";
import NavHead from "../components/nav/NavHeader/NavHead";
import { useState } from "react";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import NavOperation from "../components/nav/NavFooter/NavOperation";
import Setting from "../modals/SettingModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import UserIcons from "../models/userIcons";
import { RootState } from "../store/store";
import { PlayStatus } from "../types/play";
import { Job } from "../types/job";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import { Mute } from "../types/user";
import {
  changeMute,
  changePreviewIcon,
  changeUser,
  changeUsername,
  changeUserNowJob,
  userDrink,
  userDrinkReset,
  userMoneyIncrease,
  userPage,
} from "../store/user";
import { changeStatus, staminaReset } from "../store/play";
import { changeJob } from "../store/job";

const StartScreen = () => {
  const Job = useSelector((state: RootState) => state.job.job);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const nextJob = useSelector((state: RootState) => state.job.nextJob);
  const prevJob = useSelector((state: RootState) => state.job.prevJob);
  const user = useSelector((state: RootState) => state.user.user);
  const previewIcon = useSelector((state: RootState) => state.user.previewIcon);
  const userIcons = useSelector((state: RootState) => state.user.UserIcons);

  const activeBoard = Job.boardImg;
  const perMoney = Job.outline.basicMoney;
  let maxMoney = Job.maxMoney;
  const page = user.page;
  const userIcon = user.icon;
  const userName = user.name;
  const userId = user.id;
  const mute = user.mute;
  const userMoney = user.money;
  const drink = user.drink;
  const drinkCost = user.drinkCost;
  const activeJobs = jobs.filter(function (element) {
    return element.isActive === true;
  });
  const activeJobsLength = activeJobs.length;

  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [setting, setSetting] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const isFocused = useIsFocused();
  //ボタンのtrue,false
  const [rankingFlag, setRankingFlag] = useState(false);
  const [nextFlag, setNextFlag] = useState(false);
  const [prevFlag, setPrevFlag] = useState(false);
  const [nextDrinkFlag, setNextDrinkFlag] = useState(false);
  const [prevDrinkFlag, setPrevDrinkFlag] = useState(false);
  const [drinkFlag, setDrinkFlag] = useState(false);
  const [startFlag, setStartFlag] = useState(false);
  const [jobFlag, setJobFlag] = useState(false);
  const [gachaFlag, setGachaFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(false);

  useEffect(() => {
    maxMoney = Job.maxMoney;
    setRankingFlag(false);
    setStartFlag(false);
    setDrinkFlag(false);
    setJobFlag(false);
  }, [isFocused]);

  const PrevButtonAnim = useRef(new Animated.Value(0)).current;
  const NextButtonAnim = useRef(new Animated.Value(0)).current;
  const PrevDrinkButtonAnim = useRef(new Animated.Value(0)).current;
  const NextDrinkButtonAnim = useRef(new Animated.Value(0)).current;

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

  const rankingPressInHandler = () => {
    setRankingFlag(true);
  };

  const rankingPressOutHandler = () => {
    setRankingFlag(false);
  };

  const prevJobHandler = () => {
    dispatch(changeJob(prevJob));
    dispatch(changeUserNowJob(prevJob.name));
  };

  const nextJobHandler = () => {
    dispatch(changeJob(nextJob));
    dispatch(changeUserNowJob(nextJob.name));
  };

  const onSettingHandler = () => {
    setSetting(true);
  };

  const onUserModalHandler = () => {
    setUserModal(true);
  };

  const offSettingModalHandler = () => {
    setSetting(false);
  };

  const userChangeHandler = (selectedIcon: UserIcons) => {
    dispatch(changePreviewIcon(selectedIcon));
  };

  const usernameChangeHandler = (name: string) => {
    dispatch(changeUsername(name));
  };

  const offUserModalHandler = () => {
    dispatch(changeUser(previewIcon));
    setUserModal(false);
    if (!userName) {
      dispatch(changeUsername(userId));
    }
  };

  const staminaResetHandler = () => {
    if (userMoney <= drinkCost) {
      dispatch(userDrinkReset());
      dispatch(staminaReset(0));
    } else {
      dispatch(userMoneyIncrease(-drinkCost));
      dispatch(staminaReset(drink));
    }
  };

  const playingStatusHandler = () => {
    dispatch(changeStatus(PlayStatus.playing));
  };

  const drinkNextPressInHandler = () => {
    setNextDrinkFlag(true);
    Animated.timing(NextDrinkButtonAnim, {
      toValue: 100,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const drinkNextPressOutHandler = () => {
    setNextDrinkFlag(false);
    NextDrinkButtonAnim.setValue(0);
  };

  const drinkPrevPressInHandler = () => {
    setPrevDrinkFlag(true);
    Animated.timing(PrevDrinkButtonAnim, {
      toValue: 100,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const drinkPrevPressOutHandler = () => {
    setPrevDrinkFlag(false);
    PrevDrinkButtonAnim.setValue(0);
  };

  const drinkPressInHandler = () => {
    setDrinkFlag(true);
  };

  const drinkPressOutHandler = () => {
    setDrinkFlag(false);
  };

  const startPressInHandler = () => {
    setStartFlag(true);
  };

  const startPressOutHandler = () => {
    setStartFlag(false);
  };

  const jobPressInHandler = () => {
    setJobFlag(true);
  };

  const jobPressOutHandler = () => {
    setJobFlag(false);
  };

  const userDrinkHandler = (number: number) => {
    dispatch(userDrink(number));
  };

  const changeMuteHandler = (mute: Mute) => {
    dispatch(changeMute(mute));
  };

  const gachaMove = () => {
    dispatch(userPage("gacha"));
    navigation.navigate("Gacha");
  };

  const rankingMove = () => {
    dispatch(userPage("ranking"));
    navigation.navigate("Ranking");
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.innerContainer}>
        <NavHead
          icon={userIcon}
          onUserModal={onUserModalHandler}
          userMoney={userMoney}
          user={user}
          gachaMove={gachaMove}
        />
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
        <NavOperation
          onSetting={onSettingHandler}
          staminaResetHandler={staminaResetHandler}
          playingStatusHandler={playingStatusHandler}
          startPressInHandler={startPressInHandler}
          startPressOutHandler={startPressOutHandler}
          jobPressInHandler={jobPressInHandler}
          jobPressOutHandler={jobPressOutHandler}
          drinkPressInHandler={drinkPressInHandler}
          drinkPressOutHandler={drinkPressOutHandler}
          drinkFlag={drinkFlag}
          startFlag={startFlag}
          jobFlag={jobFlag}
        />
      </View>
      {setting && (
        <Setting
          drink={drink}
          drinkCost={drinkCost}
          offSetting={offSettingModalHandler}
          userDrinkHandler={userDrinkHandler}
          perMoney={perMoney}
          nextFlag={nextDrinkFlag}
          prevFlag={prevDrinkFlag}
          PrevButtonAnim={PrevDrinkButtonAnim}
          NextButtonAnim={NextDrinkButtonAnim}
          prevPressInHandler={drinkPrevPressInHandler}
          prevPressOutHandler={drinkPrevPressOutHandler}
          nextPressInHandler={drinkNextPressInHandler}
          nextPressOutHandler={drinkNextPressOutHandler}
        />
      )}
      {userModal && (
        <UserModal
          offUserModal={offUserModalHandler}
          userChangeHandler={userChangeHandler}
          usernameChangeHandler={usernameChangeHandler}
          changeMuteHandler={changeMuteHandler}
          previewIcon={previewIcon}
          userIcons={userIcons}
          userName={userName}
          userId={userId}
          mute={mute}
        />
      )}
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    padding: 8,
  },
});
