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
      <NavHead />
      <NavSelect />
      <NavOperation />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 8,
  },
  okButton: {
    width: 100,
    height: 100,
  },
});
