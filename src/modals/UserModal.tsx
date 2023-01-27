import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  TextInput,
  Text,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import ImageButton from "../components/button/ImageButton";
import UserIcons from "../models/userIcons";
import UserIcon from "../components/face/UserIcon";
import BgBlack from "../components/background/BgBlack";
import Colors from "../constants/color";
import Title from "../components/modal/Title";
import { Mute } from "../types/user";
const { width } = Dimensions.get("window");

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
        <Pressable onPress={pressHandler} style={styles.iconContainer}>
          <ImageBackground source={source} style={styles.iconBackground}>
            <UserIcon icon={itemData.item.icon} width={width * 0.144} height={width * 0.144} />
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
          <Title title="各種設定" margintop={-width * 0.053} />
          <View style={styles.userContainer}>
            <View style={styles.userIcon}>
              <View style={styles.userIconBackground} />
              <View style={{ padding: width * 0.013 }}>
                <UserIcon icon={previewIcon.icon} width={width * 0.16} height={width * 0.16} />
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
                maxLength={width * 0.035}
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
              width={width * 0.171}
              height={width * 0.065}
              diffWidth={width * 0.013}
              diffHeight={width * 0.005}
              padding={width * 0.021}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ImageButton
            source={require("../assets/ui/okButton.png")}
            onPress={offUserModal}
            width={width * 0.859}
            height={width * 0.139}
            diffWidth={width * 0.027}
            diffHeight={width * 0.004}
            padding={width * 0.013}
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
    padding: width * 0.053,
    top: 0,
    left: 0,
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: Colors.modalMainColor,
    width: "100%",
    paddingHorizontal: width * 0.027,
    paddingBottom: width * 0.053,
    borderWidth: width * 0.008,
    borderColor: Colors.modalEdgeColor,
  },
  userContainer: {
    width: "100%",
    paddingHorizontal: width * 0.013,
    marginTop: width * 0.027,
    marginBottom: width * 0.027,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  textContainer: {
    width: width * 0.56,
    position: "relative",
    paddingLeft: width * 0.013,
  },
  textBackground: {
    position: "absolute",
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
    width: width * 0.56,
    top: 0,
    height: width * 0.067,
    borderRadius: width * 0.005,
  },
  textInput: {
    fontSize: width * 0.04,
    fontFamily: "MochiyPop",
    color: "white",
  },
  pen: {
    position: "absolute",
    width: width * 0.037,
    height: width * 0.043,
    top: width * 0.011,
    right: width * 0.007,
  },
  textId: {
    fontSize: width * 0.027,
    fontFamily: "MochiyPop",
    color: "white",
    marginTop: width * 0.013,
  },
  container: {
    height: width * 0.72,
    width: "100%",
    padding: width * 0.013,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBackground: {
    height: "100%",
    width: "100%",
    padding: width * 0.013,
    position: "absolute",
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
    borderRadius: width * 0.005,
  },
  userIcon: {
    position: "relative",
    borderColor: Colors.modalEdgeColor,
    borderWidth: width * 0.008,
    borderRadius: width * 0.013,
  },
  userIconBackground: {
    position: "absolute",
    height: width * 0.187,
    width: width * 0.187,
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.176,
    height: width * 0.176,
    margin: width * 0.011,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  soundContainer: {
    width: "100%",
    marginTop: width * 0.027,
    marginHorizontal: width * 0.013,
    paddingHorizontal: width * 0.013,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  soundBackground: {
    height: "100%",
    width: "100%",
    padding: width * 0.013,
    left: width * 0.013,
    position: "absolute",
    backgroundColor: Colors.modalEdgeColor,
    opacity: 0.5,
    borderRadius: width * 0.005,
  },
  textSound: {
    fontSize: width * 0.04,
    fontFamily: "MochiyPop",
    color: "white",
    paddingVertical: width * 0.021,
  },
  sound: {
    height: width * 0.043,
    width: width * 0.051,
    marginLeft: width * 0.021,
    marginRight: width * 0.011,
  },
  soundImg: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.053,
    marginBottom: -width * 0.013,
  },
});
