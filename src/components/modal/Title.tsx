import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { ShadowText } from "../text/ShadowText";
import Colors from "../../constants/color";

export interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <View style={styles.modalTitleContanier}>
      <View style={styles.modalTitleTop} />
      <View style={{ transform: [{ translateY: -2 }] }}>
        <ShadowText size={20} color="white">
          {title}
        </ShadowText>
      </View>
      <View style={styles.modalTitleBottom} />
      <View style={styles.modalTitleBottomShadow} />
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  modalTitleContanier: {
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 37,
    marginTop: -30,
    backgroundColor: Colors.modalHeadColor,
    borderColor: Colors.modalEdgeColor,
    borderWidth: 1,
    transform: [{ translateY: -5 }],
  },
  modalTitleTop: {
    width: "100%",
    height: 2,
    opacity: 0.1,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
  },
  modalTitleBottom: {
    width: "100%",
    height: 2,
    opacity: 0.5,
    backgroundColor: Colors.modalEdgeColor,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  modalTitleBottomShadow: {
    width: "100%",
    height: 5,
    opacity: 0.5,
    backgroundColor: Colors.modalEdgeColor,
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: [{ translateY: 5 }],
  },
  modalTitleImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
