import { StyleSheet, Image } from "react-native";
import React from "react";
import { JobType } from "../../types/job";

type Props = {
  type: JobType;
};

const BoardImg = ({ type }: Props) => {
  let source = require("../../assets/signboard/yamagawaBoard.png");

  switch (type) {
    case "山川製作所": {
      source = require("../../assets/signboard/yamagawaBoard.png");
      break;
    }
    case "蒼月": {
      source = require("../../assets/signboard/niimoriBoard.png");
      break;
    }
    case "アッシュベリーInc": {
      source = require("../../assets/signboard/miyakoBoard.png");
      break;
    }
    case "オリジン弁太郎": {
      source = require("../../assets/signboard/tsujiBoard.png");
      break;
    }
    case "アグロン精密": {
      source = require("../../assets/signboard/lieBoard.png");
      break;
    }
    case "スターフーズ": {
      source = require("../../assets/signboard/takeuchiBoard.png");
      break;
    }
    case "鹿賀水産": {
      source = require("../../assets/signboard/kuroguchiBoard.png");
      break;
    }
    case "玉津アーセナル": {
      source = require("../../assets/signboard/yamashitaBoard.png");
      break;
    }
    case "小篠建設": {
      source = require("../../assets/signboard/ozasaBoard.png");
      break;
    }
    case "タナベ建設": {
      source = require("../../assets/signboard/kamobayashiBoard.png");
      break;
    }
  }

  return (
    <Image source={source} style={styles.board}/>
  );
};

export default BoardImg;

const styles = StyleSheet.create({
  board: {
    width: 222,
    height: 60,
    marginHorizontal: 10,
  },
});
