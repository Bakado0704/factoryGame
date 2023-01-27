import { View, StyleSheet, Image, Animated, Easing, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import ImageButton from "../components/button/ImageButton";
import { ShadowText } from "../components/text/ShadowText";
import Colors from "../constants/color";
import BgBlack from "../components/background/BgBlack";
import Stamina from "../components/game/Stamina";
import NavDrink from "../components/nav/NavMiddle/NavDrink";
import Title from "../components/modal/Title";
const { width } = Dimensions.get("window");

type Props = {
  drink: number;
  drinkCost: number;
  perMoney: number;
  offSetting: () => void;
  userDrinkHandler: (number: number) => void;
  NextButtonAnim: Animated.Value;
  PrevButtonAnim: Animated.Value;
};

const Setting = ({
  drink,
  drinkCost,
  offSetting,
  perMoney,
  NextButtonAnim,
  PrevButtonAnim,
  userDrinkHandler,
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
        <ShadowText size={width * 0.032} color="white">
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
          <Title title="集中力増強ドリンク" margintop={-width * 0.107} />
          <NavDrink
            drink={drink}
            userDrinkHandler={userDrinkHandler}
            ButtonAnim={ButtonAnim}
            PrevButtonAnim={PrevButtonAnim}
            NextButtonAnim={NextButtonAnim}
          />
          {attention}
          <View style={styles.CostContainer}>
            <View
              style={[
                styles.detailBackground,
                { backgroundColor: Colors.modalEdgeColor },
              ]}
            />
            <ShadowText size={width * 0.072} color="white">
              費用:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyCostImg}
            />
            <ShadowText size={width * 0.08} color={attentionColor}>
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
            <ShadowText size={width * 0.048} color="white">
              ゲージの速度:
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <ShadowText size={width * 0.048} color="white">
                {" "}
                ×1.0
              </ShadowText>
              <Image
                source={require("../assets/ui/arrow.png")}
                style={styles.arrowImg}
              />
              <ShadowText size={width * 0.048} color={Colors.textYellowColor}>
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
            <ShadowText size={width * 0.048} color="white">
              基本給:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={width * 0.053} color="white">
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
              <ShadowText size={width * 0.053} color={Colors.textYellowColor}>
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
            <ShadowText size={width * 0.048} color="white">
              メンタル:
            </ShadowText>
            <Stamina drink={drink} />
            <ShadowText size={width * 0.053} color="white">
              300
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <Image
                source={require("../assets/ui/arrow.png")}
                style={styles.arrowImg}
              />
              <ShadowText size={width * 0.053} color={Colors.textYellowColor}>
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
            width={width * 0.859}
            height={width * 0.139}
            diffWidth={width * 0.027}
            diffHeight={width * 0.004}
            padding={width * .013}
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
    padding: width * 0.053,
    top: 0,
    left: 0,
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: Colors.modalMainColor,
    width: "100%",
    padding: width * 0.027,
    paddingTop: width * 0.053,
    paddingBottom: width * 0.027,
    borderWidth: width * 0.008,
    borderColor: Colors.modalEdgeColor,
  },
  CostContainer: {
    width: "100%",
    height: width * 0.128,
    marginVertical: width * 0.013,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailContainer: {
    width: "100%",
    height: width * 0.085,
    marginVertical: width * 0.013,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: width * 0.027,
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
  },
  textInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moneyCostImg: {
    width: width * 0.096,
    height: width * 0.096,
    marginLeft: width * 0.021,
    marginRight: width * 0.011,
  },
  moneyImg: {
    width: width * 0.064,
    height: width * 0.064,
    marginLeft: width * 0.021,
    marginRight: width * 0.011,
  },
  arrowImg: {
    width: width * 0.037,
    height: width * 0.037,
    marginLeft: width * 0.021,
  },
  staminaImg: {
    width: width * 0.24,
    height: width * 0.08,
  },
  buttonContainer: {
    marginTop: width * 0.053,
    justifyContent: "center",
    alignItems: "center",
  }
});
