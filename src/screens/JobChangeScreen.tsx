import { View, Image, StyleSheet, Dimensions } from "react-native";
import NavJobList from "../components/nav/NavFooter/NavJobList";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import NavHead from "../components/nav/NavHeader/NavHead";
import JobModal from "../modals/JobModal";
import UserModal from "../modals/UserModal";
import Job from "../models/job";
import { Job as _Job } from "../types/job";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserIcons from "../models/userIcons";
import JobAddButton from "../components/button/JobAddButton";
import JobReturnButton from "../components/button/JobReturnButton";
import { RootState } from "../store/store";
import { page } from "../types/page";
import { Mute } from "../types/user";
import { changeMute, changePreviewIcon, changeUser, changeUsername, changeUserNowJob, userPage } from "../store/user";
import { changeJob, changePreviewJob } from "../store/job";
const { width } = Dimensions.get("window");

const JobChangeScreen = () => {
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const previewJob = useSelector((state: RootState) => state.job.previewJob);
  const previewIcon = useSelector((state: RootState) => state.user.previewIcon);
  const user = useSelector((state: RootState) => state.user.user);
  const userIcons = useSelector((state: RootState) => state.user.UserIcons);
  
  const userIcon = user.icon;
  const userName = user.name;
  const userId = user.id;
  const mute = user.mute;
  const userMoney = user.money;

  const [userModal, setUserModal] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const jobReturnHandler = () => {
    dispatch(userPage(page.start));
    navigation.navigate("Start");
  };

  const jobAddHandler = () => {
    dispatch(userPage(page.gacha));
    navigation.navigate("Gacha");
  };

  const jobModalOnHandler = (job: Job) => {
    dispatch(changePreviewJob(job));
  };

  const usernameChangeHandler = (name: string) => {
    dispatch(changeUsername(name));
  };

  const jobDecideHandler = () => {
    if (previewJob === undefined) {
      throw new Error("previewJobUndefined");
    }
    dispatch(changeJob(previewJob));
    dispatch(changeUserNowJob(previewJob.name));
  };

  const jobModalOffHandler = () => {
    dispatch(changePreviewJob(undefined));
  };

  const onUserModalHandler = () => {
    setUserModal(true);
  };

  const changeMuteHandler = (mute: Mute) => {
    dispatch(changeMute(mute));
  };

  const gachaMove = () => {
    dispatch(userPage("gacha"));
    navigation.navigate("Gacha");
  };

  const userChangeHandler = (selectedIcon: UserIcons) => {
    dispatch(changePreviewIcon(selectedIcon));
  };

  const offUserModalHandler = () => {
    dispatch(changeUser(previewIcon));
    setUserModal(false);
    if (!userName) {
      dispatch(changeUsername(userId));
    }
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
            gachaMove={gachaMove}
            user={user}
          />
        </View>
        <View style={styles.jobsContainer}>
          <NavJobList onModal={jobModalOnHandler} jobs={jobs} user={user} />
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
    height: width * 0.797,
    width: "100%",
    justifyContent: "space-between",
  },
  headContainer: {
    flex: 1,
    padding: width * 0.013,
  },
  board: {
    position: "absolute",
    height: width * 0.797,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  jobsContainer: {
    width: "100%",
  },
  buttonsContainer: {
    width: "100%",
    paddingVertical: width * 0.019,
    paddingHorizontal: width * 0.027,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});
