import {
  FlatList,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { JOB } from "../../../data/data";
import { useDispatch } from "react-redux";
import FaceIcon from "../../icon/FaceIcon";
import { changeType } from "../../../store/redux/background";



const JobList = () => {
  const dispatch = useDispatch();

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      dispatch(changeType({ type: itemData.item.backgroundImg }));
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
            <FaceIcon type={type} />
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
