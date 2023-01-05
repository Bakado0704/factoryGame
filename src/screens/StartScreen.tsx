import { View, StyleSheet } from "react-native";
import NavHead from "../components/nav/NavHeader/NavHead";
import { useState } from "react";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import NavOperation from "../components/nav/NavFooter/NavOperation";
import Setting from "../modals/SettingModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import UserIcons from "../models/userIcons";
import { RootState } from '../store/store';
import {
  changeJob,
  changePreviewIcon,
  changeStatus,
  changeUser,
  staminaReset,
  userPage,
} from "../store/job";
import { PlayStatus } from "../types/play";
import { Job } from "../types/job";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { page } from "../types/page";

const StartScreen = () => {
  const Job = useSelector((state: RootState) => state.job.job);
  const nextJob = useSelector((state: RootState) => state.job.nextJob);
  const prevJob = useSelector((state: RootState) => state.job.prevJob);
  const user = useSelector((state: RootState) => state.job.user);
  const previewIcon = useSelector((state: RootState) => state.job.previewIcon);
  const activeBoard = Job.boardImg;
  const userIcon = user.icon;
  const userMoney = user.money;
  const maxMoney = Job.maxMoney;
  const [setting, setSetting] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const dispatch = useDispatch();
  const navigation:NavigationProp<ParamListBase> = useNavigation();

  // console.log(Job)

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     dispatch(changeJob(Job));
  //   });

  //   return unsubscribe;
  // }, []);

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
    dispatch(staminaReset(1.0));
  };

  const playingStatusHandler = () => {
    dispatch(changeStatus(PlayStatus.playing));
  };

  const jobDecideHandler = (job: Job) => {
    dispatch(changeJob(job));
  };

  const gachaMove = (page: page) => {
    dispatch(userPage(page));
    navigation.navigate("Gacha");
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
          jobDecideHandler={jobDecideHandler}
          prevJob={prevJob}
          nextJob={nextJob}
        />
        <NavOperation
          onSetting={onSettingHandler}
          staminaResetHandler={staminaResetHandler}
          playingStatusHandler={playingStatusHandler}
        />
      </View>
      {setting && <Setting offSetting={offSettingModalHandler} />}
      {userModal && (
        <UserModal
          offUserModal={offUserModalHandler}
          user={userChangeHandler}
          previewIcon={previewIcon}
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
