import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Job from "../models/job";
import User from "../models/user";
import { UserIcons } from "../types/userIcons";
import { judgeStatus, Play, PlayColor, PlayStatus } from "../types/play";
import playpattern from "../models/playpattern";
import initialState from "./initialState";

const JobRedux = createSlice({
  name: "JobRedux",
  initialState,
  reducers: {
    changeJob: (state, action: PayloadAction<Job>) => {
      state.job = action.payload;
      state.user.nowJob = action.payload.name;
    },
    changeUpdateJob: (state, action: PayloadAction<Job>) => {
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
      state.jobs[state.jobs.indexOf(action.payload)].isActive = true;
    },
    changePreviewJob: (state, action: PayloadAction<Job | undefined>) => {
      state.previewJob = action.payload;
    },
    changePreviewIcon: (state, action: PayloadAction<UserIcons>) => {
      state.previewIcon = action.payload;
    },
    changeUser: (state, action: PayloadAction<User | UserIcons>) => {
      state.user.icon = action.payload.icon;
    },
    changeCombo: (state, action: PayloadAction<number>) => {
      if (action.payload !== 0) {
        state.play.combo = state.play.combo + action.payload;
      } else {
        state.play.combo = 0;
      }
    },
    changeNowMoney: (state, action: PayloadAction<number>) => {
      if (action.payload !== 0) {
        let plusMoney = Math.floor(action.payload);
        if (state.play.combo <= 2) {
          plusMoney = Math.floor(action.payload);
        } else if (state.play.combo <= 4) {
          plusMoney = Math.floor(action.payload * 1.2);
        } else if (state.play.combo <= 6) {
          plusMoney = Math.floor(action.payload * 1.6);
        } else {
          plusMoney = Math.floor(action.payload * 2.0);
        }

        state.play.money = state.play.money + plusMoney;
      } else {
        state.play.money = 0;
      }
    },
    changeJobRecord: (state, action: PayloadAction<Job>) => {
      if (state.job.maxMoney <= state.play.money) {
        //jobsの方のmaxMoneyとjobの方のmaxMoneyを変える
        state.jobs[state.jobs.indexOf(action.payload)].maxMoney =
          state.play.money;
        state.job.maxMoney = state.play.money;
      }
    },
    staminaDecrese: (state, action: PayloadAction<number>) => {
      state.play.stamina = state.play.stamina - action.payload;
    },
    staminaIncrese: (state) => {
      if (state.play.combo <= 4) {
        state.play.stamina = state.play.stamina + 0;
      } else if (state.play.combo <= 6) {
        state.play.stamina = state.play.stamina + 25;
      } else {
        state.play.stamina = state.play.stamina + 50;
      }
    },
    staminaReset: (state, action: PayloadAction<number>) => {
      state.play.stamina = 380 - 80 * action.payload;
    },
    userMoneyIncrease: (state, action: PayloadAction<number>) => {
      state.user.money = state.user.money + action.payload;
    },
    changeStatus: (state, action: PayloadAction<PlayStatus>) => {
      state.play.status = action.payload;
    },
    changeJudge: (state, action: PayloadAction<judgeStatus>) => {
      state.play.judge = action.payload;
    },
    changeProcessCount: (state, action: PayloadAction<number>) => {
      state.play.processCount = action.payload;
    },
    changeActivePattern: (state, action: PayloadAction<playpattern[]>) => {
      state.activePlayPattern = action.payload;
    },
  },
});

export const changeJob = JobRedux.actions.changeJob;
export const changeUpdateJob = JobRedux.actions.changeUpdateJob;
export const changePreviewJob = JobRedux.actions.changePreviewJob;
export const changeUser = JobRedux.actions.changeUser;
export const changePreviewIcon = JobRedux.actions.changePreviewIcon;
export const changeNowMoney = JobRedux.actions.changeNowMoney;
export const changeCombo = JobRedux.actions.changeCombo;
export const changeJobRecord = JobRedux.actions.changeJobRecord;
export const staminaDecrese = JobRedux.actions.staminaDecrese;
export const staminaIncrese = JobRedux.actions.staminaIncrese;
export const staminaReset = JobRedux.actions.staminaReset;
export const userMoneyIncrease = JobRedux.actions.userMoneyIncrease;
export const changeStatus = JobRedux.actions.changeStatus;
export const changeJudge = JobRedux.actions.changeJudge;
export const changeProcessCount = JobRedux.actions.changeProcessCount;
export const changeActivePattern = JobRedux.actions.changeActivePattern;
export default JobRedux.reducer;