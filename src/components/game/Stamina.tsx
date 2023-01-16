import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../constants/color";

export interface Props {
  drink: number;
}

const Stamina = ({ drink }: Props) => {
  const width = (1 - drink  / 6) * 48;
  return (
    <View style={styles.innerContainer}>
      <Image
        style={styles.staminaBgImg}
        source={require("../../assets/ui/staminaBg.png")}
      />
      <View style={[styles.stamina, { width: width }]} />
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
    width: 55,
    height: 18,
    top: 1,
    left: 2,
    marginHorizontal: 5,
  },
  stamina: {
    position: "absolute",
    height: 16,
    top: 1,
    left: 5,
    backgroundColor: Colors.stamina,
  },
  staminaBgImg: {
    position: "absolute",
    width: 51,
    height: 16,
    top: 1,
    left: 2,
  },
  staminaImg: {
    position: "absolute",
    width: 55,
    height: 18,
    top: 0,
    left: 0,
  },
});
