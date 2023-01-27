import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../constants/color";
const { width } = Dimensions.get("window");

export interface Props {
  drink: number;
}

const Stamina = ({ drink }: Props) => {
  const staminaWidth = (1 - drink  / 6) * width * 0.128;
  return (
    <View style={styles.innerContainer}>
      <Image
        style={styles.staminaBgImg}
        source={require("../../assets/ui/staminaBg.png")}
      />
      <View style={[styles.stamina, { width: staminaWidth }]} />
      <Image
        style={styles.staminaImg}
        source={require("../../assets/ui/stamina.png")}
      />
    </View>
  );
};

export default Stamina;

const styles = StyleSheet.create({
  innerContainer: {
    position: "relative",
    width: width * 0.147,
    height: width * 0.048,
    top: width * 0.002,
    left: width * 0.005,
    marginHorizontal: width * 0.013,
  },
  stamina: {
    position: "absolute",
    height: width * 0.043,
    top: width * 0.002,
    left: width * 0.013,
    backgroundColor: Colors.stamina,
  },
  staminaBgImg: {
    position: "absolute",
    width: width * 0.136,
    height: width * 0.043,
    top: width * 0.002,
    left: width * 0.005,
  },
  staminaImg: {
    position: "absolute",
    width: width * 0.147,
    height: width * 0.048,
    top: 0,
    left: 0,
  },
});
