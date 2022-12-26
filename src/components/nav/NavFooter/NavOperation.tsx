import { View, StyleSheet, ImageBackground, Animated } from "react-native";
import ImageButton from "../../ui/ImageButton";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import StartButtons from "../../animation/animationButton/StartButtons";

type Props = {
  onSetting: () => void;
  staminaResetHandler: () => void;
};

const NavOperation = ({ onSetting, staminaResetHandler }: Props) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("JobChange");
  };

  const gameHandler = () => {
    navigation.navigate("Game");
    staminaResetHandler();
  };

  return (
    <>
      <View style={styles.rootConteiner}>
        <ImageBackground
          source={require("../../../assets/ui/operationBoard.png")}
          resizeMode="cover"
        >
          <StartButtons
            gameHandler={gameHandler}
            onSetting={onSetting}
            pressHandler={pressHandler}
          />
        </ImageBackground>
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
