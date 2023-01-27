import { useRef } from "react";
import { StyleSheet, Animated } from "react-native";

const ZimuPerson = () => {
  const iconAnim = useRef(new Animated.Value(0)).current;
  const nomuraRie = iconAnim.interpolate({
    inputRange: [0, 1, 100, 101, 200],
    outputRange: [0, -1, -1, 0, 0],
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
      <Animated.Image
        source={require("../../assets/icon/nomuraRie.png")}
        style={[styles.iconImg, { top: nomuraRie }]}
      />
    </>
  );
};

export default ZimuPerson;

const styles = StyleSheet.create({
  iconImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
  },
});