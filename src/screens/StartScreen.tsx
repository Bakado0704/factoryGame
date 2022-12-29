import { View, StyleSheet } from "react-native";
import NavHead from "../components/nav/NavHeader/NavHead";
import { useState } from "react";
import NavSelect from "../components/nav/NavMiddle/NavSelect";
import NavOperation from "../components/nav/NavFooter/NavOperation";
import Setting from "../modals/SettingModal";
import UserModal from "../modals/UserModal";
import { useDispatch, useSelector } from "react-redux";
import UserIcons from "../models/userIcons";
import {
  changePreviewIcon,
  changeStatus,
  changeUser,
  staminaReset,
} from "../store/job";
import { PlayStatus } from "../types/play";

const StartScreen = () => {
  const Job = useSelector((state) => state.job.job);
  const userIcon = useSelector((state) => state.job.user.icon);
  const previewIcon = useSelector((state) => state.job.previewIcon);
  const maxMoney = Job.maxMoney;
  const [setting, setSetting] = useState(false);
  const [userModal, setUserModal] = useState(false);

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

  return (
    <View style={styles.rootScreen}>
      <View style={styles.innerContainer}>
        <NavHead icon={userIcon} onUserModal={onUserModalHandler} />
        <NavSelect maxMoney={maxMoney} />
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
