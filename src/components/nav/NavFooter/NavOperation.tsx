import { View, StyleSheet, Image, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import StartButtons from "../../button/StartButtons";

type Props = {
  onSetting: () => void;
  gameMove: () => void;
  jobChangeMove: () => void;
};

const NavOperation = ({ onSetting, gameMove, jobChangeMove }: Props) => {
  const StartButtonsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(StartButtonsAnim, {
        toValue: 200,
        duration: 1200,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <>
      <View style={styles.rootConteiner}>
        <Image
          source={require("../../../assets/ui/operationBoard.png")}
          style={styles.operationBoard}
        />
        <StartButtons
          gameMove={gameMove}
          onSetting={onSetting}
          jobChangeMove={jobChangeMove}
          StartButtonsAnim={StartButtonsAnim}
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
    transform: [{ translateY: -5 }],
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
  operationBoard: {
    width: 360,
    height: 102,
    position: "absolute",
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
