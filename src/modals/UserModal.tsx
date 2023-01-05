import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ImageButton from "../components/button/ImageButton";
import UserIcons from "../models/userIcons";
import UserIcon from "../components/face/UserIcon";

type Props = {
  offUserModal: () => void;
  user: (item: UserIcons) => void;
  previewIcon: UserIcons;
  userIcons: UserIcons[];
};

const userModal = ({ offUserModal, user, previewIcon, userIcons }: Props) => {
  const [userName, setEnteredUserName] = useState("社畜 太郎");

  function nameInputHandler(enteredName: string) {
    setEnteredUserName(enteredName);
  }

  const renderIconItem = (itemData: { item: UserIcons }) => {
    const pressHandler = () => {
      user(itemData.item);
    };

    let source = require("../assets/ui/userIcon.png");

    if (itemData.item.icon === previewIcon.icon) {
      source = require("../assets/ui/activeUserIcon.png");
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
      <View style={styles.background}></View>
      <View style={styles.rootScreen}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInput}
              placeholder=""
              onChangeText={nameInputHandler}
              value={userName}
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.container}>
            <FlatList
              data={userIcons}
              renderItem={renderIconItem}
              keyExtractor={(item) => item.id}
              numColumns={4}
              scrollEnabled={false}
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
    paddingHorizontal: 20,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "black",
  },
  innerContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    paddingVertical: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  textInput: {
    fontSize: 15,
    fontFamily: "MochiyPop",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 4,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 66,
    height: 66,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
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
