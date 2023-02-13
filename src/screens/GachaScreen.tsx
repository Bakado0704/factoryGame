import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import NavGacha from "../components/nav/NavFooter/NavGacha";
import NavHead from "../components/nav/NavHeader/NavHead";
import JobGet from "../modals/JobGetModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import UserIcons from "../models/userIcons";
import ZimuPerson from "../components/face/ZimuPerson";
import Envelope from "../components/gacha/Envelope";
import BgBlack from "../components/background/BgBlack";
import { RootState } from "../store/store";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { GachaStatus } from "../types/gacha";
import { Mute } from "../types/user";
import {
  changeGachaCost,
  changeGachaStatus,
  changeMute,
  changePreviewIcon,
  changeUser,
  changeUsername,
  userMoneyIncrease,
  userPage,
} from "../store/user";
import { unlockJob, updateJob } from "../store/job";
import ExplosionTest from "../components/background/ExplostionTest";
const { width } = Dimensions.get("window");

function GachaScreen() {
  const user = useSelector((state: RootState) => state.user.user);
  const previewIcon = useSelector((state: RootState) => state.user.previewIcon);
  const userIcons = useSelector((state: RootState) => state.user.UserIcons);
  const jobs = useSelector((state: RootState) => state.job.jobs);
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];

  const userIcon = user.icon;
  const userMoney = user.money;
  const userName = user.name;
  const userId = user.id;
  const gachaCost = user.gachaCost;
  const mute = user.mute;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const [userModal, setUserModal] = useState(false);

  let gachaPlusMoney = 300;
  if (gachaCost >= 800) {
    gachaPlusMoney = 500;
  } else if (gachaCost >= 2500) {
    gachaPlusMoney = 650;
  } else if (gachaCost >= 5000) {
    gachaPlusMoney = 800;
  } else if (gachaCost >= 7500) {
    gachaPlusMoney = 1000;
  }

  const offModalHandler = () => {
    dispatch(changeGachaStatus(GachaStatus.stop));
    dispatch(changeGachaCost(gachaPlusMoney));
    if (jobs[jobs.indexOf(randomJob)].isActive === true) {
      dispatch(updateJob(randomJob));
    } else {
      dispatch(unlockJob(randomJob));
    }
  };

  const modalSettingHandler = () => {
    if (userMoney > gachaCost) {
      dispatch(changeGachaStatus(GachaStatus.closed));
      dispatch(userMoneyIncrease(-gachaCost));
    }
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
        <ZimuPerson />
        <View style={styles.innerContainer}>
          <NavHead
            icon={userIcon}
            onUserModal={onUserModalHandler}
            userMoney={userMoney}
            gachaMove={gachaMove}
            user={user}
          />
          <NavGacha
            onModal={modalSettingHandler}
            startMove={startMove}
            gachaCost={gachaCost}
          />
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
    padding: width * 0.021,
  }
});
