import { View, StyleSheet } from "react-native";
import ImageButton from "../components/ui/ImageButton";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Start");
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.innerContainer}>
        <ImageButton
          source={require("../assets/ui/closeButton.png")}
          onPress={pressHandler}
          style={styles.closeButton}
        />
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingHorizontal: 40,
    padding: 40,
    justifyContent: "center",
  },
  innerContainer: {
    position: "relative",
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
    // transform: [{ translateX: 25 }, {translateY: -25}],
  },
});