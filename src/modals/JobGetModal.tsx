import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import ImageButton from "../components/ui/ImageButton";

type Props = {
  offModal: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const JobGet = ({ offModal }: Props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => !state);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <View style={styles.rootScreen}>
        <View style={styles.titleContainer}>
          <Text style={styles.youdead}>新しい勤務先をアンロックしました</Text>
          <Text style={styles.gameover}>You got a new work place!</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <ImageBackground source={require("../assets/background/bgOzasa.png")} style={styles.backgroundImg}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.resultText, {fontSize: 20}]}>会社名: </Text>
            <Text style={[styles.resultText, {fontSize: 25}]}>山川製作所</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.resultText, {fontSize: 20}]}>熟練度: </Text>
            <Text style={[styles.resultText, {fontSize: 20}]}> Lv1</Text>
          </View>
          <View style={styles.moneyContainer}>
            <Text style={[styles.resultText, {fontSize: 20}]}>基本給:</Text>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <Text style={[styles.resultText, {fontSize: 20}]}>15</Text>
          </View>
        </View>
        <View style={styles.reactionContainer}>
          <Image
            source={require("../assets/ui/bubble.png")}
            style={styles.bubble}
          />
          <View style={styles.commentContainer}>
            <Text style={styles.comment}>ビシバシ行くぞ!!</Text>
          </View>
          <View style={styles.iconContaner}>
            <Image
              source={require("../assets/icon/takaoOzasa.png")}
              style={state ? styles.icon : styles.iconActive}
            />
            <Text style={styles.position}>社長: 小篠隆生(65)</Text>
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
  imageContainer: {
    width: 300,
    height: 120,
    marginVertical: 10,
    overflow: "hidden",
  },
  backgroundImg: {
    width: "100%",
    height: 310,
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
    marginLeft: 8,
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
  line: {
    width: "100%",
    borderBottomColor: '#eeeeee',
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
  icon: {
    width: 78,
    height: 78,
  },
  iconActive: {
    width: 78,
    height: 78,
    transform: [{ translateY: 2 }],
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
