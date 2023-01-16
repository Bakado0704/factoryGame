import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import NavGacha from "../components/nav/NavFooter/NavGacha";
import NavHead from "../components/nav/NavHeader/NavHead";
import JobGet from "../modals/JobGetModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGachaStatus,
  changeMute,
  changePreviewIcon,
  changeUpdateJob,
  changeUser,
  changeUsername,
  userPage,
} from "../store/job";
import UserIcons from "../models/userIcons";
import ZimuPerson from "../components/animation/ZimuPerson";
import Envelope from "../components/animation/Envelope";
import BgBlack from "../components/background/BgBlack";
import { RootState } from "../store/store";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { GachaStatus } from "../types/gacha";
import { Mute } from "../types/user";

function GachaScreen() {
  const userIcon = useSelector((state: RootState) => state.job.user.icon);
  const previewIcon = useSelector((state: RootState) => state.job.previewIcon);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const userIcons = useSelector((state: RootState) => state.job.UserIcons);
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
  const user = useSelector((state: RootState) => state.job.user);
  const userMoney = user.money;
  const userName = user.name;
  const userId = user.id;
  const mute = user.mute;
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

  const onUserModalHandler = () => {
    setUserModal(true);
  };

  const changeMuteHandler = (mute: Mute) => {
    dispatch(changeMute(mute));
  };

  const startMove = () => {
    dispatch(userPage("start"));
    navigation.navigate("Start");
  };

  const gachaMove = () => {
    dispatch(userPage("gacha"));
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
