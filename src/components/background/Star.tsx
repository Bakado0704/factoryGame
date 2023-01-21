import { StyleSheet, Animated, View } from "react-native";
import React, { useRef, useEffect } from "react";
import { productType } from "../../types/product";

type Props = {
  activeProductWidth: number;
  activeProductHeight: number;
  productType: productType;
};

const Star = ({ activeProductWidth, activeProductHeight, productType }: Props) => {

  let LightAnim = useRef(new Animated.Value(0)).current;

  const lightOpacity1 = LightAnim.interpolate({
    inputRange: [0, 100, 101, 300],
    outputRange: [1, 1, 0, 0],
  });

  const lightOpacity2 = LightAnim.interpolate({
    inputRange: [0, 100, 101, 200, 201, 300],
    outputRange: [0, 0, 1, 1, 0, 0],
  });

  const lightOpacity3 = LightAnim.interpolate({
    inputRange: [0, 200, 201, 300],
    outputRange: [0, 0, 1, 1],
  });



  useEffect(() => {
    if (productType === "bonus") {
      Animated.loop(
        Animated.timing(LightAnim, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        })
      ).start();
    }
  }, [productType === "bonus"]);

  return (
    <View
      style={{
        width: activeProductWidth,
        height: activeProductHeight,
        position: "absolute",
      }}
    >
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity1, width: 35, height: 20, top: 0, left: 20 },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity1, width: 14, height: 8, bottom: 0, left: 0 },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity1,
            width: 21,
            height: 12,
            bottom: 0,
            right: 30,
          },
        ]}
      />

      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity2,
            width: 28,
            height: 16,
            bottom: 0,
            left: 50,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity2,
            width: 35,
            height: 20,
            bottom: 0,
            right: 0,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity2, width: 14, height: 8, top: -10, left: 60 },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity2, width: 21, height: 12, top: 0, right: 0 },
        ]}
      />

      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity3,
            width: 28,
            height: 16,
            top: -10,
            right: 40,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity3,
            width: 14,
            height: 8,
            bottom: 0,
            right: 80,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity3, width: 28, height: 16, top: 50, left: 0 },
        ]}
      />
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  light: {
    position: "absolute",
    width: "100%",
    bottom: "28.5%",
    alignItems: "center",
    justifyContent: "center",
  },
});
