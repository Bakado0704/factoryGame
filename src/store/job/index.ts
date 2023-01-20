import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Job from "../../models/job";
import initialState from "./initialState";

const JobRedux = createSlice({
  name: "JobRedux",
  initialState,
  reducers: {
    changeJob: (state, action: PayloadAction<Job>) => {
      state.job = action.payload;

      //このタイミングでprevJobとnextJobを更新させる
      const activeJobs = state.jobs.filter(function (element) {
        return element.isActive === true;
      });

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
    },
    changePreviewJob: (state, action: PayloadAction<Job | undefined>) => {
      state.previewJob = action.payload;
    },
    updateJob: (state, action: PayloadAction<Job>) => {
      state.jobs[state.jobs.indexOf(action.payload)].level = action.payload.level + 1;
      state.jobs[state.jobs.indexOf(action.payload)].outline.level = action.payload.outline.level + 1;
      if (action.payload.level <= 10) {
        state.jobs[state.jobs.indexOf(action.payload)].outline.basicMoney = action.payload.perMoney[action.payload.level - 1];
      } else if (action.payload.level >= 11) {
        state.jobs[state.jobs.indexOf(action.payload)].outline.basicMoney = action.payload.perMoney[9] + action.payload.level - 10;
      }
    },
    unlockJob: (state, action: PayloadAction<Job>) => {
      state.jobs[state.jobs.indexOf(action.payload)].isActive = true;
    },
    changeJobMaxMoney: (state, action: PayloadAction<Job>) => {
      state.jobs[state.jobs.indexOf(action.payload)].maxMoney = state.job.maxMoney;
    },
    changeJobRecord: (state, action: PayloadAction<number>) => {
      state.job.maxMoney = action.payload;
    }
  },
});

export const changeJob = JobRedux.actions.changeJob;
export const updateJob = JobRedux.actions.updateJob;
export const unlockJob = JobRedux.actions.unlockJob;
export const changePreviewJob = JobRedux.actions.changePreviewJob;
export const changeJobRecord = JobRedux.actions.changeJobRecord;
export const changeJobMaxMoney = JobRedux.actions.changeJobMaxMoney;
export default JobRedux.reducer;