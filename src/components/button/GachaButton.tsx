import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
const { width } = Dimensions.get("window");

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
          style={{ width: width * 0.56, height: width * 0.264 }}
          source={require("../../assets/ui/submitButtonPressed.png")}
        />
        <View
          style={[styles.gachaContainer, { transform: [{ translateY: width * 0.04 }] }]}
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
          style={{ width: width * 0.56, height: width * 0.264 }}
          source={require("../../assets/ui/submitButton.png")}
        />
        <View
          style={[styles.gachaContainer, { transform: [{ translateY: width * 0.029 }] }]}
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
    width: width * 0.56,
    height: width * 0.264,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  submitButton: {
    width: width * 0.587,
    height: width * 0.291,
    alignItems: "center",
    justifyContent: "center",
  },
  moneyImg: {
    width: width * 0.093,
    height: width * 0.093,
    marginRight: width * 0.027,
  },
  gachaCost: {
    fontSize: width * 0.053,
    fontFamily: "MochiyPop",
    color: "white",
  },
});
