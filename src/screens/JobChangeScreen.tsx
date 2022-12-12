import { View, Image, StyleSheet } from "react-native";
import JobList from "../components/nav/jobchange/JobList";
import ImageButton from "../components/ui/ImageButton";
import { useNavigation } from "@react-navigation/native";
import NavHead from "../components/nav/NavHead";
import JobModal from "../modals/JobModal";
import Job from "../models/job";
import { Job as _Job } from "../types/job";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/redux/store";
import { changeJob, changePreviewJob } from "../store/redux/job";

const JobChangeScreen = () => {
  const jobs = store.getState().job.jobs;
  const previewJob = useSelector((state) => state.job.previewJob);
  const activeJob = useSelector((state) => state.job.job)

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const jobReturnHandler = () => {
    navigation.navigate("Start");
  };

  const jobAddHandler = () => {
    navigation.navigate("Gacha");
  };

  const jobModalOnHandler = (job: Job) => {
    dispatch(changePreviewJob(job));
  };

  const jobDecideHandler = () => {
    dispatch(changeJob(previewJob));
    // console.log(activeJob);
  };

  const jobModalOffHandler = () => {
    dispatch(changePreviewJob(undefined));
    // console.log(activeJob);
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
          <JobList onModal={jobModalOnHandler} jobs={jobs} />
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
        {previewJob && (
          <JobModal
            jobDecide={jobDecideHandler}
            offModal={jobModalOffHandler}
            outline={previewJob.outline}
            owner={previewJob.owner}
            icon={previewJob.icon}
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
