import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import ImageButton from "../components/ui/ImageButton";
import { Outline } from "../types/outline";
import FaceIcon from "../components/typeui/FaceIcon";
import { IconType } from "../types/icon";

type Props = {
  offModal: () => void;
  jobDecide: () => void;
  outline: Outline;
  owner: {
    name: string;
    message: string;
  };
  icon: IconType;
};

const JobModal = ({
  offModal,
  jobDecide,
  outline,
  owner,
  icon,
}: Props) => {
  const company = outline.company;
  const category = outline.category;
  const work = outline.work;
  const basicMoney = outline.basicMoney;
  const level = outline.level;
  const holiday = outline.holiday;
  const retirement = outline.retirement;
  const workplace = outline.workplace;
  const background = outline.background;
  const button = outline.button;
  const ownerName = owner.name;
  const ownerMessage = owner.message;
  const iconType = icon;

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
      <View style={styles.background}></View>
      <View style={styles.rootScreen}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
              <ImageBackground
                source={background}
                style={styles.ImageBackground}
                resizeMode="cover"
              >
                <Animated.View
                  style={[
                    styles.iconContainer,
                    { transform: [{ translateY: iconY }] },
                  ]}
                >
                  <FaceIcon type={iconType} width={56} height={56} />
                </Animated.View>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 12, color: "white", marginTop: -8 },
                    ]}
                  >
                    社長: {ownerName}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 15, color: "white", marginTop: -10 },
                    ]}
                  >
                    {ownerMessage}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <Text style={[styles.text, { fontSize: 15, marginTop: 10 }]}>
              ～募集要項～
            </Text>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>会社名:</Text>
              <Text style={[styles.text, { fontSize: 20 }]}> {company}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>区分:</Text>
              <Text style={[styles.text, { fontSize: 20 }]}> {category}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>作業内容:</Text>
              <Text style={[styles.text, { fontSize: 20 }]}> {work}</Text>
            </View>
            <View style={styles.moneyContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>基本給:</Text>
              <Image
                source={require("../assets/ui/money1.png")}
                style={styles.moneyImg}
              />
              <Text style={[styles.text, { fontSize: 20 }]}>{basicMoney}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>熟練度:</Text>
              <Text style={[styles.text, { fontSize: 20 }]}> Lv{level}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>休日:</Text>
              <Text style={[styles.text, { fontSize: 20 }]}> {holiday}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>
                3年以内離職率:
              </Text>
              <Text style={[styles.text, { fontSize: 20 }]}> {retirement}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: 15 }]}>勤務地:</Text>
              <Text style={[styles.text, { fontSize: 20 }]}> {workplace}</Text>
            </View>
            <View style={styles.ButtonContainer}>
              <ImageButton
                source={button}
                onPress={jobDecide}
                style={styles.jobDecideButton}
              />
            </View>
          </View>
          <ImageButton
            source={require("../assets/ui/closeButton.png")}
            onPress={offModal}
            style={styles.closeButton}
          />
        </View>
      </View>
    </>
  );
};

export default JobModal;

const styles = StyleSheet.create({
  rootScreen: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "black",
  },
  outerContainer: {
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: 124,
    alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 56,
    height: 56,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    width: 55,
    height: 55,
    top: 0,
    right: 0,
    transform: [{ translateX: 20 }, { translateY: -550 }],
    elevation: 10,
  },
  ButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  jobDecideButton: {
    width: 290,
    height: 53,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  text: {
    fontFamily: "MochiyPop",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  moneyImg: {
    width: 27,
    height: 27,
    marginLeft: 8,
  },
});
