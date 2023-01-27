import { Animated, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import FaceIcon from "../face/FaceIcon";
import Colors from "../../constants/color";
import { JobType } from "../../types/job";
const { width } = Dimensions.get("window");

export interface Props {
  comment: string;
  name: string;
  iconType: JobType;
}

const Comment = ({ comment, name, iconType }: Props) => {
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
    <View style={styles.reactionContainer}>
      <Image
        source={require("../../assets/ui/bubble.png")}
        style={styles.bubble}
      />
      <View style={styles.commentContainer}>
        <Text style={styles.comment}>{comment}</Text>
      </View>
      <View style={styles.iconContaner}>
        <Animated.View
          style={[styles.iconBox, { transform: [{ translateY: iconY }] }]}
        >
          <FaceIcon type={iconType} width={width * 0.208} height={width * 0.208} />
        </Animated.View>
        <Text style={styles.position}>社長: {name}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  reactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -width * 0.08,
    position: "relative",
  },
  bubble: {
    width: width * 0.8,
    height: width * 0.229,
  },
  iconContaner: {
    width: width * 0.8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  iconBox: {
    width: width * 0.208,
    height: width * 0.208,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  position: {
    fontSize: width * 0.053,
    fontFamily: "MochiyPop",
    margin: width * 0.027,
    color: "white",
  },
  commentContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: "100%",
    height: width * 0.171,
  },
  comment: {
    fontSize: width * 0.04,
    fontFamily: "MochiyPop",
    color: Colors.textMainColor,
  },
});
