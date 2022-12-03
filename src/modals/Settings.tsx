import { View, Modal, Image, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/ui/Card";
import ImageButton from "../components/ui/ImageButton";

const Settings = () => {
  const pressHandler = () => {};

  return (
    <>
      <Modal visible>
        <Card>
          <View>
            <Image />
          </View>
        </Card>
        <ImageButton source={"../../assets/ui/settingButton.svg"} onPress={pressHandler} style={styles.okButton} />
      </Modal>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  okButton: {},
});
