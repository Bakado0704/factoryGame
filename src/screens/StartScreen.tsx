import { View, StyleSheet } from "react-native";
import NavHead from "../components/nav/NavHead";
import { useState } from "react";
import NavSelect from "../components/nav/start/NavSelect";
import NavOperation from "../components/nav/start/NavOperation";
import Setting from "../modals/SettingModals";

const StartScreen = () => {
  const [setting, setSetting] = useState(false);

  const onSettingHandler = () => {
    setSetting(true);
  };

  const offSettingHandler = () => {
    setSetting(false);
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.innerContainer}>
        <NavHead />
        <NavSelect />
        <NavOperation onSetting={onSettingHandler} />
      </View>
      {setting && <Setting offSetting={offSettingHandler}/>}
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    flex: 1,
    padding: 8,
  },
  okButton: {
    width: 100,
    height: 100,
  },
});
