import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import NavGacha from "../components/nav/NavFooter/NavGacha";
import NavHead from "../components/nav/NavHeader/NavHead";
import JobGet from "../modals/JobGetModal";
import UserModal from "../modals/UserModal";
import { Job } from "../types/job";
import { useDispatch, useSelector } from "react-redux";
import { changePreviewIcon, changeUpdateJob, changeUser } from "../store/job";
import UserIcons from "../models/userIcons";
import ZimuPerson from "../components/animation/ZimuPerson";
import Envelope from "../components/animation/Envelope";
import BgBlack from "../components/ui/BgBlack";

function GachaScreen() {
  const userIcon = useSelector((state) => state.job.user.icon);
  const previewIcon = useSelector((state) => state.job.previewIcon);
  const jobs = useSelector((state) => state.job.jobs);
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];

  const dispatch = useDispatch();

  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [envelopeSetting, setEnvelopeSetting] = useState(false);
  const [gachaIsSetted, setGachaIsSetted] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const modalSettingHandler = () => {
    setModalIsSetting(true);
    setEnvelopeSetting(true);
  };

  const jobUpdate = (gachaJob: Job) => {
    dispatch(changeUpdateJob(gachaJob));
  };

  const offModalHandler = () => {
    setModalIsSetting(false);
    setGachaIsSetted(false);
  };

  const onUserModalHandler = () => {
    setUserModal(true);
  };

  const gachaSettingHandler = () => {
    setGachaIsSetted(true);
  };

  const userChangeHandler = (selectedIcon: UserIcons) => {
    dispatch(changePreviewIcon(selectedIcon));
  };

  const offUserModalHandler = () => {
    dispatch(changeUser(previewIcon));
    setUserModal(false);
  };

  return (
    <SafeAreaView style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgGacha.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          <NavHead icon={userIcon} onUserModal={onUserModalHandler} />
          <NavGacha onModal={modalSettingHandler} />
          <ZimuPerson />
        </View>
        {modalIsSetting && <BgBlack />}
        {modalIsSetting && (
          <Envelope
            envelopeSetting={envelopeSetting}
            setEnvelopeSetting={setEnvelopeSetting}
            gachaSettingHandler={gachaSettingHandler}
          />
        )}
        {modalIsSetting && gachaIsSetted && (
          <JobGet
            job={randomJob}
            offModal={offModalHandler}
            jobUpdate={jobUpdate}
          />
        )}
        {userModal && (
          <UserModal
            offUserModal={offUserModalHandler}
            user={userChangeHandler}
            previewIcon={previewIcon}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

export default GachaScreen;

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
});
