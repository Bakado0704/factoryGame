import { View, Image, StyleSheet } from "react-native";
import ImageButton from "../components/ui/ImageButton";
import { useNavigation } from "@react-navigation/native";

const GameScreen = () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Start");
  };

  return (
    <View style={styles.rootScreen}>
      <Image
        source={require("../assets/ui/playBoard.png")}
        style={styles.board}
      />
      <View style={styles.buttonsContainer}>
        <ImageButton
          source={require("../assets/ui/blackButton.png")}
          onPress={pressHandler}
          style={styles.button}
        />
        <ImageButton
          source={require("../assets/ui/greenButton.png")}
          onPress={pressHandler}
          style={styles.button}
        />
        <ImageButton
          source={require("../assets/ui/yellowButton.png")}
          onPress={pressHandler}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  board: {
    position: "absolute",
    height: 172,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  jobsContainer: {
    width: "100%",
  },
  buttonsContainer: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 52,
    height: 56,
    marginHorizontal: 5,
  },
});
