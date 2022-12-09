import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { BackgroundType } from "../../types/background";
import { useSelector } from "react-redux";

type Props = {
  type: BackgroundType;
};

const Product = ({ type }: Props) => {
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

  const activeProductFirst = useSelector(
    (state) => state.activeProduct.product.default[2].before
  );
  const activeProductWidth = useSelector(
    (state) => state.activeProduct.product.style.width
  );
  const activeProductHeight = useSelector(
    (state) => state.activeProduct.product.style.height
  );

  return (
    <>
      <Image source={conveyor} style={styles.conveyor} />
      <View style={styles.productBox}>
        <Image
          source={activeProductFirst}
          style={{ width: activeProductWidth, height: activeProductHeight }}
        />
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  conveyor: {
    position: "absolute",
    height: 282,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  productBox: {
    position: "absolute",
    width: "100%",
    bottom: "29%",
    alignItems: "center",
    justifyContent: "center",
  },
});
