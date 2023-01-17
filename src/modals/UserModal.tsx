import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  TextInput,
  Text,
  Image,
} from "react-native";
import React, { useState } from "react";
import ImageButton from "../components/button/ImageButton";
import UserIcons from "../models/userIcons";
import UserIcon from "../components/face/UserIcon";
import BgBlack from "../components/background/BgBlack";
import Colors from "../constants/color";
import Title from "../components/modal/Title";
import { Mute } from "../types/user";

type Props = {
  offUserModal: () => void;
  userChangeHandler: (item: UserIcons) => void;
  usernameChangeHandler: (name: string) => void;
  changeMuteHandler: (mute: Mute) => void;
  previewIcon: UserIcons;
  userIcons: UserIcons[];
  userName: string;
  userId: string;
  mute: Mute;
};

const userModal = ({
  offUserModal,
  userChangeHandler,
  usernameChangeHandler,
  changeMuteHandler,
  previewIcon,
  userIcons,
  userName,
  userId,
  mute,
}: Props) => {
  const nameInputHandler = (enteredName: string) => {
    usernameChangeHandler(enteredName);
  };

  const soundChange = () => {
    if (mute === Mute.on) {
      changeMuteHandler(Mute.off);
    } else if (mute === Mute.off) {
      changeMuteHandler(Mute.on);
    }
  };

  let soundSource = require("../assets/ui/soundOn.png");

  if (mute === Mute.off) {
    soundSource = require("../assets/ui/soundOff.png");
  }

  const renderIconItem = (itemData: { item: UserIcons }) => {
    const pressHandler = () => {
      userChangeHandler(itemData.item);
    };

    let source = require("../assets/ui/iconBackground.png");

    if (itemData.item.icon === previewIcon.icon) {
      source = require("../assets/ui/iconBackgroundActive.png");
    }

    return (
      <View style={styles.iconContainer}>
        <Pressable
          onPress={pressHandler}
          style={({ pressed }) => [
            pressed && styles.pressed,
            styles.iconContainer,
          ]}
          android_ripple={{ color: "#ccc" }}
        >
          <ImageBackground source={source} style={styles.iconBackground}>
            <UserIcon icon={itemData.item.icon} width={54} height={54} />
          </ImageBackground>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <BgBlack />
      <View style={styles.rootScreen}>
        <View style={styles.innerContainer}>
          <Title title="各種設定" margintop={-20} />
          <View style={styles.userContainer}>
            <View style={styles.userIcon}>
              <View style={styles.userIconBackground} />
              <View style={{ padding: 5 }}>
                <UserIcon icon={previewIcon.icon} width={60} height={60} />
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textBackground} />
              <TextInput
                style={styles.textInput}
                placeholder="0～13文字で設定"
                placeholderTextColor="#9fa0a0"
                onChangeText={nameInputHandler}
                value={userName}
                maxLength={13}
              />
              <Image
                source={require("../assets/ui/pen.png")}
                style={styles.pen}
              />
              <Text style={styles.textId}>ユーザID: {userId}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.containerBackground} />
            <FlatList
              data={userIcons}
              renderItem={renderIconItem}
              keyExtractor={(item) => item.id}
              numColumns={4}
            />
          </View>

          <View style={styles.soundContainer}>
            <View style={styles.soundBackground} />
            <View style={styles.soundImg}>
              <Image
                source={require("../assets/ui/sound.png")}
                style={styles.sound}
              />
              <Text style={styles.textSound}>効果音</Text>
            </View>
            <ImageButton
              source={soundSource}
              onPress={soundChange}
              style={styles.soundButton}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ImageButton
            source={require("../assets/ui/okButton.png")}
            onPress={offUserModal}
            style={styles.okButton}
          />
        </View>
      </View>
    </>
  );
};

export default userModal;

const styles = StyleSheet.create({
  rootScreen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    padding: 20,
    top: 0,
    left: 0,
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: Colors.modalMainColor,
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 20,
    borderWidth: 3,
    borderColor: Colors.modalEdgeColor,
  },
  userContainer: {
    width: "100%",
    paddingHorizontal: 5,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  textContainer: {
    width: 210,
    position: "relative",
    paddingLeft: 5,
  },
  textBackground: {
    position: "absolute",
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
    width: 210,
    top: 0,
    height: 25,
    borderRadius: 2,
  },
  textInput: {
    fontSize: 15,
    fontFamily: "MochiyPop",
    color: "white",
  },
  pen: {
    position: "absolute",
    width: 14,
    height: 16,
    top: 4,
    right: 5,
  },
  textId: {
    fontSize: 10,
    fontFamily: "MochiyPop",
    color: "white",
    marginTop: 5,
  },
  container: {
    height: 270,
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBackground: {
    height: "100%",
    width: "100%",
    padding: 5,
    position: "absolute",
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
    borderRadius: 2,
  },
  userIcon: {
    position: "relative",
    borderColor: Colors.modalEdgeColor,
    borderWidth: 3,
    borderRadius: 5,
  },
  userIconBackground: {
    position: "absolute",
    height: 70,
    width: 70,
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 66,
    height: 66,
    margin: 4,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  soundContainer: {
    width: "100%",
    marginTop: 10,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  soundBackground: {
    height: "100%",
    width: "100%",
    padding: 5,
    left: 5,
    position: "absolute",
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
    borderRadius: 2,
  },
  textSound: {
    fontSize: 15,
    fontFamily: "MochiyPop",
    color: "white",
    paddingVertical: 8,
  },
  sound: {
    height: 16,
    width: 19,
    marginLeft: 8,
    marginRight: 4,
  },
  soundImg: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  soundButton: {
    width: 64,
    height: 24,
    marginRight: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  okButton: {
    width: 322,
    height: 52,
  },
  pressed: {
    opacity: 0.75,
  },
});
