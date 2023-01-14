import { View, StyleSheet, Image, Text, Animated } from "react-native";
import React, { useRef } from "react";
import FaceIcon from "../components/face/FaceIcon";
import ImageButton from "../components/button/ImageButton";
import { IconType } from "../types/icon";
import Colors from "../constants/color";
import { ShadowText } from "../components/text/ShadowText";

type Props = {
  nowMoney: number;
  maxMoney: number;
  name: string;
  iconType: IconType;
  offModal: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Gameover = ({ offModal, nowMoney, maxMoney, name, iconType }: Props) => {
  const iconAnim = useRef(new Animated.Value(0)).current;

  const iconY = iconAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [-2, -2, 0, 0],
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
      <View style={styles.rootScreen}>
        <View style={styles.titleContainer}>
          <Text style={styles.youdead}>倒れてしまった…</Text>
          <Text style={styles.gameover}>GAMEOVER</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.modalTitleContanier}>
            <Image
              source={require("../assets/ui/modalTitle.png")}
              style={styles.modalTitleImg}
            />
            <View style={styles.modalTitleText}>
              <ShadowText size={20}>記録</ShadowText>
            </View>
          </View>
          <View style={{marginBottom: -20}}>
          <ShadowText size={14}>時給</ShadowText>
          </View>
          <View style={styles.resultOuterContainer}>
            <Image
              source={require("../assets/ui/modalBackgroundLight.png")}
              style={styles.modalBackgroundLight}
            />
            <View style={styles.resultInnerContainer}>
              <Image
                source={require("../assets/ui/money1.png")}
                style={styles.moneyBigImg}
              />
              <ShadowText size={60}>{nowMoney}</ShadowText>
            </View>
          </View>

          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={18}>成功回数:</ShadowText>
            <ShadowText size={20}> 0</ShadowText>
          </View>

          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={18}>最高記録:</ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={20}>{maxMoney}</ShadowText>
          </View>
        </View>
        <View style={styles.reactionContainer}>
          <Image
            source={require("../assets/ui/bubble.png")}
            style={styles.bubble}
          />
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>あーあって感じ</Text>
          </View>
          <View style={styles.iconContaner}>
            <Animated.View
              style={[styles.iconBox, { transform: [{ translateY: iconY }] }]}
            >
              <FaceIcon type={iconType} width={78} height={78} />
            </Animated.View>
            <Text style={styles.position}>社長: {name}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ImageButton
            source={require("../assets/ui/okButton.png")}
            onPress={offModal}
            style={styles.okButton}
          />
        </View>
      </View>
    </>
  );
};

export default Gameover;

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
  titleContainer: {
    width: "100%",
    alignItems: "center",
  },
  modalTitleContanier: {
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 37,
    marginTop: -27,
  },
  modalTitleImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalTitleText: {
    transform: [{ translateY: -2 }],
  },
  youdead: {
    fontSize: 30,
    color: "white",
    fontFamily: "MochiyPop",
  },
  gameover: {
    fontSize: 15,
    color: "white",
    fontFamily: "MochiyPop",
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: Colors.modalMainColor,
    width: "100%",
    marginTop: 20,
    padding: 10,
    paddingBottom: 35,
    borderWidth: 3,
    borderColor: Colors.modalEdgeColor,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resultOuterContainer: {
    width: 260,
    height: 106,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  resultInnerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  modalBackgroundLight: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  resultDetailContainer: {
    width: "100%",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resultBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
  },
  staminaContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  staminaInnerContainer: {
    alignItems: "center",
  },
  staminaContainerTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  staminaContainerBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  resultText: {
    fontSize: 20,
    fontFamily: "MochiyPop",
  },
  moneyImg: {
    width: 24,
    height: 24,
    marginLeft: 8,
    marginRight: 4,
  },
  moneyBigImg: {
    width: 60,
    height: 60,
    marginLeft: 8,
    marginRight: 4,
  },
  arrowImg: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  staminaImg: {
    width: 90,
    height: 30,
  },
  reactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    position: "relative",
  },
  bubble: {
    width: 300,
    height: 86,
  },
  iconContaner: {
    width: 300,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  iconBox: {
    width: 78,
    height: 78,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  position: {
    fontSize: 20,
    fontFamily: "MochiyPop",
    margin: 10,
    color: "white",
  },
  commentContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: "100%",
    height: 64,
  },
  comment: {
    fontSize: 15,
    fontFamily: "MochiyPop",
    color: Colors.textMainColor,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  okButton: {
    width: 322,
    height: 52,
  },
});
