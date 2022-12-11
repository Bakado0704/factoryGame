import { View, Image, StyleSheet } from "react-native";
import JobList from "../components/nav/jobchange/JobList";
import ImageButton from "../components/ui/ImageButton";
import { useNavigation } from "@react-navigation/native";
import NavHead from "../components/nav/NavHead";
import { useState } from "react";
import JobModal from "../modals/JobModal";
import { IconType } from "../types/icon";
import { BackgroundType } from "../types/background";
import Job from "../models/job";
import { Job as _Job } from "../types/job";
import outline from "../models/outline";
import { useDispatch } from "react-redux";
import { changeOwner } from "../store/redux/owner";
import { changeIcon } from "../store/redux/icon";
import { changeType } from "../store/redux/background";
import { changeProduct } from "../store/redux/product";

const JobChangeScreen = () => {
  const [jobModal, setJobModal] = useState(false);
  const [job, setJob] = useState(new Job(
    "c1",
    IconType.yamagawa,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.yamagawa,
    {
      default: [
        { before: require("../assets/product/product1-normal-first.png") },
        { before: require("../assets/product/product1-normal-second.png") },
        { before: require("../assets/product/product1-normal-third.png") },
      ],
      bonus: [
        { before: require("../assets/product/product1-gold-first.png") },
        { before: require("../assets/product/product1-gold-second.png") },
        { before: require("../assets/product/product1-gold-third.png") },
      ],
      style: { width: 200, height: 80 },
    },
    {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    new outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "完全週休一日制",
      "90%",
      "C",
      "鳥取県",
      require("../assets/outline/outlineBgYamagawa.png"),
      require("../assets/outline/outlineButtonYamagawa.png"),
    )
  ),);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const jobReturnHandler = () => {
    navigation.navigate("Start");
  };

  const jobAddHandler = () => {
    navigation.navigate("Gacha");
  };

  const jobModalOnHandler = (newJob: _Job) => {
    setJobModal(true);
    setJob(newJob);
    dispatch(changeOwner({ owner: newJob.owner }));
    dispatch(changeIcon({ icon: newJob.icon }));
  };

  const jobDecideHandler = () => {
    dispatch(changeType({ type: job.backgroundImg }));
    dispatch(changeProduct({ product: job.product }));
  }

  const jobModalOffHandler = () => {
    setJobModal(false);
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
          <JobList onModal={jobModalOnHandler} />
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
        {jobModal && (
          <JobModal
          jobDecide={jobDecideHandler}
            offModal={jobModalOffHandler}
            outline={job.outline}
            owner={job.owner}
            icon={job.icon}
          />
        )}
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
