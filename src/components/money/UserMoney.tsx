import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";
import ImageButton from "../button/ImageButton";

type Props = {
  userMoney: number;
};

const UserMoney = ({ userMoney }: Props) => {
  const pressHandler = () => {};

  return (
    <View style={styles.rootScreen}>
      <View style={styles.outerContainer}>
        <ImageBackground
          source={require("../../assets/ui/bgMoney.png")}
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.innerContainer}>
            <Image
              source={require("../../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <Text style={styles.money}>{new Intl.NumberFormat().format(userMoney)}</Text>
            <ImageButton
              source={require("../../assets/ui/plusButton.png")}
              onPress={pressHandler}
              style={styles.plusButton}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default UserMoney;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  outerContainer: {
    position: "absolute",
    top: 0,
    left: -20,
  },
  backgroundImage: {
    width: 171,
    height: 38,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 171,
    height: 38,
    position: "relative",
    paddingHorizontal: 6,
  },
  plusButton: {
    width: 30,
    height: 30,
  },
  moneyImg: {
    width: 28,
    height: 28,
    transform: [{ translateX: 12 }],
  },
  money: {
    fontSize: 14,
    fontFamily: "MochiyPop",
    color: "#fff",
    transform: [{ translateX: 20 }],
  },
});
