import { Animated } from "react-native";
import React from "react";
import { UserIconType } from "../../types/userIcons";

type Props = {
  icon: UserIconType;
  width: Animated.AnimatedInterpolation<string | number> | number;
  height: Animated.AnimatedInterpolation<string | number> | number;
};

const UserIcon = ({ icon, width, height }: Props) => {
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
    <Animated.Image
      source={source}
      style={{ width: width, height: height }}
    />
  );
};

export default UserIcon;
