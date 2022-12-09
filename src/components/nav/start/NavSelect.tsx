import { View, Image, Text, StyleSheet } from "react-native";
import ImageButton from "../../ui/ImageButton";
import { useNavigation } from "@react-navigation/native";

const NavBody = () => {
  const navigation = useNavigation();

  const pressHandler = () => {};

  return (
    <View style={styles.rootContainer}>
      <View style={styles.containerTop}>
        <ImageButton
          source={require("../../../assets/ui/prevButton.png")}
          onPress={pressHandler}
          style={styles.prevButton}
        />
        <Image
          source={require("../../../assets/signboard/yamagawaBoard.png")}
          style={styles.signboard}
        />
        <ImageButton
          source={require("../../../assets/ui/nextButton.png")}
          onPress={pressHandler}
          style={styles.nextButton}
        />
      </View>
      <View style={styles.containerBottom}>
        <ImageButton
          source={require("../../../assets/ui/rankingButton.png")}
          onPress={pressHandler}
          style={styles.rankingButton}
        />
        <Image
          source={require("../../../assets/ui/rankingCoron.png")}
          style={styles.coron}
        />
        <Image
          source={require("../../../assets/ui/money1.png")}
          style={styles.moneyImg}
        />
        <Text style={styles.money}>340</Text>
      </View>
    </View>
  );
};

export default NavBody;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  prevButton: {
    width: 25,
    height: 70,
  },
  signboard: {
    width: 222,
    height: 60,
    marginHorizontal: 14,
  },
  nextButton: {
    width: 25,
    height: 70,
  },
  rankingButton: {
    width: 31,
    height: 35,
  },
  coron: {
    width: 7,
    height: 25,

    marginHorizontal: 10,
  },
  moneyImg: {
    width: 33,
    height: 33,
    padding: 14,
  },
  money: {
    fontSize: 20,
    fontFamily: "MochiyPop",
    marginHorizontal: 7,
  },
});
