import { View, StyleSheet, Image, Text, Animated } from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import { IconType } from "../types/icon";
import Colors from "../constants/color";
import { ShadowText } from "../components/text/ShadowText";
import Comment from "../components/modal/Comment";
import Title from "../components/modal/Title";

type Props = {
  nowMoney: number;
  maxMoney: number;
  completeCount: number;
  name: string;
  iconType: IconType;
  offModal: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Gameover = ({
  offModal,
  nowMoney,
  maxMoney,
  name,
  iconType,
  completeCount,
}: Props) => {

  return (
    <>
      <View style={styles.rootScreen}>
        <View style={styles.titleContainer}>
          <Text style={styles.youdead}>倒れてしまった…</Text>
          <Text style={styles.gameover}>GAMEOVER</Text>
        </View>
        <View style={styles.innerContainer}>
          <Title title="記録" margintop={-20} />
          <View style={styles.resultOuterContainer}>
            <Image
              source={require("../assets/ui/modalBackgroundLight.png")}
              style={[styles.modalBackgroundLight]}
            />

            <View style={{ justifyContent: "center", alignItems: "center", height: 40, marginBottom: -15}}>
              <ShadowText size={14} color="white">時給</ShadowText>
              {nowMoney === maxMoney && nowMoney > 0 && (
                <View style={{marginTop: -3}}>
                  <ShadowText size={16} color={Colors.textYellowColor}>新記録!</ShadowText>
                </View>
              )}
            </View>
            
            <View style={styles.resultInnerContainer}>
              <Image
                source={require("../assets/ui/money1.png")}
                style={styles.moneyBigImg}
              />
              <ShadowText size={60} color="white">{nowMoney}</ShadowText>
            </View>
          </View>

          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={18} color="white">成功回数:</ShadowText>
            <ShadowText size={20} color="white"> {completeCount}</ShadowText>
          </View>

          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={18} color="white">最高記録:</ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={20} color="white">{maxMoney}</ShadowText>
          </View>
        </View>
        <Comment name={name} comment="あーあって感じ" iconType={iconType} />
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
  modalTitleImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
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
    marginTop: 25,
    paddingHorizontal: 10,
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
    height: 126,
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
    width: 260,
    height: 106,
    opacity: 0.7,
    transform: [{ translateY: 10}]
  },
  resultDetailContainer: {
    width: "100%",
    height: 32,
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  okButton: {
    width: 322,
    height: 52,
  },
});
