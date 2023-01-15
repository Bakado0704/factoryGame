import { StyleSheet, View } from "react-native";
import React from "react";
import { ShadowText } from "../text/ShadowText";

export interface Props {
  title: string;
  headColor: string;
  borderColor: string;
}

const JobTitle = ({ title, headColor, borderColor }: Props) => {
  return (
    <View
      style={[
        styles.modalTitleContanier,
        { backgroundColor: headColor, borderColor: borderColor },
      ]}
    >
      <View style={styles.modalTitleTop} />
      <View style={{ transform: [{ translateY: -2 }] }}>
        <ShadowText size={20} color="white">
          {title}
        </ShadowText>
      </View>
      <View style={[styles.modalTitleBottom, { backgroundColor: borderColor }]} />
      <View
        style={[styles.modalTitleBottomShadow, { backgroundColor: borderColor }]}
      />
    </View>
  );
};

export default JobTitle;

const styles = StyleSheet.create({
  modalTitleContanier: {
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 37,
    marginTop: -30,
    borderWidth: 2,
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
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  modalTitleBottomShadow: {
    width: "100%",
    height: 5,
    opacity: 0.5,
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
