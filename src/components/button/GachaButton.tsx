import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

type Props = {
  onModal: () => void;
  gachaCost: number;
};

const GachaButton = ({ onModal, gachaCost }: Props) => {
  const isFocused = useIsFocused();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(false);
  }, [isFocused]);

  const pressInHandler = () => {
    setFlag(true);
  };

  const pressOutHandler = () => {
    setFlag(false);
  };

  let ImageOff = require("../../assets/ui/submitButton.png");
  let ImagePressed = require("../../assets/ui/submitButtonPressed.png");
  let ContainerY = flag ? 15 : 11;
  let ImageSource = flag ? ImagePressed : ImageOff;

  return (
    <Pressable
      onPress={onModal}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={styles.submitButton}
    >
      <Image style={{ width: 210, height: 99 }} source={ImageSource} />
      <View
        style={[
          styles.gachaContainer,
          { transform: [{ translateY: ContainerY }] },
        ]}
      >
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
