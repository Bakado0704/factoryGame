import { View, StyleSheet, ImageBackground } from "react-native";
import ImageButton from "../../ui/ImageButton";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const NavOperation = () => {
  const [state, setState] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => !state);
    }, 600);

    return () => clearInterval(interval);
  }, []);


  const pressHandler = () => {
    navigation.navigate("JobChange");
  };

  const gameHandler = () => {
    navigation.navigate("Game");
  };

  const settingHandler = () => {
    navigation.navigate("Setting");
  };

  return (
    <>
      <View style={styles.rootConteiner}>
        <ImageBackground
          source={require("../../../assets/ui/operationBoard.png")}
          resizeMode="cover"
        >
          <View style={styles.innerContainer}>
            <ImageButton
              source={require("../../../assets/ui/settingButton.png")}
              onPress={settingHandler}
              style={styles.settingButton}
            />
            <ImageButton
              source={state ? require("../../../assets/ui/startButton.png") : require("../../../assets/ui/startButtonOff.png")}
              onPress={gameHandler}
              style={styles.startButton}
            />
            <ImageButton
              source={require("../../../assets/ui/jobChangeButton.png")}
              onPress={pressHandler}
              style={styles.jobChangeButton}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default NavOperation;

const styles = StyleSheet.create({
  rootConteiner: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 102,
  },
  settingButton: {
    width: 52,
    height: 56,
  },
  startButton: {
    width: 216,
    height: 78,
    marginHorizontal: 10,
  },
  jobChangeButton: {
    width: 52,
    height: 56,
  },
});
