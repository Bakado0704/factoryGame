import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import ImageButton from "../components/button/ImageButton";
import { Outline } from "../types/outline";
import FaceIcon from "../components/face/FaceIcon";
import { JobType } from "../types/job";
const { width } = Dimensions.get("window");

type Props = {
  offModal: () => void;
  jobDecide: () => void;
  outline: Outline;
  owner: {
    name: string;
    message: string;
  };
  icon: JobType;
};

const JobModal = ({ offModal, jobDecide, outline, owner, icon }: Props) => {
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
    outputRange: [-width * 0.005, -width * 0.005, 0, 0],
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
      <View style={styles.background} />
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
                  <FaceIcon type={iconType} width={width * 0.149} height={width * 0.149} />
                </Animated.View>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: width * 0.032, color: "white", marginTop: -width * 0.021 },
                    ]}
                  >
                    社長: {ownerName}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: width * 0.04, color: "white", marginTop: -width * 0.027 },
                    ]}
                  >
                    {ownerMessage}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <Text style={[styles.text, { fontSize: width * 0.04, marginTop: width * 0.027 }]}>
              ～募集要項～
            </Text>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>会社名:</Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> {company}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>区分:</Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> {category}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>作業内容:</Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> {work}</Text>
            </View>
            <View style={styles.moneyContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>基本給:</Text>
              <Image
                source={require("../assets/ui/money1.png")}
                style={styles.moneyImg}
              />
              <Text style={[styles.text, { fontSize: width * 0.053 }]}>{basicMoney}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>熟練度:</Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> Lv{level}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>休日:</Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> {holiday}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>
                3年以内離職率:
              </Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> {retirement}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.text, { fontSize: width * 0.04 }]}>勤務地:</Text>
              <Text style={[styles.text, { fontSize: width * 0.053 }]}> {workplace}</Text>
            </View>
            <View style={styles.ButtonContainer}>
              <ImageButton
               source={button}
               onPress={jobDecide}
                width={width * 0.773}
                height={width * 0.141}
                diffWidth={width * 0.027}
                diffHeight={width * 0.005}
                padding={0}
              />
            </View>
          </View>
          <View style={styles.closeButton}>
            <ImageButton
              source={require("../assets/ui/closeButton.png")}
              onPress={offModal}
              width={width * 0.147}
              height={width * 0.147}
              diffWidth={width * 0.013}
              diffHeight={width * 0.013}
              padding={width * 0.013}
            />
          </View>
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
    paddingHorizontal: width * 0.08,
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
    borderRadius: width * 0.053,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: width * 0.331,
    alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    marginTop: width * 0.048,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: width * 0.149,
    height: width * 0.149,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    width: width * 0.147,
    height: width * 0.147,
    top: 0,
    right: 0,
    transform: [{ translateX: width * 0.04 }, { translateY: -width * 0.067 }],
    elevation: width * 0.027,
  },
  ButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: width * 0.027,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width * 0.011,
  },
  text: {
    fontFamily: "MochiyPop",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: width * 0.011,
  },
  moneyImg: {
    width: width * 0.072,
    height: width * 0.072,
    marginLeft: width * 0.021,
  },
});
