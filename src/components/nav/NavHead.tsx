import { View, StyleSheet } from "react-native";
import Money from "../ui/Money";
import ImageButton from "../ui/ImageButton";
import { useNavigation } from "@react-navigation/native";

const NavHead = () => {
  const navigation = useNavigation();

  const gachaHandler = () => {
    navigation.navigate("Gacha");
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <Money />
        <ImageButton source={require("../../assets/ui/gachaButton.png")} onPress={gachaHandler} style={styles.gachaButton}/>
      </View>
    </>
  );
};

export default NavHead;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  gachaButton: {
    width: 47,
    height: 47,
  },
});
