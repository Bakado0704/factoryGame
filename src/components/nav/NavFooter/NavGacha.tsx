import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import ImageButton from "../../button/ImageButton";

type Props = {
  onModal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startMove: () => void;
  gachaCost: number;
};

const NavGacha = ({ onModal, startMove, gachaCost }: Props) => {
  const homeHandler = () => {
    startMove();
  };

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
        style={({ pressed }) => [pressed && styles.pressed, { padding: 5 }]}
        android_ripple={{ color: "#ccc" }}
      >
        <Image
          style={styles.submitButton}
          source={require("../../../assets/ui/submitButton.png")}
        />
        <View style={styles.gachaContainer}>
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
  submitButtonContainer: {
    width: 210,
    height: 99,
  },
  gachaContainer: {
    position: "absolute",
    width: 210,
    height: 99,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    transform: [{ translateY: 18 }],
  },
  submitButton: {
    width: 210,
    height: 99,
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
  },
  pressed: {
    opacity: 0.75,
  },
});
