import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { ShadowText } from "../text/ShadowText";
const { width } = Dimensions.get("window");

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
      <View style={{ transform: [{ translateY: -width * 0.005 }] }}>
        <ShadowText size={width * 0.053} color="white">
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
    width: width * 0.693,
    height: width * 0.099,
    marginTop: -width * 0.08,
    borderWidth: width * 0.005,
    transform: [{ translateY: -width * 0.013 }],
  },
  modalTitleTop: {
    width: "100%",
    height: width * 0.005,
    opacity: 0.1,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
  },
  modalTitleBottom: {
    width: "100%",
    height: width * 0.005,
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  modalTitleBottomShadow: {
    width: "100%",
    height: width * 0.013,
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: [{ translateY: width * 0.013 }],
  },
  modalTitleImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
