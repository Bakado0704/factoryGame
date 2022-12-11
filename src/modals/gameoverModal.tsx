import { View, StyleSheet, Image, Text, Animated } from "react-native";
import React, { useRef } from "react";
import ImageButton from "../components/ui/ImageButton";
import { store } from "../store/redux/store";
import FaceIcon from "../components/icon/FaceIcon";
import { useSelector } from "react-redux";

type Props = {
  offModal: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Gameover = ({ offModal }: Props) => {
  const iconAnim = useRef(new Animated.Value(0)).current;

  const iconY = iconAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [-2, -2, 0, 0],
  });

  const name = useSelector((state) => state.job.job.owner.name);
  const iconType = useSelector((state) => state.job.job.icon);

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
          <View>
            <Text style={[styles.resultText, { fontSize: 20 }]}>～記録～</Text>
          </View>
          <View style={styles.line} />
          <Text style={[styles.resultText, { fontSize: 15, color: "red" }]}>
            新記録
          </Text>
          <View style={styles.numberContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>
              成功回数:{" "}
            </Text>
            <Text style={[styles.resultText, { fontSize: 25 }]}>25</Text>
          </View>
          <View style={styles.line} />
          <Text style={[styles.resultText, { fontSize: 15, color: "red" }]}>
            新記録
          </Text>
          <View style={styles.moneyContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>時給:</Text>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <Text style={[styles.resultText, { fontSize: 25 }]}>340</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.staminaContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>
              メンタル:{" "}
            </Text>
            <View style={styles.staminaInnerContainer}>
              <View style={styles.staminaContainerTop}>
                <Text style={[styles.resultText, { fontSize: 20 }]}>310</Text>
                <Image
                  source={require("../assets/ui/arrow.png")}
                  style={styles.arrowImg}
                />
                <Text style={[styles.resultText, { fontSize: 20 }]}>315</Text>
              </View>
              <View style={styles.staminaContainerBottom}>
                <Image
                  source={require("../assets/ui/stamina.png")}
                  style={styles.staminaImg}
                />
                <Text
                  style={[styles.resultText, { fontSize: 15, color: "red" }]}
                >
                  {" "}
                  (+5)
                </Text>
              </View>
            </View>
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
              <FaceIcon type={iconType} width={78} height={78}/>
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
    backgroundColor: "white",
    width: "100%",
    marginTop: 10,
    padding: 10,
    paddingBottom: 35,
    borderRadius: 32,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    width: 34,
    height: 34,
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
