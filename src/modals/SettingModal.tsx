import { View, StyleSheet, Image, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import ImageButton from "../components/button/ImageButton";
import { ShadowText } from "../components/text/ShadowText";
import Colors from "../constants/color";
import BgBlack from "../components/background/BgBlack";
import Stamina from "../components/game/Stamina";
import NavDrink from "../components/nav/NavMiddle/NavDrink";
import Title from "../components/modal/Title";

type Props = {
  drink: number;
  drinkCost: number;
  perMoney: number;
  nextFlag: boolean;
  prevFlag: boolean;
  offSetting: () => void;
  userDrinkHandler: (number: number) => void;
  NextButtonAnim: Animated.Value;
  PrevButtonAnim: Animated.Value;
  prevPressInHandler: () => void;
  prevPressOutHandler: () => void;
  nextPressInHandler: () => void;
  nextPressOutHandler: () => void;
};

const Setting = ({
  drink,
  drinkCost,
  offSetting,
  perMoney,
  nextFlag,
  prevFlag,
  NextButtonAnim, 
  PrevButtonAnim,
  userDrinkHandler,
  prevPressInHandler,
  prevPressOutHandler,
  nextPressInHandler,
  nextPressOutHandler,
}: Props) => {
  const nextVelocity = (drink * 0.1 + 1).toFixed(1);
  const nextBasicmoney = Math.floor((drink * 0.2 + 1) * perMoney);
  const nextStamina = 300 - drink * 50;

  const ButtonAnim = useRef(new Animated.Value(0)).current;
  const TextAnim = useRef(new Animated.Value(0)).current;

  const TextOpacity = TextAnim.interpolate({
    inputRange: [0, 60, 160, 200],
    outputRange: [0, 1, 1, 0],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(ButtonAnim, {
        toValue: 400,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  Animated.loop(
    Animated.timing(TextAnim, {
      toValue: 200,
      duration: 1800,
      useNativeDriver: false,
    })
  ).start();

  let attention;
  let attentionColor = "white";
  if (drink > 0) {
    attention = (
      <Animated.View style={{ opacity: TextOpacity }}>
        <ShadowText size={12} color="white">
          注意:ゲーム開始時に毎回払います
        </ShadowText>
      </Animated.View>
    );
    attentionColor = Colors.textYellowColor;
  }

  return (
    <>
      <BgBlack />
      <View style={styles.rootScreen}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: Colors.modalMainColor,
              borderColor: Colors.modalEdgeColor,
            },
          ]}
        >
          <Title title="集中力増強ドリンク" margintop={-40} />
          <NavDrink
            drink={drink}
            userDrinkHandler={userDrinkHandler}
            prevPressInHandler={prevPressInHandler}
            prevPressOutHandler={prevPressOutHandler}
            nextPressInHandler={nextPressInHandler}
            nextPressOutHandler={nextPressOutHandler}
            ButtonAnim={ButtonAnim}
            PrevButtonAnim={PrevButtonAnim}
            NextButtonAnim={NextButtonAnim}
            nextFlag={nextFlag}
            prevFlag={prevFlag}
          />
          {attention}
          <View style={styles.CostContainer}>
            <View
              style={[
                styles.detailBackground,
                { backgroundColor: Colors.modalEdgeColor },
              ]}
            />
            <ShadowText size={27} color="white">
              費用:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyCostImg}
            />
            <ShadowText size={30} color={attentionColor}>
              {drinkCost}
            </ShadowText>
          </View>

          <View style={styles.detailContainer}>
            <View
              style={[
                styles.detailBackground,
                { backgroundColor: Colors.modalEdgeColor },
              ]}
            />
            <ShadowText size={18} color="white">
              ゲージの速度:
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <ShadowText size={18} color="white">
                {" "}
                ×1.0
              </ShadowText>
              <Image
                source={require("../assets/ui/arrow.png")}
                style={styles.arrowImg}
              />
              <ShadowText size={18} color={Colors.textYellowColor}>
                {" "}
                ×{nextVelocity}
              </ShadowText>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View
              style={[
                styles.detailBackground,
                { backgroundColor: Colors.modalEdgeColor },
              ]}
            />
            <ShadowText size={18} color="white">
              基本給:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={20} color="white">
              {perMoney}
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <Image
                source={require("../assets/ui/arrow.png")}
                style={styles.arrowImg}
              />
              <Image
                source={require("../assets/ui/money1.png")}
                style={styles.moneyImg}
              />
              <ShadowText size={20} color={Colors.textYellowColor}>
                {nextBasicmoney}
              </ShadowText>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View
              style={[
                styles.detailBackground,
                { backgroundColor: Colors.modalEdgeColor },
              ]}
            />
            <ShadowText size={18} color="white">
              メンタル:
            </ShadowText>
            <Stamina drink={drink} />
            <ShadowText size={20} color="white">
              300
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <Image
                source={require("../assets/ui/arrow.png")}
                style={styles.arrowImg}
              />
              <ShadowText size={20} color={Colors.textYellowColor}>
                {" "}
                {nextStamina}
              </ShadowText>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ImageButton
            source={require("../assets/ui/okButton.png")}
            onPress={offSetting}
            style={styles.okButton}
            padding={5}
          />
        </View>
      </View>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  rootScreen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    padding: 20,
    top: 0,
    left: 0,
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: Colors.modalMainColor,
    width: "100%",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderWidth: 3,
    borderColor: Colors.modalEdgeColor,
  },
  CostContainer: {
    width: "100%",
    height: 48,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailContainer: {
    width: "100%",
    height: 32,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
  },
  textInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moneyCostImg: {
    width: 36,
    height: 36,
    marginLeft: 8,
    marginRight: 4,
  },
  moneyImg: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 4,
  },
  arrowImg: {
    width: 14,
    height: 14,
    marginLeft: 8,
  },
  staminaImg: {
    width: 90,
    height: 30,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  okButton: {
    width: 322,
    height: 52,
  },
});
