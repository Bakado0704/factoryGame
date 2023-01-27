import { StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { JobType } from "../../types/job";
const { width } = Dimensions.get("window");

type Props = {
  type: JobType;
};

const companyImg = ({ type }: Props) => {
  let source = require("../../assets/background/bgYamagawa.png");

  switch (type) {
    case "山川製作所": {
      source = require("../../assets/background/bgYamagawa.png");
      break;
    }
    case "蒼月": {
      source = require("../../assets/background/bgNiimori.png");
      break;
    }
    case "アッシュベリーInc": {
      source = require("../../assets/background/bgMiyako.png");
      break;
    }
    case "オリジン弁太郎": {
      source = require("../../assets/background/bgTsuji.png");
      break;
    }
    case "アグロン精密": {
      source = require("../../assets/background/bglie.png");
      break;
    }
    case "スターフーズ": {
      source = require("../../assets/background/bgTakeuchi.png");
      break;
    }
    case "鹿賀水産": {
      source = require("../../assets/background/bgKuroguchi.png");
      break;
    }
    case "玉津アーセナル": {
      source = require("../../assets/background/bgYamashita.png");
      break;
    }
    case "小篠建設": {
      source = require("../../assets/background/bgOzasa.png");
      break;
    }
    case "タナベ建設": {
      source = require("../../assets/background/bgKamobayashi.png");
      break;
    }
  }

  return <Image source={source} style={styles.board} />;
};

export default companyImg;

const styles = StyleSheet.create({
  board: {
    width: "100%",
    height: width * 0.826,
  },
});
