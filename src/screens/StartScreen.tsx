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
  changeCenterProduct,
  changeFailureProduct,
  changeJob,
  changeMute,
  changeNextProduct,
  changePreviewIcon,
  changeStatus,
  changeUser,
  changeUsername,
  changeUserNowJob,
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
import { Mute } from "../types/user";

const StartScreen = () => {
  const Job = useSelector((state: RootState) => state.job.job);
  const nextJob = useSelector((state: RootState) => state.job.nextJob);
  const prevJob = useSelector((state: RootState) => state.job.prevJob);
  const user = useSelector((state: RootState) => state.job.user);
  const previewIcon = useSelector((state: RootState) => state.job.previewIcon);
  const userIcons = useSelector((state: RootState) => state.job.UserIcons);
  
  const activeBoard = Job.boardImg;
  const perMoney = Job.outline.basicMoney;
  const maxMoney = Job.maxMoney;
  const page = user.page;
  const userIcon = user.icon;
  const userName = user.name;
  const userId = user.id;
  const mute = user.mute;
  const userMoney = user.money;
  const drink = user.drink;
  const drinkCost = user.drinkCost;
  const nextProductType = user.nextProductType;

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
  okButton: {
    width: 100,
    height: 100,
  },
});
