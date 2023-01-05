import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import NavGacha from "../components/nav/NavFooter/NavGacha";
import NavHead from "../components/nav/NavHeader/NavHead";
import JobGet from "../modals/JobGetModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGachaStatus,
  changePreviewIcon,
  changeUpdateJob,
  changeUser,
  userPage,
} from "../store/job";
import UserIcons from "../models/userIcons";
import ZimuPerson from "../components/animation/ZimuPerson";
import Envelope from "../components/animation/Envelope";
import BgBlack from "../components/background/BgBlack";
import { RootState } from "../store/store";
import { page } from "../types/page";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { GachaStatus } from "../types/gacha";

function GachaScreen() {
  const userIcon = useSelector((state: RootState) => state.job.user.icon);
  const previewIcon = useSelector((state: RootState) => state.job.previewIcon);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const userIcons = useSelector((state: RootState) => state.job.UserIcons);
  //現在のplay状態
  const playState = useSelector((state: RootState) => state.job.play);
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
  const user = useSelector((state: RootState) => state.job.user);
  const userMoney = user.money;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const [userModal, setUserModal] = useState(false);

  const offModalHandler = () => {
    dispatch(changeGachaStatus(GachaStatus.stop));
    dispatch(changeUpdateJob(randomJob));
  };

  const modalSettingHandler = () => {
    dispatch(changeGachaStatus(GachaStatus.closed));
  };

  const envelopeOpenHandler = () => {
    dispatch(changeGachaStatus(GachaStatus.opened));
  };

  const resultHandler = () => {
    dispatch(changeGachaStatus(GachaStatus.result));
  };

  const userChangeHandler = (selectedIcon: UserIcons) => {
    dispatch(changePreviewIcon(selectedIcon));
  };

  const offUserModalHandler = () => {
    dispatch(changeUser(previewIcon));
    setUserModal(false);
  };

  const onUserModalHandler = () => {
    setUserModal(true);
  };

  const startMove = (page: page) => {
    dispatch(userPage(page));
    navigation.navigate("Start");
  };

  const gachaMove = (page: page) => {
    dispatch(userPage(page));
    navigation.navigate("Gacha");
  };

  //statusがclosedの場合封筒を出す
  let envelope;
  if (
    user.gachaStatus === GachaStatus.closed ||
    user.gachaStatus === GachaStatus.opened
  ) {
    envelope = (
      <>
        <BgBlack />
        <Envelope
          user={user}
          resultHandler={resultHandler}
          envelopeOpenHandler={envelopeOpenHandler}
        />
      </>
    );
  }

  //statusがresultの場合モーダルを出す
  let result;
  if (user.gachaStatus === GachaStatus.result) {
    result = (
      <>
        <BgBlack />
        <JobGet job={randomJob} offModal={offModalHandler} />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgGacha.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          <NavHead
            icon={userIcon}
            onUserModal={onUserModalHandler}
            userMoney={userMoney}
            gachaMove={gachaMove}
            user={user}
          />
          <NavGacha onModal={modalSettingHandler} startMove={startMove} />
          <ZimuPerson />
        </View>
        {envelope}
        {result}
        {userModal && (
          <UserModal
            offUserModal={offUserModalHandler}
            user={userChangeHandler}
            previewIcon={previewIcon}
            userIcons={userIcons}
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