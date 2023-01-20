import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";
import ImageButton from "../button/ImageButton";

type Props = {
  userMoney: number;
};

const UserMoney = ({ userMoney }: Props) => {
  const pressHandler = () => {};

  return (
    <View style={styles.rootScreen}>
      <View style={{}}>
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
            <View style={styles.numberContainer}>
              <Text style={styles.money}>
                {new Intl.NumberFormat().format(userMoney)}
              </Text>
            </View>
            <ImageButton
              source={require("../../assets/ui/plusButton.png")}
              onPress={pressHandler}
              style={styles.plusButton}
              padding={7}
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
    justifyContent: "flex-start",
    alignItems: "center",
    transform: [{ translateX: -20 }],
  },
  backgroundImage: {
    position: "absolute",
    width: 171,
    height: 38,
    top: 0,

  },
  innerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 171,
    height: 38,
  },
  plusButton: {
    width: 30,
    height: 30,
  },
  moneyImg: {
    width: 28,
    height: 28,
    transform: [{ translateX: 20 }],
  },
  numberContainer: {
    width: 70,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  money: {
    fontSize: 14,
    fontFamily: "MochiyPop",
    color: "#fff",
    transform: [{ translateX: 18 }],
  },
});
