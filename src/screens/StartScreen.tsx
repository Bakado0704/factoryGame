import { View, StyleSheet } from "react-native";
import NavHead from "../components/nav/NavHeader/NavHead";
import { useState } from "react";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import NavOperation from "../components/nav/NavFooter/NavOperation";
import Setting from "../modals/SettingModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import UserIcons from "../models/userIcons";
import { RootState } from "../store/store";
import {
  changeJob,
  changePreviewIcon,
  changeStatus,
  changeUser,
  staminaReset,
  userDrink,
  userDrinkReset,
  userMoneyIncrease,
  userPage,
} from "../store/job";
import { PlayStatus } from "../types/play";
import { Job } from "../types/job";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

const StartScreen = () => {
  const Job = useSelector((state: RootState) => state.job.job);
  const nextJob = useSelector((state: RootState) => state.job.nextJob);
  const prevJob = useSelector((state: RootState) => state.job.prevJob);
  const user = useSelector((state: RootState) => state.job.user);
  const previewIcon = useSelector((state: RootState) => state.job.previewIcon);
  const userIcons = useSelector((state: RootState) => state.job.UserIcons);
  const activeBoard = Job.boardImg;
  const userIcon = user.icon;
  const userMoney = user.money;
  const drink = user.drink;
  const drinkCost = user.drinkCost;
  const perMoney = Job.outline.basicMoney;
  const page = user.page;
  const maxMoney = Job.maxMoney;
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     dispatch(changeJob(Job));
  //   });

  //   return unsubscribe;
  // }, []);

  const [setting, setSetting] = useState(false);
  const [userModal, setUserModal] = useState(false);

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

  const offUserModalHandler = () => {
    dispatch(changeUser(previewIcon));
    setUserModal(false);
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

  const jobDecideHandler = (job: Job) => {
    dispatch(changeJob(job));
  };

  const userDrinkHandler = (number: number) => {
    dispatch(userDrink(number));
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
          jobDecideHandler={jobDecideHandler}
          rankingMove={rankingMove}
          prevJob={prevJob}
          nextJob={nextJob}
        />
        <NavOperation
          onSetting={onSettingHandler}
          staminaResetHandler={staminaResetHandler}
          playingStatusHandler={playingStatusHandler}
        />
      </View>
      {setting && (
        <Setting
          drink={drink}
          drinkCost={drinkCost}
          offSetting={offSettingModalHandler}
          userDrinkHandler={userDrinkHandler}
          perMoney={perMoney}
        />
      )}
      {userModal && (
        <UserModal
          offUserModal={offUserModalHandler}
          user={userChangeHandler}
          previewIcon={previewIcon}
          userIcons={userIcons}
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
  okButton: {
    width: 100,
    height: 100,
  },
});
