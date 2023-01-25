import { useRef } from "react";
import { Image, StyleSheet, Animated, View } from "react-native";

const JudgeLightSuccess = () => {
  const lightAnim = useRef(new Animated.Value(0)).current;
  const lightOpacity = lightAnim.interpolate({
    inputRange: [0, 70, 71, 100],
    outputRange: [1, 1, 0, 0],
  });

  Animated.loop(
    Animated.timing(lightAnim, {
      toValue: 100,
      duration: 200,
      useNativeDriver: false,
    })
  ).start();

  return (
    <Animated.View style={[styles.judge, { opacity: lightOpacity }]}>
      <Image
        source={require("../../assets/ui/judgeSuccess.png")}
        style={styles.lightImg}
      />
    </Animated.View>
  );
};

export default JudgeLightSuccess;

const styles = StyleSheet.create({
  judge: {
    position: "absolute",
    height: 23,
    width: 23,
    bottom: 69,
    right: 56,
  },
  lightImg: {
    width: "100%",
    height: "100%",
  },
});
