import { StyleSheet, Animated, View, Image, Pressable } from "react-native";
import React, { useRef } from "react";

type Props = {
  gameHandler: () => void;
  onSetting: () => void;
  pressHandler: () => void;
};

const StartButtons = ({ gameHandler, onSetting, pressHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
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

  return (
    <View style={styles.innerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.settingButtonContainer,
        ]}
        onPress={onSetting}
      >
        <Image
          source={require("../../../assets/ui/settingButtonOff.png")}
          style={styles.settingButton}
        />
        <Animated.View
          style={[styles.settingButtonActive, { opacity: ButtonImage }]}
        >
          <Image
            source={require("../../../assets/ui/settingButton.png")}
            style={styles.settingButton}
          />
        </Animated.View>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.startButtonContainer,
        ]}
        onPress={gameHandler}
      >
        <Image
          source={require("../../../assets/ui/startButtonOff.png")}
          onPress={gameHandler}
          style={styles.startButton}
        />
        <Animated.View
          style={[styles.startButtonActive, { opacity: ButtonImage }]}
        >
          <Image
            source={require("../../../assets/ui/startButton.png")}
            style={styles.startButton}
          />
        </Animated.View>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.jobChangeButtonContainer,
        ]}
        onPress={pressHandler}
      >
        <Image
          source={require("../../../assets/ui/jobChangeButtonOff.png")}
          style={styles.jobChangeButton}
        />
        <Animated.View
          style={[styles.jobChangeButtonActive, { opacity: ButtonImage }]}
        >
          <Image
            source={require("../../../assets/ui/jobChangeButton.png")}
            style={styles.jobChangeButton}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default StartButtons;

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
  settingButtonContainer: {
    width: 52,
    height: 56,
  },
  settingButtonActive: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  settingButton: {
    width: "100%",
    height: "100%",
  },
  startButtonContainer: {
    width: 216,
    height: 78,
    marginHorizontal: 10,
  },
  startButtonActive: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  startButton: {
    width: "100%",
    height: "100%",
  },
  jobChangeButtonContainer: {
    width: 52,
    height: 56,
  },
  jobChangeButton: {
    width: "100%",
    height: "100%",
  },
  jobChangeButtonActive: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.75,
  },
});
