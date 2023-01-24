import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  Animated,
} from "react-native";
import ImageButton from "../../button/ImageButton";

type Props = {
  onModal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startMove: () => void;
  gachaCost: number;
  GachaButtonAnim: Animated.Value;
  HomeButtonAnim: Animated.Value;
  homePressInHandler: () => void;
  homePressOutHandler: () => void;
  gachaPressInHandler: () => void;
  gachaPressOutHandler: () => void;
};

const NavGacha = ({
  onModal,
  startMove,
  gachaCost,
  GachaButtonAnim,
  HomeButtonAnim,
  homePressInHandler,
  homePressOutHandler,
  gachaPressInHandler,
  gachaPressOutHandler,
}: Props) => {
  const homeHandler = () => {
    startMove();
  };

  const GachaButtonWidth = GachaButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [210, 220],
  });

  const GachaButtonHeight = GachaButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [99, 104],
  });

  const HomeButtonWidth = HomeButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [66, 76],
  });

  const HomeButtonHeight = HomeButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [67, 77],
  });

  return (
    <View style={styles.buttonsContainer}>
      <ImageButton
        source={require("../../../assets/ui/homeButton.png")}
        onPress={homeHandler}
        style={styles.homeButton}
        padding={5}
      />

      <Pressable
        onPress={onModal}
        onPressIn={gachaPressInHandler}
        onPressOut={gachaPressOutHandler}
        style={styles.submitButton}
      >
        <Animated.Image
          style={{ width: GachaButtonWidth, height: GachaButtonHeight }}
          source={require("../../../assets/ui/submitButton.png")}
        />
        <View style={[styles.gachaContainer, {}]}>
          <Image
            style={styles.moneyImg}
            source={require("../../../assets/ui/money1.png")}
          />
          <Text style={styles.gachaCost}>
            {new Intl.NumberFormat().format(gachaCost)}
          </Text>
        </View>
      </Pressable>

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
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  homeButton: {
    width: 66,
    height: 67,
  },
  gachaContainer: {
    position: "absolute",
    width: 210,
    height: 99,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    transform: [{ translateY: 12 }],
  },
  submitButton: {
    width: 220,
    height: 104,
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    width: 66,
    height: 67,
  },
  moneyImg: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  gachaCost: {
    fontSize: 20,
    fontFamily: "MochiyPop",
    color: "white",
  }
});
