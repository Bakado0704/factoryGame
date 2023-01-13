import { View, StyleSheet, ImageBackground, Animated } from "react-native";
import ImageButton from "../../button/ImageButton";
import React, { useRef } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import StartButtons from "../../animation/animationButton/StartButtons";

type Props = {
  onSetting: () => void;
  staminaResetHandler: () => void;
  playingStatusHandler: () => void;
};

const NavOperation = ({
  onSetting,
  staminaResetHandler,
  playingStatusHandler,
}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const pressHandler = () => {
    navigation.navigate("JobChange");
  };

  const gameHandler = () => {
    navigation.navigate("Game");
    staminaResetHandler();
    playingStatusHandler();
  };

  return (
    <>
      <View style={styles.rootConteiner}>
        <StartButtons
          gameHandler={gameHandler}
          onSetting={onSetting}
          pressHandler={pressHandler}
        />
      </View>
    </>
  );
};

export default NavOperation;

const styles = StyleSheet.create({
  rootConteiner: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 102,
  },
  settingButton: {
    width: 52,
    height: 56,
  },
  startButtonContainer: {
    position: "absolute",
    top: 12,
    left: 52,
    width: 216,
    height: 78,
    marginHorizontal: 10,
  },
  startButton: {
    width: 216,
    height: 78,
    marginHorizontal: 10,
  },
  jobChangeButton: {
    width: 52,
    height: 56,
  },
});
