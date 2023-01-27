import { View, StyleSheet, Image, Text, Animated, Dimensions } from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import Colors from "../constants/color";
import { ShadowText } from "../components/text/ShadowText";
import Comment from "../components/modal/Comment";
import Title from "../components/modal/Title";
import { JobType } from "../types/job";
const { width } = Dimensions.get("window");

type Props = {
  nowMoney: number;
  maxMoney: number;
  completeCount: number;
  name: string;
  iconType: JobType;
  message: string;
  offModal: () => void;
};

const Gameover = ({
  offModal,
  nowMoney,
  maxMoney,
  name,
  iconType,
  message,
  completeCount,
}: Props) => {
  return (
    <>
      <View style={styles.rootScreen}>
        <View style={styles.titleContainer}>
          <Text style={styles.youdead}>{message}</Text>
          <Text style={styles.gameover}>GAMEOVER</Text>
        </View>
        <View style={styles.innerContainer}>
          <Title title="記録" margintop={-width * 0.053} />
          <View style={styles.resultOuterContainer}>
            <Image
              source={require("../assets/ui/modalBackgroundLight.png")}
              style={[styles.modalBackgroundLight]}
            />

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: width * 0.107,
                marginBottom: -width * 0.04,
              }}
            >
              <ShadowText size={width * 0.037} color="white">
                時給
              </ShadowText>
              {nowMoney > maxMoney && nowMoney > 0 && (
                <View style={{ marginTop: -width * 0.008 }}>
                  <ShadowText size={width * 0.043} color={Colors.textYellowColor}>
                    新記録!
                  </ShadowText>
                </View>
              )}
            </View>

            <View style={styles.resultInnerContainer}>
              <Image
                source={require("../assets/ui/money1.png")}
                style={styles.moneyBigImg}
              />
              <ShadowText size={width * 0.133} color="white">
                {new Intl.NumberFormat().format(nowMoney)}
              </ShadowText>
            </View>
          </View>

          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={width * 0.048} color="white">
              成功回数:
            </ShadowText>
            <ShadowText size={width * 0.053} color="white">
              {" "}
              {completeCount}
            </ShadowText>
          </View>

          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={width * 0.048} color="white">
              最高記録:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={width * 0.053} color="white">
              {new Intl.NumberFormat().format(maxMoney)}
            </ShadowText>
          </View>
        </View>
        <Comment name={name} comment="あーあって感じ" iconType={iconType} />
        <View style={styles.buttonContainer}>
          <ImageButton
            source={require("../assets/ui/okButton.png")}
            onPress={offModal}
            width={width * 0.859}
            height={width * 0.139}
            diffWidth={width * 0.027}
            diffHeight={width * 0.004}
            padding={width * 0.013}
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
    padding: width * 0.053,
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
    fontSize: width * 0.059,
    color: "white",
    fontFamily: "MochiyPop",
  },
  gameover: {
    fontSize: width * 0.04,
    color: "white",
    fontFamily: "MochiyPop",
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: Colors.modalMainColor,
    width: "100%",
    marginTop: width * 0.067,
    paddingHorizontal: width * 0.027,
    paddingBottom: width * 0.093,
    borderWidth: width * 0.008,
    borderColor: Colors.modalEdgeColor,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resultOuterContainer: {
    width: width * 0.693,
    height: width * 0.336,
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
    width: width * 0.693,
    height: width * 0.283,
    opacity: 0.7,
    transform: [{ translateY: width * 0.027 }],
  },
  resultDetailContainer: {
    width: "100%",
    height: width * 0.085,
    marginVertical: width * 0.013,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resultBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: width * 0.027,
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
    marginVertical: width * 0.008,
  },
  resultText: {
    fontSize: width * 0.053,
    fontFamily: "MochiyPop",
  },
  moneyImg: {
    width: width * 0.064,
    height: width * 0.064,
    marginLeft: width * 0.021,
    marginRight: width * 0.011,
  },
  moneyBigImg: {
    width: width * 0.13,
    height: width * 0.13,
    marginLeft: width * 0.021,
    marginRight: width * 0.011,
  },
  arrowImg: {
    width: width * 0.053,
    height: width * 0.053,
    marginHorizontal: width * 0.021,
  },
  staminaImg: {
    width: width * 0.24,
    height: width * 0.08,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -width * 0.013,
  },
});
