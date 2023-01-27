import { StyleSheet, Animated, View, Dimensions } from "react-native";
import React from "react";
import OperationButton from "./OperationButton";
const { width } = Dimensions.get("window");

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
        buttonWidth={width * 0.171}
        buttonHeight={width * 0.181}
      />
      <OperationButton
        onPress={gameMove}
        ButtonsAnim={StartButtonsAnim}
        ImageOff={require("../../assets/ui/startButtonOff.png")}
        ImageOn={require("../../assets/ui/startButton.png")}
        ImagePressed={require("../../assets/ui/startButtonPressed.png")}
        buttonWidth={width * 0.603}
        buttonHeight={width * 0.235}
      />
      <OperationButton
        onPress={jobChangeMove}
        ButtonsAnim={StartButtonsAnim}
        ImageOff={require("../../assets/ui/jobChangeButtonOff.png")}
        ImageOn={require("../../assets/ui/jobChangeButton.png")}
        ImagePressed={require("../../assets/ui/jobChangeButtonPressed.png")}
        buttonWidth={width * 0.171}
        buttonHeight={width * 0.181}
      />
    </View>
  );
};

export default StartButtons;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: width * 0.027,
    paddingBottom: width * 0.027,
    height: 102,
  }
});
