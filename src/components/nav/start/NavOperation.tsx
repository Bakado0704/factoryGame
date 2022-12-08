import { View, StyleSheet, ImageBackground, Animated } from "react-native";
import ImageButton from "../../ui/ImageButton";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  onSetting: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NavOperation = ({ onSetting }: Props) => {
  const navigation = useNavigation();
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage  = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 200,
      duration: 1200,
      useNativeDriver: false,
    })
  ).start();


  const pressHandler = () => {
    navigation.navigate("JobChange");
  };

  const gameHandler = () => {
    navigation.navigate("Game");
  };


  return (
    <>
      <View style={styles.rootConteiner}>
        <ImageBackground
          source={require("../../../assets/ui/operationBoard.png")}
          resizeMode="cover"
        >
          <View style={styles.innerContainer}>
            <ImageButton
              source={require("../../../assets/ui/settingButton.png")}
              onPress={onSetting}
              style={styles.settingButton}
            />
            <ImageButton
              source={require("../../../assets/ui/startButtonOff.png")}
              onPress={gameHandler}
              style={styles.startButton}
            />
            <Animated.View style={[styles.startButtonContainer, {opacity: ButtonImage}]}>
              <ImageButton
                source={require("../../../assets/ui/startButton.png")}
                onPress={gameHandler}
                style={styles.startButton}
              />
            </Animated.View>
            <ImageButton
              source={require("../../../assets/ui/jobChangeButton.png")}
              onPress={pressHandler}
              style={styles.jobChangeButton}
            />
          </View>
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
