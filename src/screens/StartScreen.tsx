import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import NavHead from "../components/nav/NavHeader/NavHead";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import NavOperation from "../components/nav/NavFooter/NavOperation";
import Setting from "../modals/SettingModal";
import UserModal from "../modals/UserModal";
import UserIcons from "../models/userIcons";
import { PlayStatus } from "../types/play";
import { Mute } from "../types/user";
import { RootState } from "../store/store";
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
const { width } = Dimensions.get("window");

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
  const isFocused = useIsFocused();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [setting, setSetting] = useState(false);
  const [userModal, setUserModal] = useState(false);

  useEffect(() => {
    maxMoney = Job.maxMoney;
  }, [isFocused]);

  const PrevButtonAnim = useRef(new Animated.Value(0)).current;
  const NextButtonAnim = useRef(new Animated.Value(0)).current;
  const PrevDrinkButtonAnim = useRef(new Animated.Value(0)).current;
  const NextDrinkButtonAnim = useRef(new Animated.Value(0)).current;

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

  const userDrinkHandler = (number: number) => {
    dispatch(userDrink(number));
  };

  const changeMuteHandler = (mute: Mute) => {
    dispatch(changeMute(mute));
  };

  //画面遷移
  const gachaMove = () => {
    dispatch(userPage("gacha"));
    navigation.navigate("Gacha");
  };

  const rankingMove = () => {
    dispatch(userPage("ranking"));
    navigation.navigate("Ranking");
  };

  const jobChangeMove = () => {
    dispatch(userPage("jobChange"));
    navigation.navigate("JobChange");
  };

  const gameMove = () => {
    dispatch(changeStatus(PlayStatus.playing));
    if (userMoney <= drinkCost) {
      dispatch(userDrinkReset());
      dispatch(staminaReset(0));
    } else {
      dispatch(userMoneyIncrease(-drinkCost));
      dispatch(staminaReset(drink));
    }
    navigation.navigate("Game");
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.innerContainer}>
        <NavHead
          icon={userIcon}
          userMoney={userMoney}
          user={user}
          onUserModal={onUserModalHandler}
          gachaMove={gachaMove}
        />
        <NavSelect
          maxMoney={maxMoney}
          activeBoard={activeBoard}
          page={page}
          activeJobsLength={activeJobsLength}
          PrevButtonAnim={PrevButtonAnim}
          NextButtonAnim={NextButtonAnim}
          rankingMove={rankingMove}
          prevJobHandler={prevJobHandler}
          nextJobHandler={nextJobHandler}
        />
        <NavOperation
          onSetting={onSettingHandler}
          jobChangeMove={jobChangeMove}
          gameMove={gameMove}
        />
      </View>
      {setting && (
        <Setting
          drink={drink}
          drinkCost={drinkCost}
          perMoney={perMoney}
          PrevButtonAnim={PrevDrinkButtonAnim}
          NextButtonAnim={NextDrinkButtonAnim}
          offSetting={offSettingModalHandler}
          userDrinkHandler={userDrinkHandler}
        />
      )}
      {userModal && (
        <UserModal
          previewIcon={previewIcon}
          userIcons={userIcons}
          userName={userName}
          userId={userId}
          mute={mute}
          offUserModal={offUserModalHandler}
          userChangeHandler={userChangeHandler}
          usernameChangeHandler={usernameChangeHandler}
          changeMuteHandler={changeMuteHandler}
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
    padding: width * 0.013,
  },
});
