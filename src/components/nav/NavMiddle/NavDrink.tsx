import { View, Image, Text, StyleSheet } from "react-native";
import NextButton from "../../animation/animationButton/NextButton";
import PrevButton from "../../animation/animationButton/PrevButton";

type Props = {
  drink: number;
  userDrinkHandler: (number: number) => void;
};

const NavDrink = ({ drink, userDrinkHandler }: Props) => {
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
      <Image
        source={require("../../../assets/ui/modalBackgroundLight.png")}
        style={styles.drinkBackground}
      />
      <View style={styles.containerTop}>
        <PrevButton pressHandler={prevHandler} />
        {drinks}
        {emptyDrinks}
        <NextButton pressHandler={nextHandler} />
      </View>
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
    marginVertical: 5,
  },
  containerTop: {
    alignItems: "center",
    flexDirection: "row",
  },
  drinkBackground: {
    position: "absolute",
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
