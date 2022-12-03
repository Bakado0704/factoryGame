import { View, StyleSheet } from "react-native";
import ImageButton from "../ui/ImageButton";

const NavGacha = () => {
  const pressHandler = () => {}

  return (
    <>
      <View>
        <ImageButton source={"../../assets/ui/settingButton.svg"} onPress={pressHandler} style={styles.homeButton}/>
        <ImageButton source={"../../assets/ui/settingButton.svg"} onPress={pressHandler} style={styles.submitButton}/>
      </View>
    </>
  );
};

export default NavGacha;

const styles = StyleSheet.create({
  homeButton: {
    width: 100,
    height: 100,
  },
  submitButton: {
    width: 100,
    height: 100,
  },
});