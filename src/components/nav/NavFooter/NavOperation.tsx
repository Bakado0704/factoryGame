import { View, StyleSheet, Image, Animated, Dimensions } from "react-native";
import React, { useRef, useEffect } from "react";
import StartButtons from "../../button/StartButtons";
const { width } = Dimensions.get("window");

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
    transform: [{ translateY: -width * 0.013 }],
  },
  operationBoard: {
    width: width * 0.96,
    height: width * 0.272,
    position: "absolute",
  }
});
