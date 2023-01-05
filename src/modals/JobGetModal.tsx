import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
} from "react-native";
import React from "react";
import { useRef } from "react";
import ImageButton from "../components/button/ImageButton";
import { Job } from "../types/job";
import FaceIcon from "../components/face/FaceIcon";
import CompanyImg from "../components/background/CompanyImg"

type Props = {
  offModal: () => void;
  jobUpdate: (job: Job) => void;
  job: Job;
};

const JobGet = ({ offModal, job, jobUpdate }: Props) => {
  const prevJob = JSON.stringify(job)

  jobUpdate(job);

  const name = job.name;
  const level = job.level;
  const prevLevel = JSON.parse(prevJob).level;
  const perMoney = job.perMoney;
  const prevPerMoney = JSON.parse(prevJob).perMoney;
  const ownerName = job.owner.name;
  const icon = job.icon;
  const BackgroundImg = job.backgroundImg;
  const isActive = JSON.parse(prevJob).isActive;

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
        {!isActive && <View style={styles.titleContainer}>
          <Text style={styles.youdead}>新しい勤務先をアンロックしました</Text>
          <Text style={styles.gameover}>You got a new work place!</Text>
        </View>}
        {isActive && <View style={styles.titleContainer}>
          <Text style={styles.youdead}>熟練度が上がりました</Text>
          <Text style={styles.gameover}>You got a new skill!</Text>
        </View>}
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <CompanyImg type={BackgroundImg}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>会社名: </Text>
            <Text style={[styles.resultText, { fontSize: 25 }]}>{name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>熟練度: </Text>
              <View style={styles.textInnerContainer}>
                <Text style={[styles.resultText, { fontSize: 20 }]}> Lv{prevLevel}</Text>
                {isActive && <Image
                  source={require("../assets/ui/arrow.png")}
                  style={styles.arrowImg}
                 />}
                {isActive && <Text style={[styles.resultText, { fontSize: 20, color: "red" }]}>Lv{level}</Text>}
              </View>
          </View>
          <View style={styles.moneyContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>基本給: </Text>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <Text style={[styles.resultText, { fontSize: 20 }]}>
              {prevPerMoney}
            </Text>
            <View style={styles.textInnerContainer}>
                {isActive && <Image
                  source={require("../assets/ui/arrow.png")}
                  style={styles.arrowImg}
                 />}
                {isActive && <Image
                  source={require("../assets/ui/money1.png")}
                  style={styles.moneyImg}
                />}
                {isActive && <Text style={[styles.resultText, { fontSize: 20, color: "red" }]}>
                  {perMoney}
                </Text>}
              </View>
          </View>
        </View>
        <View style={styles.reactionContainer}>
          <Image
            source={require("../assets/ui/bubble.png")}
            style={styles.bubble}
          />
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>
              ウチは厳しいぞ、置いてかれるなよ!!
            </Text>
          </View>
          <View style={styles.iconContaner}>
            <Animated.View
              style={[styles.iconBox, { transform: [{ translateY: iconY }] }]}
            >
              <FaceIcon width={78} height={78} type={icon} />
            </Animated.View>
            <Text style={styles.position}>社長: {ownerName}</Text>
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
    backgroundColor: "white",
    width: "100%",
    marginTop: 10,
    padding: 10,
    paddingBottom: 35,
    borderRadius: 32,
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
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  resultText: {
    fontSize: 20,
    fontFamily: "MochiyPop",
  },
  moneyImg: {
    width: 27,
    height: 27,
  },
  arrowImg: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
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
