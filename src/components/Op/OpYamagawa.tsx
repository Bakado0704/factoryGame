import { ImageBackground, View, StyleSheet } from "react-native";
import ImageButton from "../ui/ImageButton";

const NavHead = () => {
  const pressHandler = () => {}

  return (
    <View>
      <ImageBackground>
        <View>
          <ImageButton source={"../../assets/ui/settingButton.svg"} onPress={pressHandler} style={styles.operationButton}/>
          <ImageButton source={"../../assets/ui/settingButton.svg"} onPress={pressHandler} style={styles.operationButton}/>
          <ImageButton source={"../../assets/ui/settingButton.svg"} onPress={pressHandler} style={styles.operationButton}/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NavHead;

const styles = StyleSheet.create({
  operationButton: {},
});