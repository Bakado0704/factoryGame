import { StyleSheet, Animated, Pressable, Image } from "react-native";
import { useRef } from "react";

type Props = {
  pressHandler: () => void;
};

const RankingButton = ({ pressHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 200,
      duration: 1200,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.rankingButtonContainer,
      ]}
      onPress={pressHandler}
    >
      <Image
        source={require("../../../assets/ui/rankingButtonOff.png")}
        style={styles.rankingButton}
      />
      <Animated.View
        style={[styles.rankingButtonActive, { opacity: ButtonImage }]}
      >
        <Image
          source={require("../../../assets/ui/rankingButton.png")}
          style={styles.rankingButton}
        />
      </Animated.View>
    </Pressable>
  );
};

export default RankingButton;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  prevButton: {
    width: 25,
    height: 70,
  },
  nextButton: {
    width: 25,
    height: 70,
  },
  rankingButtonContainer: {
    width: 31,
    height: 35,
  },
  rankingButton: {
    width: "100%",
    height: "100%",
  },
  rankingButtonActive: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.75,
  },
});