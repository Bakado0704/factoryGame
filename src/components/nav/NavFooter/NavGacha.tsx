import { View, StyleSheet } from "react-native";
import GachaButton from "../../button/GachaButton";
import ImageButton from "../../button/ImageButton";

type Props = {
  onModal: () => void;
  startMove: () => void;
  gachaCost: number;
};

const NavGacha = ({ onModal, startMove, gachaCost }: Props) => {
  return (
    <View style={styles.buttonsContainer}>
      <ImageButton
        source={require("../../../assets/ui/homeButton.png")}
        onPress={startMove}
        width={66}
        height={67}
        diffWidth={10}
        diffHeight={10}
        padding={5}
      />
      <GachaButton onModal={onModal} gachaCost={gachaCost} />
      <View style={styles.space} />
    </View>
  );
};

export default NavGacha;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  space: {
    width: 66,
    height: 67,
  },
});
