import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions
} from "react-native";
import NextButton from "../../button/NextButton";
import PrevButton from "../../button/PrevButton";
const { width } = Dimensions.get("window");

type Props = {
  drink: number;
  ButtonAnim: Animated.Value;
  PrevButtonAnim: Animated.Value;
  NextButtonAnim: Animated.Value;
  userDrinkHandler: (number: number) => void;
};

const NavDrink = ({
  drink,
  ButtonAnim,
  userDrinkHandler,
  PrevButtonAnim,
  NextButtonAnim,
}: Props) => {
  const prevHandler = () => {
    if (drink !== 0) {
      userDrinkHandler(-1);
    }
  };

  const nextHandler = () => {
    if (drink !== 5) {
      userDrinkHandler(1);
    }
  };

  var drinks = [];
  for (let i = 0; i < drink; i++) {
    drinks.push(
      <View key={i} style={styles.drinkContainer}>
        <Image
          source={require("../../../assets/ui/drinkOn.png")}
          style={styles.drinkImg}
        />
      </View>
    );
  }
  var emptyDrinks = [];
  for (let i = 0; i < 5 - drink; i++) {
    emptyDrinks.push(
      <View key={i} style={styles.drinkContainer}>
        <Image
          source={require("../../../assets/ui/drinkOff.png")}
          style={styles.drinkImg}
        />
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require("../../../assets/ui/modalBackgroundLight.png")}
        style={styles.drinkBackground}
      >
        <PrevButton
          pressHandler={prevHandler}
          ButtonAnim={ButtonAnim}
          PrevButtonAnim={PrevButtonAnim}
        />
        {drinks}
        {emptyDrinks}
        <NextButton
          pressHandler={nextHandler}
          ButtonAnim={ButtonAnim}
          NextButtonAnim={NextButtonAnim}
        />
      </ImageBackground>
    </View>
  );
};

export default NavDrink;

const styles = StyleSheet.create({
  rootContainer: {
    width: width * 0.693,
    height: width * 0.283,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: width * 0.027,
  },
  drinkBackground: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: width * 0.693,
    height: width * 0.283,
  },
  drinkContainer: {
    width: width * 0.099,
    height: width * 0.253,
    marginHorizontal: width * 0.016,
  },
  drinkImg: {
    width: "100%",
    height: "100%",
  },
});
