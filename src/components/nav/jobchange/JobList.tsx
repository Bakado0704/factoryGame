import {
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { JOB } from "../../../data/data";

const JobList = () => {
  const renderCategoryItem = (itemData) => {
    const source = itemData.item.source;

    const pressHandler = () => {};

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
            <Image style={styles.icon} source={source} />
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
