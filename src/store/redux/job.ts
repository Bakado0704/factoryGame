import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackgroundType } from "../../types/background";
import { IconType } from "../../types/icon";
import Job from "../../models/job";
import outline from "../../models/outline";

export type state = {
  job: Job;
  previewJob?: Job;
};

const initialState: state = {
  job: {
    id: "c1",
    icon: IconType.yamagawa,
    name: "山川製作所",
    isActive: false,
    level: 1,
    maxNumber: 0,
    maxMoney: 0,
    perMoney: 15,
    backgroundImg: BackgroundType.yamagawa,
    product: {
      default: [
        { before: require("../../assets/product/product1-normal-first.png") },
        { before: require("../../assets/product/product1-normal-second.png") },
        { before: require("../../assets/product/product1-normal-third.png") },
      ],
      bonus: [
        { before: require("../../assets/product/product1-gold-first.png") },
        { before: require("../../assets/product/product1-gold-second.png") },
        { before: require("../../assets/product/product1-gold-third.png") },
      ],
      style: { width: 200, height: 80 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 15,
      holiday: "完全週休一日制",
      retirement: "90%",
      difficulty: "C",
      workplace: "鳥取県",
      background: require("../../assets/outline/outlineBgYamagawa.png"),
      button: require("../../assets/outline/outlineButtonYamagawa.png"),
    },
  },
  previewJob: undefined,
};

const JobRedux = createSlice({
  name: "JobRedux",
  initialState,
  reducers: {
    changeJob: (state, action: PayloadAction<Job>) => {
      state.job = action.payload;
    },
    changePreviewJob: (state, action: PayloadAction<Job | undefined>) => {
      state.previewJob = action.payload;
    },
  },
});

export const changeJob = JobRedux.actions.changeJob;
export const changePreviewJob = JobRedux.actions.changePreviewJob;
export default JobRedux.reducer;
