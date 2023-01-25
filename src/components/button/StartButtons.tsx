import { StyleSheet, Animated, View } from "react-native";
import React from "react";
import OperationButton from "./OperationButton";

type Props = {
  jobChangeMove: () => void;
  onSetting: () => void;
  gameMove: () => void;
  StartButtonsAnim: Animated.Value;
};

const StartButtons = ({
  jobChangeMove,
  onSetting,
  gameMove,
  StartButtonsAnim,
}: Props) => {
  return (
    <View style={styles.innerContainer}>
      <OperationButton
        onPress={onSetting}
        ButtonsAnim={StartButtonsAnim}
        ImageOff={require("../../assets/ui/settingButtonOff.png")}
        ImageOn={require("../../assets/ui/settingButton.png")}
        ImagePressed={require("../../assets/ui/settingButtonPressed.png")}
        width={64}
        height={68}
      />
      <OperationButton
        onPress={gameMove}
        ButtonsAnim={StartButtonsAnim}
        ImageOff={require("../../assets/ui/startButtonOff.png")}
        ImageOn={require("../../assets/ui/startButton.png")}
        ImagePressed={require("../../assets/ui/startButtonPressed.png")}
        width={226}
        height={88}
      />
      <OperationButton
        onPress={jobChangeMove}
        ButtonsAnim={StartButtonsAnim}
        ImageOff={require("../../assets/ui/jobChangeButtonOff.png")}
        ImageOn={require("../../assets/ui/jobChangeButton.png")}
        ImagePressed={require("../../assets/ui/jobChangeButtonPressed.png")}
        width={64}
        height={68}
      />
    </View>
  );
};

export default StartButtons;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 8,
    height: 102,
  }
});
