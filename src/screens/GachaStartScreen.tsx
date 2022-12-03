import { View, Modal } from "react-native";
import NavGacha from "../components/nav/NavGacha";
import NavHead from "../components/nav/NavHead";

function ReturnButton() {
  return (
    <>
      <View>
        <NavHead />
        <NavGacha />
      </View>
      <Modal visible></Modal>
    </>
  );
}

export default ReturnButton;
