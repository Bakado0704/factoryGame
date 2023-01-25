import {
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
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

  let Image = require("../../assets/ui/submitButton.png");
  let ImagePressed = require("../../assets/ui/submitButtonPressed.png");

  let ImageSource = flag ? ImagePressed : Image;

  const pressInHandler = () => {
    setFlag(true);
  };

  const pressOutHandler = () => {
    setFlag(false);
  };

  return (
    <Pressable
      onPress={onModal}
      onPressIn={pressInHandler}
      onPressOut={pressOutHandler}
      style={styles.submitButtonContainer}
    >
      <Image style={styles.submitButton} source={ImageSource} />
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
  submitButtonContainer: {
    width: 220,
    height: 104,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButton: {
    width: 210,
    height: 99,
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
