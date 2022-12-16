import { View, Image, StyleSheet } from "react-native";
import ImageButton from "../../../ui/ImageButton";

type Props = {
  pressFirstHandler: () => void;
  pressSecondHandler: () => void;
  pressThirdHandler: () => void;
  pressFourthHandler: () => void;
  time: number[];
};

const NavGameYamagawa = ({
  pressFirstHandler,
  pressSecondHandler,
  pressThirdHandler,
  pressFourthHandler,
  time,
}: Props) => {

  if (time[1] > 0.5 || time[1] < 1.5 ) {
    console.log("success!");
  }

  return (
    <View style={styles.innerContainer}>
      <Image
        source={require("../../../../assets/ui/playBoardBackground.png")}
        style={styles.boardBackground}
      />
      <Image
        source={require("../../../../assets/ui/judgeSuccess.png")}
        style={styles.judge}
      />
      <Image
        source={require("../../../../assets/ui/playBoard.png")}
        style={styles.board}
      />
      <View style={styles.buttonsContainer}>
        <ImageButton
          source={require("../../../../assets/ui/blackButton.png")}
          onPress={pressFirstHandler}
          style={styles.button}
        />
        <ImageButton
          source={require("../../../../assets/ui/greenButton.png")}
          onPress={pressSecondHandler}
          style={styles.button}
        />
        <ImageButton
          source={require("../../../../assets/ui/yellowButton.png")}
          onPress={pressThirdHandler}
          style={styles.button}
        />
        <ImageButton
          source={require("../../../../assets/ui/yellowButton.png")}
          onPress={pressFourthHandler}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default NavGameYamagawa;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  boardBackground: {
    position: "absolute",
    height: 172,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  judge: {
    position: "absolute",
    height: 23,
    width: 23,
    bottom: 141,
    right: 56,
  },
  target: {
    position: "absolute",
    height: 60,
    width: 4,
    bottom: 83,
    right: 76,
    backgroundColor: "white",
  },
  board: {
    position: "absolute",
    height: 172,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  buttonsContainer: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 52,
    height: 56,
    marginHorizontal: 5,
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "black",
  },
});
