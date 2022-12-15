import { useRef } from "react";
import { Image, StyleSheet, Animated } from "react-native";

const ZimuPerson = () => {
  const iconAnim = useRef(new Animated.Value(0)).current;
  const iconZimu = iconAnim.interpolate({
    inputRange: [0, 1, 100, 101, 200],
    outputRange: ["38.6%", "38.9%", "38.9%", "38.6%", "38.6%"],
  });

  Animated.loop(
    Animated.timing(iconAnim, {
      toValue: 200,
      duration: 300,
      useNativeDriver: false,
    })
  ).start();

  return (
    <>
      <Animated.View style={[styles.iconContainer, { top: iconZimu }]}>
        <Image
          source={require("../../assets/icon/zimuPerson.png")}
          style={styles.iconImg}
        />
      </Animated.View>
    </>
  );
};

export default ZimuPerson;

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    width: 74,
    height: 61,
    left: "16%",
  },
  iconImg: {
    width: "100%",
    height: "100%",
  },
});
