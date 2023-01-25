import { StyleSheet, Animated, Pressable, Image } from "react-native";
import { useRef } from "react";

type Props = {
  jobAddHandler: () => void;
};

const JobAddButton = ({ jobAddHandler }: Props) => {
  const ButtonAnim = useRef(new Animated.Value(0)).current;

  const ButtonImage = ButtonAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [0, 1, 1, 0],
  });

  Animated.loop(
    Animated.timing(ButtonAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Pressable
      style={styles.jobAddButtonContainer}
      onPress={jobAddHandler}
    >
      <Image
        source={require("../../assets/ui/jobAddButtonOff.png")}
        style={styles.jobAddButton}
      />
      <Animated.View
        style={[styles.jobAddButtonActive, { opacity: ButtonImage }]}
      >
        <Image
          source={require("../../assets/ui/jobAddButton.png")}
          style={styles.jobAddButton}
        />
      </Animated.View>
    </Pressable>
  );
};

export default JobAddButton;

const styles = StyleSheet.create({
  jobAddButtonContainer: {
    width: 105,
    height: 37,
    paddingLeft: 5,
    paddingTop: 5,
  },
  jobAddButton: {
    width: "100%",
    height: "100%",
  },
  jobAddButtonActive: {
    position: "absolute",
    top: 5,
    left: 5,
    width: "100%",
    height: "100%",
  }
});
