import { StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { BackgroundType } from "../../types/background";

type Props = {
  type: BackgroundType;
  children: React.ReactNode;
};

const BackgroundImg = ({ type, children }: Props) => {
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

  return (
    <ImageBackground source={source} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImg;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
});
