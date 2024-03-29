import { Image } from "react-native";
import React from "react";
import { JobType } from "../../types/job";

type Props = {
  type: JobType;
  width: number;
  height: number;
};

const FaceIcon = ({ type, width, height }: Props) => {
  let source = require("../../assets/icon/tetsurouYamagawa.png");

  switch (type) {
    case "山川製作所": {
      source = require("../../assets/icon/tetsurouYamagawa.png");
      break;
    }
    case "蒼月": {
      source = require("../../assets/icon/sinNiimori.png");
      break;
    }
    case "アッシュベリーInc": {
      source = require("../../assets/icon/youheiMiyako.png");
      break;
    }
    case "オリジン弁太郎": {
      source = require("../../assets/icon/fumiyaTsuji.png");
      break;
    }
    case "アグロン精密": {
      source = require("../../assets/icon/haorannLie.png");
      break;
    }
    case "スターフーズ": {
      source = require("../../assets/icon/gennnoshinnTakeuchi.png");
      break;
    }
    case "鹿賀水産": {
      source = require("../../assets/icon/takashiKuroguchi.png");
      break;
    }
    case "玉津アーセナル": {
      source = require("../../assets/icon/gorouYamashita.png");
      break;
    }
    case "小篠建設": {
      source = require("../../assets/icon/takaoOzasa.png");
      break;
    }
    case "タナベ建設": {
      source = require("../../assets/icon/yutaKamobayashi.png");
      break;
    }
  }

  return <Image source={source} style={{ width: width, height: height }} />;
};

export default FaceIcon;
