import { StyleSheet, Animated, Image } from "react-native";
import React, { useRef } from "react";
import { UserIconType } from "../../types/userIcon";

type Props = {
  icon: UserIconType;
  width: number;
  height: number;
};

const UserIcon = ({ icon, width, height }: Props) => {
  const iconAnim = useRef(new Animated.Value(0)).current;

  const iconY = iconAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [-1, -1, 0, 0],
  });

  Animated.loop(
    Animated.timing(iconAnim, {
      toValue: 200,
      duration: 300,
      useNativeDriver: false,
    })
  ).start();

  let source = require("../../assets/user/man1.png");

  switch (icon) {
    case "man1": {
      source = require("../../assets/user/man1.png");
      break;
    }
    case "man2": {
      source = require("../../assets/user/man2.png");
      break;
    }
    case "man3": {
      source = require("../../assets/user/man3.png");
      break;
    }
    case "man4": {
      source = require("../../assets/user/man4.png");
      break;
    }
    case "man5": {
      source = require("../../assets/user/man5.png");
      break;
    }
    case "man6": {
      source = require("../../assets/user/man6.png");
      break;
    }
    case "man7": {
      source = require("../../assets/user/man7.png");
      break;
    }
    case "man8": {
      source = require("../../assets/user/man8.png");
      break;
    }
    case "man9": {
      source = require("../../assets/user/man9.png");
      break;
    }
    case "man10": {
      source = require("../../assets/user/man10.png");
      break;
    }
    case "woman1": {
      source = require("../../assets/user/woman1.png");
      break;
    }
    case "woman2": {
      source = require("../../assets/user/woman2.png");
      break;
    }
    case "woman3": {
      source = require("../../assets/user/woman3.png");
      break;
    }
    case "woman4": {
      source = require("../../assets/user/woman4.png");
      break;
    }
    case "woman5": {
      source = require("../../assets/user/woman5.png");
      break;
    }
    case "woman6": {
      source = require("../../assets/user/woman6.png");
      break;
    }
    case "woman7": {
      source = require("../../assets/user/woman7.png");
      break;
    }
    case "woman8": {
      source = require("../../assets/user/woman8.png");
      break;
    }
    case "woman9": {
      source = require("../../assets/user/woman9.png");
      break;
    }
    case "woman10": {
      source = require("../../assets/user/woman10.png");
      break;
    }
  }

  return (
    <Image
      source={source}
      style={{ width: width, height: height }}
    />
  );
};

export default UserIcon;

const styles = StyleSheet.create({

});
