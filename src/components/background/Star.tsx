import { StyleSheet, Animated, View, Dimensions } from "react-native";
import React, { useRef, useEffect } from "react";
import { productType } from "../../types/product";
const { width } = Dimensions.get("window");

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
          { opacity: lightOpacity1, width: width * 0.093, height: width * 0.053, top: 0, left: width * 0.053 },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity1, width: width * 0.037, height: width * 0.021, bottom: 0, left: 0 },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity1,
            width: width * 0.056,
            height: width * 0.032,
            bottom: 0,
            right: width * 0.08,
          },
        ]}
      />

      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity2,
            width: width * 0.075,
            height: width * 0.043,
            bottom: 0,
            left: width * 0.133,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity2,
            width: width * 0.093,
            height: width * 0.053,
            bottom: 0,
            right: 0,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity2, width: width * 0.037, height: width * 0.021, top: -width * 0.027, left: width * 0.16 },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity2, width: width * 0.056, height: width * 0.032, top: 0, right: 0 },
        ]}
      />

      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity3,
            width: width * 0.075,
            height: width * 0.043,
            top: -width * 0.027,
            right: width * 0.107,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          {
            opacity: lightOpacity3,
            width: width * 0.037,
            height: width * 0.021,
            bottom: 0,
            right: width * 0.213,
          },
        ]}
      />
      <Animated.Image
        source={require("../../assets/ui/light.png")}
        style={[
          styles.light,
          { opacity: lightOpacity3, width: width * 0.075, height: width * 0.043, top: width * 0.133, left: 0 },
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
