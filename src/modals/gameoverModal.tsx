import { View, StyleSheet, Image, Text, Animated } from "react-native";
import React, { useRef } from "react";
import FaceIcon from "../components/typeui/FaceIcon";
import ImageButton from "../components/ui/ImageButton";
import { IconType } from "../types/icon";

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
          <View>
            <Text style={[styles.resultText, { fontSize: 20 }]}>～記録～</Text>
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
            <Text
              style={[
                styles.resultText,
                { fontSize: 25, marginLeft: 5 },
              ]}
            >
              {nowMoney}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.moneyContainer}>
            <Text style={[styles.resultText, { fontSize: 20 }]}>最高記録:</Text>
            <Image
              source={require("../assets/ui/money1.png")}
              style={styles.moneyImg}
            />
            <Text
              style={[
                styles.resultText,
                { fontSize: 25,  marginLeft: 5 },
              ]}
            >
              {maxMoney}
            </Text>
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
