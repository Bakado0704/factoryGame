import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import { Job } from "../types/job";
import CompanyImg from "../components/background/CompanyImg";
import Comment from "../components/modal/Comment";
import Colors from "../constants/color";
import { ShadowText } from "../components/text/ShadowText";
import JobTitle from "../components/modal/JobTitle";
const { width } = Dimensions.get("window");

type Props = {
  offModal: () => void;
  job: Job;
};

const JobGet = ({ offModal, job }: Props) => {
  const name = job.name;
  const level = job.level + 1;
  const prevLevel = job.level;
  const ownerName = job.owner.name;
  const icon = job.icon;
  const BackgroundImg = job.backgroundImg;
  const isActive = job.isActive;

  let perMoney = job.perMoney[level - 1];
  let prevPerMoney = job.perMoney[prevLevel - 1];
  
  let headColor = Colors.yamagawaHeadColor;
  let mainColor = Colors.yamagawaMainColor;
  let borderColor = Colors.yamagawaBorderColor;

  if (level >= 10) {
    perMoney = job.perMoney[9] + level - 10;
    prevPerMoney = job.perMoney[9] + prevLevel - 10;
  }

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
            <Text style={styles.gameover}>You've got a new work place!</Text>
          </View>
        )}
        {isActive && (
          <View style={styles.titleContainer}>
            <Text style={styles.youdead}>熟練度が上がりました</Text>
            <Text style={styles.gameover}>You've got a new skill!</Text>
          </View>
        )}
        <View style={[styles.innerContainer, {backgroundColor: mainColor, borderColor: borderColor}]}>
          <JobTitle title={name} headColor={headColor} borderColor={borderColor}/>
          <View style={[styles.imageContainer, {borderColor: borderColor}]}>
            <CompanyImg type={BackgroundImg} />
          </View>
          <View style={styles.resultDetailContainer}>
            <View style={[styles.resultBackground, {backgroundColor: borderColor}]} />
            <ShadowText size={width * 0.048} color="white">
              熟練度:
            </ShadowText>
            <View style={styles.textInnerContainer}>
              <ShadowText size={width * 0.048} color="white">
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
                <ShadowText size={width * 0.048} color={Colors.textYellowColor}>
                  {" "}
                  Lv{level}
                </ShadowText>
              )}
            </View>
          </View>
          <View style={styles.resultDetailContainer}>
            <View style={[styles.resultBackground, {backgroundColor: borderColor}]} />
            <ShadowText size={width * 0.048} color="white">
              基本給:
            </ShadowText>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <ShadowText size={width * 0.053} color="white">
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
                <ShadowText size={width * 0.053} color={Colors.textYellowColor}>
                  {perMoney}
                </ShadowText>
              )}
            </View>
          </View>
        </View>
        <Comment
          name={ownerName}
          comment={{comment: "ウチは厳しいぞ、置いてかれるなよ!!", duration: 300}}
          iconType={icon}
        />
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

export default JobGet;

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
    width: "100%",
    marginTop: width * 0.053,
    padding: width * 0.027,
    paddingTop: width * 0.04,
    paddingBottom: width * 0.093,
    borderWidth: width * 0.008,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width * 0.011,
  },
  textInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.32,
    marginVertical: width * 0.027,
    overflow: "hidden",
    borderWidth: width * 0.005,
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width * 0.011,
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
    opacity: 0.5,
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
  arrowImg: {
    width: width * 0.037,
    height: width * 0.037,
    marginLeft: width * 0.021,
  },
  staminaImg: {
    width: width * 0.24,
    height: width * 0.08,
  },
  line: {
    width: "100%",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: width * 0.005,
    marginVertical: width * 0.013,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -width * 0.013,
  }
});
