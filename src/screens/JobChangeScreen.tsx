import { View, ImageBackground, Image, StyleSheet } from "react-native";
import JobList from "../components/nav/jobchange/JobList";

const JobChangeScreen = () => {
  const pressHandler = () => {};

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("../../src/assets/background/bgYamagawa.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <Image
          source={require("../../src/assets/ui/boardJobChange.png")}
          style={styles.board}
        />
      </ImageBackground>
    </View>
  );
};

export default JobChangeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    padding: 8,
  },
  board: {
    position: "absolute",
    height: 299,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  okButton: {
    width: 100,
    height: 100,
  },
});
