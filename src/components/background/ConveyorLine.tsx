import { StyleSheet, Image, View } from "react-native";
import React from "react";

export type Props = {
  width: number;
  height: number;
};

const ConveyorLine = ({ width, height }: Props) => {
  return (
    <View style={[styles.cvContainer, {height: height / 8.8}]}>
      <View style={[styles.cvInnerContainer, { width: width / 4 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4}]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 4 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
    </View>
  );
};

export default ConveyorLine;

const styles = StyleSheet.create({
  cvContainer: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  cvInnerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cvLine: {
    width: "100%",
    height: "100%",
  },
});
