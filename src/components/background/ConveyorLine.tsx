import { StyleSheet, Image, View } from "react-native";
import React from "react";

export type Props = {
  width: number;
};

const ConveyorLine = ({ width }: Props) => {
  return (
    <View style={styles.cvContainer}>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
        <Image
          source={require("../../assets/conveyor/cvLine.png")}
          style={styles.cvLine}
        />
      </View>
      <View style={[styles.cvInnerContainer, { width: width / 5 }]}>
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
    height: 78,
  },
  cvLine: {
    width: 72,
    height: 78,
  },
});
