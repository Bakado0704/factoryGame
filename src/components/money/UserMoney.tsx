import { Image, ImageBackground, Text, View, StyleSheet, Dimensions } from "react-native";
import ImageButton from "../button/ImageButton";
const { width } = Dimensions.get("window");

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
              width={width * 0.08}
              height={width * 0.08}
              diffWidth={width * 0.008}
              diffHeight={width * 0.008}
              padding={width * 0.013}
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
    transform: [{ translateX: -width * 0.053 }],
  },
  backgroundImage: {
    position: "absolute",
    width: width * 0.456,
    height: width * 0.101,
    top: 0,
  },
  innerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: width * 0.456,
    height: width * 0.101,
  },
  moneyImg: {
    width: width * 0.075,
    height: width * 0.075,
    transform: [{ translateX: width * 0.053 }],
  },
  numberContainer: {
    width: width * 0.187,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  money: {
    fontSize: width * 0.037,
    fontFamily: "MochiyPop",
    color: "#fff",
    transform: [{ translateX: width * 0.048 }],
  },
});
