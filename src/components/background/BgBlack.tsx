import { StyleSheet, View } from "react-native";
import React from "react";

const BgBlack = () => {
  return <View style={styles.background} />;
};

export default BgBlack;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.7,
    backgroundColor: "black",
  },
});