import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";

type Props = {
  onModal: () => void;
  gachaCost: number;
};

const GachaButton = ({ onModal, gachaCost }: Props) => {
  const isFocused = useIsFocused();
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonOpacity = ButtonAnim.interpolate({
    inputRange: [0, 1, 100],
    outputRange: [1, 0, 0],
  });

  useEffect(() => {
    ButtonAnim.setValue(0);
  }, [isFocused]);

  const pressInHandler = () => {
    Animated.timing(ButtonAnim, {
      toValue: 100,
      duration: 100,
      easing: Easing.ease,
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
      <Animated.View>
        <Image
          style={{ width: 210, height: 99 }}
          source={require("../../assets/ui/submitButtonPressed.png")}
        />
        <View
          style={[styles.gachaContainer, { transform: [{ translateY: 15 }] }]}
        >
          <Image
            style={styles.moneyImg}
            source={require("../../assets/ui/money1.png")}
          />
          <Text style={styles.gachaCost}>
            {new Intl.NumberFormat().format(gachaCost)}
          </Text>
        </View>
      </Animated.View>
      <Animated.View
        style={{ position: "absolute", opacity: ButtonOpacity }}
      >
        <Image
          style={{ width: 210, height: 99 }}
          source={require("../../assets/ui/submitButton.png")}
        />
        <View
          style={[styles.gachaContainer, { transform: [{ translateY: 11 }] }]}
        >
          <Image
            style={styles.moneyImg}
            source={require("../../assets/ui/money1.png")}
          />
          <Text style={styles.gachaCost}>
            {new Intl.NumberFormat().format(gachaCost)}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default GachaButton;

const styles = StyleSheet.create({
  gachaContainer: {
    position: "absolute",
    width: 210,
    height: 99,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  submitButton: {
    width: 220,
    height: 109,
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
