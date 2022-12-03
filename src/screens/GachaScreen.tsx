import { View, ImageBackground, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import NavGacha from "../components/nav/NavGacha";
import NavHead from "../components/nav/NavHead";

function GachaScreen() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => !state);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgGacha.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          <NavHead />
          <NavGacha />
          <Image
            source={require("../assets/icon/zimuPerson.png")}
            style={state ? styles.iconImg : styles.iconImgActive}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default GachaScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  iconImg: {
    position: "absolute",
    width: 74,
    height: 61,
    top: "38.6%",
    left: "16%",
  },
  iconImgActive: {
    position: "absolute",
    width: 74,
    height: 61,
    top: "38.8%",
    left: "16%",
  },
});
