import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Job from "../../models/job";
import initialState from "./initialState";
import userInitialState from "../user/initialState";
import playInitialState from "../play/initialState";
import { useDispatch } from "react-redux";
import { changeUserNowJob } from "../job";

const dispatch = useDispatch();

const JobsRedux = createSlice({
  name: "jobRedux",
  initialState,
  reducers: {
    changeJob: (state, action: PayloadAction<Job>) => {
      state.job = action.payload;
      dispatch(changeUserNowJob(action.payload.name));

      if (userInitialState.user.productType === "bonus") {
        state.nextProduct = action.payload.product.bonus;
        state.centerProduct = action.payload.product.bonus;
      } else {
        state.nextProduct = action.payload.product.default;
        state.centerProduct = action.payload.product.default;
      }

      //このタイミングでprevJobとnextJobを更新させる
      const activeJobs = state.jobs.filter(function (element) {
        return element.isActive === true;
      });

      // console.log(activeJobs[0]);
      // console.log(action.payload);
      // console.log(activeJobs.findIndex((job) => job === action.payload));
      // console.log(activeJobs.indexOf(action.payload));

      state.nextJob = activeJobs[activeJobs.indexOf(state.job) + 1];
      state.prevJob = activeJobs[activeJobs.indexOf(state.job) - 1];

      if (activeJobs.indexOf(state.job) === activeJobs.length - 1) {
        state.nextJob = activeJobs[0];
      }

      if (activeJobs.indexOf(state.job) === 0) {
        state.prevJob = activeJobs[activeJobs.length - 1];
      }

      if (activeJobs.indexOf(state.job) === -1) {
        state.nextJob = activeJobs[activeJobs.length - 1];
        state.prevJob = activeJobs[activeJobs.length - 1];
      }

      // console.log(activeJobs);
      // console.log(state.nextJob)
      // console.log(state.prevJob)
    },
    changePreviewJob: (state, action: PayloadAction<Job | undefined>) => {
      state.previewJob = action.payload;
    },
    changeUpdateJob: (state, action: PayloadAction<Job>) => {
      //もしすでにそのJOBをアンロックしていたら
      if (state.jobs[state.jobs.indexOf(action.payload)].isActive === true) {
        state.jobs[state.jobs.indexOf(action.payload)].perMoney =
          action.payload.perMoney + 1;
        state.jobs[state.jobs.indexOf(action.payload)].outline.basicMoney =
          action.payload.outline.basicMoney;
        state.jobs[state.jobs.indexOf(action.payload)].level =
          action.payload.level + 1;
        state.jobs[state.jobs.indexOf(action.payload)].outline.level =
          action.payload.outline.level + 1;
      }
      //もしそのJOBをアンロックしていなかったら
      state.jobs[state.jobs.indexOf(action.payload)].isActive = true;
    },
    changeJobRecord: (state, action: PayloadAction<Job>) => {
      if (state.job.maxMoney <= playInitialState.play.money) {
        //jobsの方のmaxMoneyとjobの方のmaxMoneyを変える
        state.jobs[state.jobs.indexOf(action.payload)].maxMoney =
          playInitialState.play.money;
        state.job.maxMoney = playInitialState.play.money;
      }
    },
    changeNextProduct: (state) => {
      if (userInitialState.user.productType === "bonus") {
        state.nextProduct = state.job.product.bonus;
      } else {
        state.nextProduct = state.job.product.default;
      }
    },
    changeCenterProduct: (state) => {
      if (userInitialState.user.productType === "bonus") {
        state.centerProduct = state.job.product.bonus;
      } else {
        state.centerProduct = state.job.product.default;
      }
    },
  },
});

export const changeJob = JobsRedux.actions.changeJob;
export const changeUpdateJob = JobsRedux.actions.changeUpdateJob;
export const changePreviewJob = JobsRedux.actions.changePreviewJob;
export const changeJobRecord = JobsRedux.actions.changeJobRecord;
export const changeNextProduct = JobsRedux.actions.changeNextProduct;
export const changeCenterProduct = JobsRedux.actions.changeCenterProduct;
export default JobsRedux.reducer;