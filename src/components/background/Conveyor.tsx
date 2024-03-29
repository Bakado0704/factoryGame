import { StyleSheet, Image, View } from "react-native";
import React, {useState, useEffect} from "react";
import { JobType } from "../../types/job";
import User from "../../models/user";
import { page } from "../../types/page";

type Props = {
  type: JobType;
  user: User;
};

const Conveyor = ({ type, user }: Props) => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    if (user.page === page.jobChange) {
      setOpacity(0);
    }
  }, [user.page === page.jobChange]);

  useEffect(() => {
    if (user.page !== page.jobChange) {
      setOpacity(1);
    }
  }, [user.page !== page.jobChange]);

  let conveyor = require("../../assets/conveyor/cvYamagawa.png");

  switch (type) {
    case "山川製作所": {
      conveyor = require("../../assets/conveyor/cvYamagawa.png");
      break;
    }
    case "蒼月": {
      conveyor = require("../../assets/conveyor/cvNiimori.png");
      break;
    }
    case "アッシュベリーInc": {
      conveyor = require("../../assets/conveyor/cvMiyako.png");
      break;
    }
    case "オリジン弁太郎": {
      conveyor = require("../../assets/conveyor/cvTsuji.png");
      break;
    }
    case "アグロン精密": {
      conveyor = require("../../assets/conveyor/cvLie.png");
      break;
    }
    case "スターフーズ": {
      conveyor = require("../../assets/conveyor/cvTakeuchi.png");
      break;
    }
    case "鹿賀水産": {
      conveyor = require("../../assets/conveyor/cvKuroguchi.png");
      break;
    }
    case "玉津アーセナル": {
      conveyor = require("../../assets/conveyor/cvYamashita.png");
      break;
    }
    case "小篠建設": {
      conveyor = require("../../assets/conveyor/cvOzasa.png");
      break;
    }
    case "タナベ建設": {
      conveyor = require("../../assets/conveyor/cvKamobayashi.png");
      break;
    }
  }

  return <Image source={conveyor} style={[styles.conveyor, {opacity: opacity}]} />;
};

export default Conveyor;

const styles = StyleSheet.create({
  conveyor: {
    position: "absolute",
    height: "42.2%",
    width: "100%",
    bottom: 0,
    left: 0,
  }
});
