import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import FaceIcon from "../face/FaceIcon";
import Colors from "../../constants/color";
import { JobType } from "../../types/job";

export interface Props {
  comment: string;
  name: string;
  iconType: JobType;
}

const Comment = ({ comment, name, iconType }: Props) => {
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
          <FaceIcon type={iconType} width={78} height={78} />
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
    color: Colors.textMainColor,
  },
});
