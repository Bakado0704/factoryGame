import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function Display({ time }) {
  const formatDisplay = (number) => {
    // 一桁の場合は、前に0をつける
    // 返却は文字列型になる
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  };

  return (
    <View style={displays.displayContainer}>
      <Text style={displays.timer}>
        {formatDisplay(Math.floor(time / (60 * 1000)))}
      </Text>
      <Text style={displays.colon}>:</Text>
      <Text style={displays.timer}>
        {formatDisplay(Math.floor(time / 1000) % 60)}
      </Text>
      <Text style={displays.colon}>:</Text>
      <Text style={displays.timer}>
        {formatDisplay(Math.floor((time % 1000) / 10))}
      </Text>
    </View>
  );
}

const displays = StyleSheet.create({
  displayContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  timer: {
    width: 100,
    fontSize: 80,
  },
  colon: {
    width: 20,
    fontSize: 80,
  },
});
