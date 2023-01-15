import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import { Job } from "../types/job";
import CompanyImg from "../components/background/CompanyImg";
import Comment from "../components/modal/Comment";
import Colors from "../constants/color";
import { ShadowText } from "../components/text/ShadowText";
import Title from "../components/modal/Title";
import JobTitle from "../components/modal/JobTitle";

type Props = {
  offModal: () => void;
  job: Job;
};

const JobGet = ({ offModal, job }: Props) => {
  const name = job.name;
  const level = job.level + 1;
  const prevLevel = job.level;
  const perMoney = job.perMoney[level - 1];
  const prevPerMoney = job.perMoney[prevLevel - 1];
  const ownerName = job.owner.name;
  const icon = job.icon;
  const BackgroundImg = job.backgroundImg;
  const isActive = job.isActive;

  let headColor = Colors.yamagawaHeadColor;
  let mainColor = Colors.yamagawaMainColor;
  let borderColor = Colors.yamagawaBorderColor;

  switch (name) {
    case "山川製作所": {
      headColor = Colors.yamagawaHeadColor;
      mainColor = Colors.yamagawaMainColor;
      borderColor = Colors.yamagawaBorderColor;
      break;
    }
    case "蒼月": {
      headColor = Colors.souzukiHeadColor;
      mainColor = Colors.souzukiMainColor;
      borderColor = Colors.souzukiBorderColor;
      break;
    }
    case "アッシュベリーInc": {
      headColor = Colors.ashBerryHeadColor;
      mainColor = Colors.ashBerryMainColor;
      borderColor = Colors.ashBerryBorderColor;
      break;
    }
    case "オリジン弁太郎": {
      headColor = Colors.bentaroHeadColor;
      mainColor = Colors.bentaroMainColor;
      borderColor = Colors.bentaroBorderColor;
      break;
    }
    case "アグロン精密": {
      headColor = Colors.aguronHeadColor;
      mainColor = Colors.aguronMainColor;
      borderColor = Colors.aguronBorderColor;
      break;
    }
    case "スターフーズ": {
      headColor = Colors.starFoodsHeadColor;
      mainColor = Colors.starFoodsMainColor;
      borderColor = Colors.starFoodsBorderColor;
      break;
    }
    case "鹿賀水産": {
      headColor = Colors.sikagaHeadColor;
      mainColor = Colors.sikagaMainColor;
      borderColor = Colors.sikagaBorderColor;
      break;
    }
    case "玉津アーセナル": {
      headColor = Colors.tamazuHeadColor;
      mainColor = Colors.tamazuMainColor;
      borderColor = Colors.tamazuBorderColor;
      break;
    }
    case "小篠建設": {
      headColor = Colors.ozasaHeadColor;
      mainColor = Colors.ozasaMainColor;
      borderColor = Colors.ozasaBorderColor;
      break;
    }
    case "タナベ建設": {
      headColor = Colors.tanabeHeadColor;
      mainColor = Colors.tanabeMainColor;
      borderColor = Colors.tanabeBorderColor;
      break;
    }
  }

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
        <View style={[styles.innerContainer, {backgroundColor: mainColor, borderColor: borderColor}]}>
          <JobTitle title={name} headColor={headColor} borderColor={borderColor}/>
          <View style={[styles.imageContainer, {borderColor: borderColor}]}>
            <CompanyImg type={BackgroundImg} />
          </View>
          <View style={styles.resultDetailContainer}>
            <View style={[styles.resultBackground, {backgroundColor: borderColor}]} />
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
            <View style={[styles.resultBackground, {backgroundColor: borderColor}]} />
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
    width: "100%",
    marginTop: 20,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 35,
    borderWidth: 3,
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
