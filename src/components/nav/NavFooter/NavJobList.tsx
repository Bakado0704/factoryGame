import {
  FlatList,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { Job } from "../../../types/job";
import { User } from "../../../types/user";
import FaceIcon from "../../face/FaceIcon";
const { width } = Dimensions.get("window");

type Props = {
  onModal: (newJob: Job) => void;
  jobs: Job[];
  user: User;
};

const NavJobList = ({ onModal, jobs, user }: Props) => {
  const renderCategoryItem = (itemData: { item: Job }) => {
    const pressHandler = () => {
      onModal(itemData.item);
    };

    const type = itemData.item.icon;
    const isActive = itemData.item.isActive;

    let iconBackground = require("../../../assets/ui/iconBackground.png");

    if (itemData.item.name === user.nowJob) {
      iconBackground = require("../../../assets/ui/iconBackgroundActive.png");
    }

    return (
      <View style={styles.outerContainer}>
        {isActive && (
          <Pressable
            onPress={pressHandler}
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [pressed && styles.Pressed]}
          >
            <ImageBackground
              source={iconBackground}
              style={styles.iconBackground}
            >
              <FaceIcon
                type={type}
                width={width * 0.149}
                height={width * 0.149}
              />
            </ImageBackground>
          </Pressable>
        )}
        {!isActive && (
          <Image
            source={require("../../../assets/ui/iconSecret.png")}
            style={styles.iconSecret}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        scrollEnabled={false}
      />
    </View>
  );
};

export default NavJobList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: width * 0.013 }],
  },
  outerContainer: {
    width: width * 0.189,
    height: width * 0.189,
    marginVertical: width * 0.011,
    marginHorizontal: width * 0.015,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.189,
    height: width * 0.189,
  },
  iconSecret: {
    width: width * 0.189,
    height: width * 0.189,
  },
  Pressed: {
    opacity: 0.7,
  }
});
