import { View, StyleSheet } from "react-native";
import NavHead from "../components/nav/NavHeader/NavHead";
import { useState, useEffect } from "react";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import NavOperation from "../components/nav/NavFooter/NavOperation";
import Setting from "../modals/SettingModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import UserIcons from "../models/userIcons";
import {
  changeJob,
  changePreviewIcon,
  changeStatus,
  changeUser,
  staminaReset,
} from "../store/job";
import { PlayStatus } from "../types/play";
import { Job } from "../types/job";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const Job = useSelector((state) => state.job.job);
  const Jobs: Job[] = useSelector((state) => state.job.jobs);
  //changeJobRecordに渡すための現在のJob
  const nowJob = Jobs.find((job: Job) => job.id === Job.id);
  const User = useSelector((state) => state.job.user);
  const previewIcon = useSelector((state) => state.job.previewIcon);
  const activeBoard = Job.boardImg;
  const userIcon = User.icon;
  const userMoney = User.money;
  const maxMoney = Job.maxMoney;
  const [setting, setSetting] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const activeJobs = Jobs.filter(function (element) {
    return element.isActive === true;
  });

  if (nowJob === undefined) {
    throw new Error("jobUndefined");
  }

  const navigation = useNavigation();

  let nextJobNumber = activeJobs.indexOf(nowJob) + 1;
  let prevJobNumber = activeJobs.indexOf(nowJob) - 1;

  let nextJob = activeJobs[nextJobNumber];
  let prevJob = activeJobs[prevJobNumber];

  if (nextJobNumber === activeJobs.length) {
    nextJob = activeJobs[0];
  }

  if (prevJobNumber === -1) {
    prevJob = activeJobs[activeJobs.length - 1];
  }
  

  const dispatch = useDispatch();

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

  return (
    <View style={styles.rootScreen}>
      <View style={styles.innerContainer}>
        <NavHead
          icon={userIcon}
          onUserModal={onUserModalHandler}
          userMoney={userMoney}
        />
        <NavSelect
          maxMoney={maxMoney}
          activeBoard={activeBoard}
          nextJob={nextJob}
          prevJob={prevJob}
          jobDecideHandler={jobDecideHandler}
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
