import {
  FlatList,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { JOB } from "../../../data/data";
import { changeOwner } from "../../../store/redux/owner";
import { changeIcon } from "../../../store/redux/icon";
import { Job } from "../../../types/job";
import { useDispatch } from "react-redux";
import FaceIcon from "../../icon/FaceIcon";
import { store } from "../../../store/redux/store";

type Props = {
  onModal: (newJob: Job) => void;
};

const JobList = ({ onModal }: Props) => {

  const renderCategoryItem = (itemData: { item: Job }) => {
    const pressHandler = () => {
      onModal(itemData.item);
    };

    const type = itemData.item.icon;

    return (
      <View style={styles.outerContainer}>
        <Pressable
          onPress={pressHandler}
          style={({ pressed }) => pressed && styles.pressed}
          android_ripple={{ color: "#ccc" }}
        >
          <ImageBackground
            source={require("../../../assets/ui/iconBackground.png")}
            style={styles.iconBackground}
          >
            <FaceIcon type={type} width={56} height={56} />
          </ImageBackground>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={JOB}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        scrollEnabled={false}
      />
    </View>
  );
};

export default JobList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  outerContainer: {
    width: 71,
    height: 71,
    marginVertical: 4,
    marginHorizontal: 6,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: 71,
    height: 71,
  },
  icon: {
    width: 56,
    height: 56,
  },
  pressed: {
    opacity: 0.75,
  },
});
