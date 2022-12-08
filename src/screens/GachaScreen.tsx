import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Text,
  Animated,
  SafeAreaView,
  Easing,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import NavGacha from "../components/nav/NavGacha";
import NavHead from "../components/nav/NavHead";
import JobGet from "../modals/JobGetModal";

function GachaScreen() {
  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [envelopeSetting, setEnvelopeSetting] = useState(false);
  const [envelopeOpenedFirst, setEnvelopeIsOpenedFirst] = useState(false);
  const [gachaIsSetted, setGachaIsSetted] = useState(false);

  const modalSettingHandler = () => {
    setModalIsSetting(true);
    setEnvelopeSetting(true);
  };

  const animation = () => {
    sheetAnimation(),
      setTimeout(() => {
        setEnvelopeIsOpenedFirst(false);
        setGachaIsSetted(true);
      }, 3000);
  };

  const envelopeHandler = () => {
    setEnvelopeSetting(false);
    setEnvelopeIsOpenedFirst(true);
    animation();
  };

  const offModalHandler = () => {
    setModalIsSetting(false);
    setGachaIsSetted(false);
  };

  const iconAnim = useRef(new Animated.Value(0)).current;
  const envelopeAnim = useRef(new Animated.Value(0)).current;
  const envelopeTextAnim = useRef(new Animated.Value(0)).current;
  const sheetAnim = useRef(new Animated.Value(0)).current;

  const iconZimu = iconAnim.interpolate({
    inputRange: [0, 1, 100, 101, 200],
    outputRange: ["38.6%", "38.9%", "38.9%", "38.6%", "38.6%"],
  });

  const envelopeText = envelopeTextAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  const envelopeWidth = envelopeAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [268, 282, 268],
  });

  const envelopeHeight = envelopeAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [347, 364, 347],
  });

  const sheetY = sheetAnim.interpolate({
    inputRange: [0, 1000, 1001, 2000, 2001, 3000],
    outputRange: [-123, -123, -133, -133, -143, -143],
  });

  const sheetHeight = sheetAnim.interpolate({
    inputRange: [0, 1000, 1001, 2000, 2001, 3000],
    outputRange: [32, 32, 52, 52, 72, 72],
  });

  Animated.loop(
    Animated.timing(envelopeAnim, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: false,
    })
  ).start();

  Animated.loop(
    Animated.timing(envelopeTextAnim, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: false,
    })
  ).start();

  Animated.loop(
    Animated.timing(iconAnim, {
      toValue: 200,
      duration: 200,
      useNativeDriver: false,
    })
  ).start();

  const sheetAnimation = () => {
    Animated.sequence([
      Animated.loop(
        Animated.timing(sheetAnim, {
          toValue: 3000,
          duration: 3000,
          useNativeDriver: false,
        })
      ),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgGacha.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          <NavHead />
          <NavGacha onModal={modalSettingHandler} />
          <Animated.View style={[styles.iconContainer, { top: iconZimu }]}>
            <Image
              source={require("../assets/icon/zimuPerson.png")}
              style={styles.iconImg}
            />
          </Animated.View>
        </View>
        {modalIsSetting && <View style={styles.background} />}
        {modalIsSetting && envelopeSetting && (
          <View style={styles.envelopeContainer}>
            <Animated.Text style={[styles.text, { opacity: envelopeText }]}>
              タップして開封しよう
            </Animated.Text>
            <Animated.View
              style={[{ width: envelopeWidth }, { height: envelopeHeight }]}
            >
              <Pressable onPress={envelopeHandler}>
                <Image
                  source={require("../assets/ui/envelope.png")}
                  style={styles.envelopeOpen}
                />
              </Pressable>
            </Animated.View>
          </View>
        )}
        {modalIsSetting && envelopeOpenedFirst && (
          <View style={styles.envelopeContainer}>
            <Image
              source={require("../assets/ui/envelopeOpen.png")}
              style={styles.envelopeClosed}
            />
            {envelopeOpenedFirst && (
              <Animated.View
                style={[
                  styles.sheet,
                  { transform: [{ translateY: sheetY },{ translateX: 0.5}] },
                  { height: sheetHeight },
                ]}
              />
            )}
          </View>
        )}
        {modalIsSetting && gachaIsSetted && (
          <JobGet offModal={offModalHandler} />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

export default GachaScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
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
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "black",
  },
  text: {
    position: "absolute",
    top: "50%",
    fontSize: 20,
    fontFamily: "MochiyPop",
    margin: 10,
    color: "white",
    transform: [{ translateY: -240 }],
  },
  envelopeContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  envelopeOpen: {
    width: "100%",
    height: "100%",
  },
  envelopeClosed: {
    width: 373,
    height: 482,
  },
  sheet: {
    width: 207,
    height: 32,
    backgroundColor: "white",
    position: "absolute",
  },
});
