import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import { Job } from "../types/job";
import CompanyImg from "../components/background/CompanyImg";
import Comment from "../components/modal/Comment";
import Colors from "../constants/color";
import { ShadowText } from "../components/text/ShadowText";
import Title from "../components/modal/Title";

type Props = {
  offModal: () => void;
  job: Job;
};

const JobGet = ({ offModal, job }: Props) => {
  const prevJob = JSON.stringify(job);

  const name = job.name;
  const level = job.level;
  const prevLevel = JSON.parse(prevJob).level;
  const perMoney = job.perMoney;
  const prevPerMoney = JSON.parse(prevJob).perMoney;
  const ownerName = job.owner.name;
  const icon = job.icon;
  const BackgroundImg = job.backgroundImg;
  const isActive = JSON.parse(prevJob).isActive;

  return (
    <>
      <View style={styles.rootScreen}>
        {!isActive && (
          <View style={styles.titleContainer}>
            <Text style={styles.youdead}>新しい勤務先をアンロックしました</Text>
            <Text style={styles.gameover}>You got a new work place!</Text>
          </View>
        )}
        {isActive && (
          <View style={styles.titleContainer}>
            <Text style={styles.youdead}>熟練度が上がりました</Text>
            <Text style={styles.gameover}>You got a new skill!</Text>
          </View>
        )}
        <View style={styles.innerContainer}>
          <Title title={name} />
          <View style={styles.imageContainer}>
            <CompanyImg type={BackgroundImg} />
          </View>
          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={18} color="white">
              熟練度:
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <ShadowText size={18} color="white">
                {" "}
                Lv{prevLevel}
              </ShadowText>
              {isActive && (
                <Image
                  source={require("../assets/ui/arrow.png")}
                  style={styles.arrowImg}
                />
              )}
              {isActive && (
                <ShadowText size={18} color="red">
                  {" "}
                  Lv{level}
                </ShadowText>
              )}
            </View>
          </View>
          <View style={styles.resultDetailContainer}>
            <View style={styles.resultBackground} />
            <ShadowText size={18} color="white">
              基本給:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={20} color="white">
              {prevPerMoney}
            </ShadowText>
            <View style={styles.textInnerContainer}>
              {isActive && (
                <Image
                  source={require("../assets/ui/arrow.png")}
                  style={styles.arrowImg}
                />
              )}
              {isActive && (
                <Image
                  source={require("../assets/ui/money1.png")}
                  style={styles.moneyImg}
                />
              )}
              {isActive && (
                <ShadowText size={20} color="red">
                  {perMoney}
                </ShadowText>
              )}
            </View>
          </View>
        </View>
        <Comment
          name={ownerName}
          comment="ウチは厳しいぞ、置いてかれるなよ!!"
          iconType={icon}
        />
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

export default JobGet;

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
  youdead: {
    fontSize: 20,
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
    paddingTop: 15,
    paddingBottom: 35,
    borderWidth: 3,
    borderColor: Colors.modalEdgeColor,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  textInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 120,
    marginVertical: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.modalEdgeColor,
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
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
  arrowImg: {
    width: 14,
    height: 14,
    marginLeft: 8,
  },
  staminaImg: {
    width: 90,
    height: 30,
  },
  line: {
    width: "100%",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 2,
    marginVertical: 5,
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
