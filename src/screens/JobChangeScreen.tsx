import { View, Image, StyleSheet } from "react-native";
import NavJobList from "../components/nav/NavFooter/NavJobList";
import { useNavigation } from "@react-navigation/native";
import NavHead from "../components/nav/NavHeader/NavHead";
import JobModal from "../modals/JobModal";
import UserModal from "../modals/UserModal";
import Job from "../models/job";
import { Job as _Job } from "../types/job";
import { useDispatch, useSelector } from "react-redux";
import {
  changeJob,
  changePreviewIcon,
  changePreviewJob,
  changeUser,
  userMoneyIncrease,
} from "../store/job";
import { useState } from "react";
import UserIcons from "../models/userIcons";
import JobAddButton from "../components/animation/animationButton/JobAddButton";
import JobReturnButton from "../components/animation/animationButton/JobReturnButton";

const JobChangeScreen = () => {
  const jobs = useSelector((state) => state.job.jobs);
  const previewJob = useSelector((state) => state.job.previewJob);
  const previewIcon = useSelector((state) => state.job.previewIcon);
  const User = useSelector((state) => state.job.user);
  const userIcon = User.icon;
  const userMoney = User.money;

  const [userModal, setUserModal] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const jobReturnHandler = () => {
    navigation.navigate("Start");
  };

  const jobAddHandler = () => {
    navigation.navigate("Gacha");
  };

  const jobModalOnHandler = (job: Job) => {
    dispatch(changePreviewJob(job));
  };

  const jobDecideHandler = () => {
    dispatch(changeJob(previewJob));
  };

  const jobModalOffHandler = () => {
    dispatch(changePreviewJob(undefined));
  };

  const onUserModalHandler = () => {
    setUserModal(true);
  };

  const userChangeHandler = (selectedIcon: UserIcons) => {
    dispatch(changePreviewIcon(selectedIcon));
  };

  const offUserModalHandler = () => {
    dispatch(changeUser(previewIcon));
    setUserModal(false);
  };

  return (
    <View style={styles.rootScreen}>
      <Image
        source={require("../assets/ui/boardJobChange.png")}
        style={styles.board}
      />
      <View style={styles.innerContainer}>
        <View style={styles.headContainer}>
          <NavHead
            icon={userIcon}
            onUserModal={onUserModalHandler}
            userMoney={userMoney}
          />
        </View>
        <View style={styles.jobsContainer}>
          <NavJobList onModal={jobModalOnHandler} jobs={jobs} user={User} />
        </View>
        <View style={styles.buttonsContainer}>
          <JobReturnButton jobReturnHandler={jobReturnHandler} />
          <JobAddButton jobAddHandler={jobAddHandler} />
        </View>
        {previewJob && (
          <JobModal
            jobDecide={jobDecideHandler}
            offModal={jobModalOffHandler}
            outline={previewJob.outline}
            owner={previewJob.owner}
            icon={previewJob.icon}
          />
        )}
        {userModal && (
          <UserModal
            offUserModal={offUserModalHandler}
            user={userChangeHandler}
            previewIcon={previewIcon}
          />
        )}
      </View>
    </View>
  );
};

export default JobChangeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "space-between",
  },
  innerContainer: {
    flex: 1,
    height: 299,
    width: "100%",
    justifyContent: "space-between",
  },
  headContainer: {
    flex: 1,
    padding: 8,
  },
  board: {
    position: "absolute",
    height: 299,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  jobsContainer: {
    width: "100%",
  },
  buttonsContainer: {
    width: "100%",
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  returnButton: {
    width: 100,
    height: 32,
  },
  gachaButton: {
    width: 100,
    height: 32,
  },
});
