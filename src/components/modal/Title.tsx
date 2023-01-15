import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { ShadowText } from "../text/ShadowText";

export interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <View style={styles.modalTitleContanier}>
    <Image
      source={require("../../assets/ui/modalTitle.png")}
      style={styles.modalTitleImg}
    />
    <View style={{ transform: [{ translateY: -2 }] }}>
      <ShadowText size={20} color="white">{title}</ShadowText>
    </View>
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
        transform: [{ translateY: -5 }]
      },
      modalTitleImg: {
        position: "absolute",
        width: "100%",
        height: "100%",
      },
});
