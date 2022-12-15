import { View, StyleSheet } from "react-native";
import React from "react";
import ImageButton from "../components/ui/ImageButton";

type Props = {
  offSetting: () => void
}

const Setting = ({ offSetting }: Props ) => {
  return (
    <>
      <View style={styles.background}></View>
      <View style={styles.rootScreen}>
        <View style={styles.innerContainer}>
          <ImageButton
            source={require("../assets/ui/closeButton.png")}
            onPress={offSetting}
            style={styles.closeButton}
          />
        </View>
      </View>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  rootScreen: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 40,
    padding: 40,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "black",
  },
  innerContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 300,
    borderRadius: 32,
  },
  closeButton: {
    position: "absolute",
    width: 55,
    height: 55,
    top: 0,
    right: 0,
    transform: [{ translateX: 25 }, { translateY: -25 }],
  },
});
