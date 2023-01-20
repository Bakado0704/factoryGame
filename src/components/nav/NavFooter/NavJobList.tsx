import {
  FlatList,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Image
} from "react-native";
import { Job } from "../../../types/job";
import { User } from "../../../types/user";
import FaceIcon from "../../face/FaceIcon";

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

    let iconBackground = require("../../../assets/ui/iconBackground.png")

    if (itemData.item.name === user.nowJob) {
      iconBackground = require("../../../assets/ui/iconBackgroundActive.png")
    }

    return (
      <View style={styles.outerContainer}>
        {isActive && <Pressable
          onPress={pressHandler}
          style={({ pressed }) => pressed && styles.pressed}
          android_ripple={{ color: "#ccc" }}
        >
          <ImageBackground
            source={iconBackground}
            style={styles.iconBackground}
          >
            <FaceIcon type={type} width={56} height={56} />
          </ImageBackground>
        </Pressable>}
        {!isActive && <Image source={require("../../../assets/ui/iconSecret.png")}  style={styles.iconSecret}/>}
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
    transform: [{ translateY: 5 }],
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
  iconSecret: {
    width: 71,
    height: 71,
  },
  pressed: {
    opacity: 0.75,
  },
});
