import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Gameover from "../modals/GameoverModal";
import BgBlack from "../components/ui/BgBlack";
import NavGameYamagawa from "../components/nav/NavFooter/NavGame/NavGameYamagawa";
import { Display } from "../components/ui/Display";

const GameScreen = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState();

  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [modalIsSetted, setModalIsSetted] = useState(false);
  const navigation = useNavigation();

  const pressFirstHandler = () => {
    setModalIsSetting(true);
  };

  const pressSecondHandler = () => {
    const startTime = new Date().getTime();
    const id = setInterval(() => {
      setTime(new Date().getTime() - startTime + time);
    }, 10);
    setIntervalId(id);
  };

  const pressThirdHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const pressFourthHandler = () => {
    setTime(0);
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
      <View style={styles.innerContainer}>
        <Display time={time}/>
      </View>
      {!modalIsSetted && !modalIsSetting && (
        <NavGameYamagawa
          pressFirstHandler={pressFirstHandler}
          pressSecondHandler={pressSecondHandler}
          pressThirdHandler={pressThirdHandler}
          pressFourthHandler={pressFourthHandler}
        />
      )}
      {modalIsSetting && <BgBlack />}
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
    justifyContent: "center",
  },
});
