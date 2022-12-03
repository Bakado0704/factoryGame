import { View, Modal, Image, StyleSheet, ImageBackground } from "react-native";
import NavHead from "../components/nav/NavHead";
import NavSelect from "../components/nav/start/NavSelect";
import NavOperation from "../components/nav/start/NavOperation";
import Card from "../components/ui/Card";
import ImageButton from "../components/ui/ImageButton";

const StartScreen = () => {
  const pressHandler = () => {};

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("../../src/assets/background/bgYamagawa.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <Image
          source={require("../../src/assets/conveyor/cvYamagawa.png")}
          style={styles.conveyor}
        />
        <View style={styles.innerContainer}>
          <NavHead />
          <NavSelect />
          <NavOperation />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    padding: 8,
  },
  conveyor: {
    position: "absolute",
    height: 282,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  okButton: {
    width: 100,
    height: 100,
  },
});
