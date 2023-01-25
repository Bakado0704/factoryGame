import {
  StyleSheet,
  Animated,
  Image,
  Pressable,
  View,
  Text,
} from "react-native";
import React, { useRef } from "react";

type Props = {
  onModal: () => void;
  gachaCost: number;
};

const GachaButton = ({ onModal, gachaCost }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;
  const GachaButtonWidth = ButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [210, 200],
  });

  const GachaButtonHeight = ButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [99, 95],
  });

  const pressInHandler = () => {
    Animated.timing(ButtonAnim, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const pressOutHandler = () => {
    ButtonAnim.setValue(0);
  };

  return (
    <Pressable
      onPress={onModal}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={styles.submitButton}
    >
      <Animated.Image
        style={{ width: GachaButtonWidth, height: GachaButtonHeight }}
        source={require("../../assets/ui/submitButton.png")}
      />
      <View style={styles.gachaContainer}>
        <Image
          style={styles.moneyImg}
          source={require("../../assets/ui/money1.png")}
        />
        <Text style={styles.gachaCost}>
          {new Intl.NumberFormat().format(gachaCost)}
        </Text>
      </View>
    </Pressable>
  );
};

export default GachaButton;

const styles = StyleSheet.create({
  gachaContainer: {
    position: "absolute",
    width: 210,
    height: 99,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    transform: [{ translateY: 12 }],
  },
  submitButton: {
    width: 220,
    height: 104,
    alignItems: "center",
    justifyContent: "center",
  },
  moneyImg: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  gachaCost: {
    fontSize: 20,
    fontFamily: "MochiyPop",
    color: "white",
  },
});
