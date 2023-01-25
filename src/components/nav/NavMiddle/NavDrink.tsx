import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import NextButton from "../../button/NextButton";
import PrevButton from "../../button/PrevButton";

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
    width: 260,
    height: 106,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  drinkBackground: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 260,
    height: 106,
  },
  drinkContainer: {
    width: 37,
    height: 95,
    marginHorizontal: 6,
  },
  drinkImg: {
    width: "100%",
    height: "100%",
  },
});
