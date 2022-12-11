import { View, Image, StyleSheet } from "react-native";
import { useState } from "react";
import ImageButton from "../components/ui/ImageButton";
import { useNavigation } from "@react-navigation/native";
import Gameover from "../modals/gameoverModal";

const GameScreen = () => {
  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [modalIsSetted, setModalIsSetted] = useState(false);
  const navigation = useNavigation();

  const pressHandler = () => {
    setModalIsSetting(true);
  };

  if (modalIsSetting) {
    setTimeout(() => {
      setModalIsSetted(true);
    }, 1000);
  }

  const offModalHandler = () => {
    setModalIsSetted(false);
    setModalIsSetting(false);
    navigation.navigate("Start");
  };

  return (
    <View style={styles.rootScreen}>
      {!modalIsSetted && !modalIsSetting && (
        <View style={styles.innerContainer}>
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
      )}
      {modalIsSetting && <View style={styles.background} />}
      {modalIsSetted && <Gameover offModal={offModalHandler} />}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  innerContainer: {
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
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "black",
  },
});
