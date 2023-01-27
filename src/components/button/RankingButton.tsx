import { StyleSheet, Animated, Pressable, Image, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
const { width } = Dimensions.get("window");

type Props = {
  rankingPressHandler: () => void;
  ButtonAnim: Animated.Value;
};


const RankingButton = ({
  rankingPressHandler,
  ButtonAnim,
}: Props) => {
  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });
  const isFocused = useIsFocused();
  const [rankingFlag, setRankingFlag] = useState(false);
  
  useEffect(() => {
    setRankingFlag(false);
  }, [isFocused]);

  const rankingPressInHandler = () => {
    setRankingFlag(true);
  };

  const rankingPressOutHandler = () => {
    setRankingFlag(false);
  };

  const rankingButtonOff = require("../../assets/ui/rankingButtonOff.png");
  const rankingButtonOn = require("../../assets/ui/rankingButton.png");
  const rankingButtonPressed = require("../../assets/ui/rankingButtonPressed.png");

  let imageOff = rankingFlag ? rankingButtonPressed : rankingButtonOff;
  let imageOn = rankingFlag ? rankingButtonPressed : rankingButtonOn;

  return (
    <Pressable
      style={styles.rankingButtonContainer}
      onPress={rankingPressHandler}
      onPressIn={rankingPressInHandler}
      onPressOut={rankingPressOutHandler}
    >
      <Image source={imageOff} style={styles.rankingButton} />
      <Animated.View
        style={[styles.rankingButtonActive, { opacity: ButtonImage }]}
      >
        <Image source={imageOn} style={styles.rankingButton} />
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
  prevButton: {
    width: width * 0.067,
    height: width * 0.187,
  },
  nextButton: {
    width: width * 0.067,
    height: width * 0.187,
  },
  rankingButtonContainer: {
    width: width * 0.109,
    height: width * 0.12,
    padding: width * 0.013,
    alignItems: "flex-start",
  },
  rankingButton: {
    width: "100%",
    height: "100%",
  },
  rankingButtonActive: {
    position: "absolute",
    top: width * 0.013,
    left: width * 0.013,
    width: "100%",
    height: "100%",
  }
});
