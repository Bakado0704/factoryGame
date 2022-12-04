import { View, StyleSheet, ImageBackground } from "react-native";
import ImageButton from "../../ui/ImageButton";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  onSetting: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NavOperation = ({ onSetting }: Props) => {
  const [status, setStatus] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((status) => !status);
    }, 600);

    return () => clearInterval(interval);
  }, []);


  const pressHandler = () => {
    navigation.navigate("JobChange");
  };

  const gameHandler = () => {
    navigation.navigate("Game");
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
              onPress={onSetting}
              style={styles.settingButton}
            />
            <ImageButton
              source={status ? require("../../../assets/ui/startButton.png") : require("../../../assets/ui/startButtonOff.png")}
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
