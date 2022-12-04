import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import NavGacha from "../components/nav/NavGacha";
import NavHead from "../components/nav/NavHead";
import JobGet from "../modals/JobGetModal";

function GachaScreen() {
  const [modalIsSetting, setModalIsSetting] = useState(false);
  const [envelopeSetting, setEnvelopeSetting] = useState(false);
  const [envelopeOpenedFirst, setEnvelopeIsOpenedFirst] = useState(false);
  const [envelopeOpenedSecond, setEnvelopeIsOpenedSecond] = useState(false);
  const [envelopeOpenedThird, setEnvelopeIsOpenedThird] = useState(false);
  const [gachaIsSetted, setGachaIsSetted] = useState(false);
  const [state, setState] = useState(false);

  const modalSettingHandler = () => {
    setModalIsSetting(true);
    setEnvelopeSetting(true);
  };

  const envelopeHandler = () => {
    setEnvelopeSetting(false);
    setEnvelopeIsOpenedFirst(true);
  };

  if (envelopeOpenedFirst) {
    setTimeout(() => {
      setEnvelopeIsOpenedSecond(true);
    }, 1000);
  }

  if (envelopeOpenedSecond) {
    setTimeout(() => {
      setEnvelopeIsOpenedThird(true);
      setEnvelopeIsOpenedSecond(false);
    }, 1000);
  }

  if (envelopeOpenedThird) {
    setTimeout(() => {
      setGachaIsSetted(true);
      setEnvelopeIsOpenedFirst(false);
      setEnvelopeIsOpenedThird(false);
    }, 1000);
  }

  const offModalHandler = () => {
    setModalIsSetting(false);
    setGachaIsSetted(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => !state);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/background/bgGacha.png")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          <NavHead />
          <NavGacha onModal={modalSettingHandler} />
          <Image
            source={require("../assets/icon/zimuPerson.png")}
            style={state ? styles.iconImg : styles.iconImgActive}
          />
        </View>
        {modalIsSetting && <View style={styles.background} />}
        {modalIsSetting && envelopeSetting && (
          <View style={styles.envelopeContainer}>
            <Text style={styles.text}>タップして開封しよう</Text>
            <Pressable onPress={envelopeHandler}>
              <Image
                source={require("../assets/ui/envelope.png")}
                style={styles.envelopeOpen}
              />
            </Pressable>
          </View>
        )}
        {modalIsSetting && envelopeOpenedFirst && (
          <View style={styles.envelopeContainer}>
            <Image
              source={require("../assets/ui/envelopeOpen.png")}
              style={styles.envelopeClosed}
            />
            {envelopeOpenedSecond && <View style={styles.sheetOne} />}
            {/* {envelopeOpenedThird && <View style={styles.sheetTwo}/>} */}
          </View>
        )}
        {modalIsSetting && gachaIsSetted && (
          <JobGet offModal={offModalHandler} />
        )}
      </ImageBackground>
    </View>
  );
}

export default GachaScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  iconImg: {
    position: "absolute",
    width: 74,
    height: 61,
    top: "38.6%",
    left: "16%",
  },
  iconImgActive: {
    position: "absolute",
    width: 74,
    height: 61,
    top: "38.8%",
    left: "16%",
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
  text: {
    fontSize: 20,
    fontFamily: "MochiyPop",
    margin: 10,
    color: "white",
  },
  envelopeContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  envelopeOpen: {
    width: 268,
    height: 347,
  },
  envelopeClosed: {
    width: 373,
    height: 482,
  },
  // sheetOne: {
  //   width: 206,
  //   height: 30,
  //   backgroundColor: "white",
  //   position: "absolute",
  //   transform: [{ translateY: -125 }],
  // },
  // sheetTwo: {
  //   width: 206,
  //   height: 50,
  //   backgroundColor: "white",
  //   position: "absolute",
  //   transform: [{ translateY: -125 }],
  // },
});
