import { View, ImageBackground, Image, StyleSheet } from "react-native";
import JobList from "../components/nav/jobchange/JobList";
import ImageButton from "../components/ui/ImageButton";
import { useNavigation } from "@react-navigation/native";
import NavHead from "../components/nav/NavHead";

const JobChangeScreen = () => {
  const navigation = useNavigation();

  const jobReturnHandler = () => {
    navigation.navigate("Start");
  };

  const jobAddHandler = () => {
    navigation.navigate("Gacha");
  };

  return (
    <View style={styles.rootScreen}>
      <Image
        source={require("../assets/ui/boardJobChange.png")}
        style={styles.board}
      />
      <View style={styles.innerContainer}>
        <View style={styles.headContainer}>
          <NavHead />
        </View>
        <View style={styles.jobsContainer}>
          <JobList />
        </View>
        <View style={styles.buttonsContainer}>
          <ImageButton
            source={require("../assets/ui/jobReturnButton.png")}
            onPress={jobReturnHandler}
            style={styles.returnButton}
          />
          <ImageButton
            source={require("../assets/ui/jobAddButton.png")}
            onPress={jobAddHandler}
            style={styles.gachaButton}
          />
        </View>
      </View>
    </View>
  );
};

export default JobChangeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "space-between",
  },
  innerContainer: {
    flex: 1,
    height: 299,
    width: "100%",
    justifyContent: "space-between",
  },
  headContainer: {
    flex: 1,    
    padding: 8,
  },
  board: {
    position: "absolute",
    height: 299,
    width: "100%",
    bottom: 0,
    left: 0,
  },
  jobsContainer: {
    width: "100%",
  },
  buttonsContainer: {
    width: "100%",
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  returnButton: {
    width: 100,
    height: 32,
  },
  gachaButton: {
    width: 100,
    height: 32,
  },
});
