import { View, StyleSheet, ImageBackground } from "react-native";
import ImageButton from "../../ui/ImageButton";
import { useNavigation } from "@react-navigation/native";

type Props = {
  onModal: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NavGacha = ({onModal} : Props) => {
  
  const navigation = useNavigation();

  const homeHandler = () => {
    navigation.navigate("Start");
  };

  const pressHandler = () => {};

  return (
    <View style={styles.buttonsContainer}>
      <ImageButton
        source={require("../../../assets/ui/homeButton.png")}
        onPress={homeHandler}
        style={styles.homeButton}
      />
      <ImageButton
        source={require("../../../assets/ui/submitButton.png")}
        onPress={onModal}
        style={styles.submitButton}
      />
      <View style={styles.space}></View>
    </View>
  );
};

export default NavGacha;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "flex-end",
  },
  buttonsContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    transform: [{ translateX: -8 }],
  },
  homeButton: {
    width: 66,
    height: 67,
  },
  submitButton: {
    width: 210,
    height: 99,
    marginHorizontal: 8,
  },
  space: {
    width: 66,
    height: 67,
  },
});
