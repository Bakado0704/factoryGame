import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackgroundType } from "../../types/background";
import { IconType } from "../../types/icon";

export type state = {
  id: string;
  icon: IconType;
  name: string;
  isActive: boolean;
  level: number;
  maxNumber: number;
  maxMoney: number;
  perMoney: number;
  backgroundImg: BackgroundType;
  product: {
    default: [{ before: string }, { before: string }, { before: string }];
    bonus: [{ before: string }, { before: string }, { before: string }];
    style: { width: number; height: number };
  };
  owner: {
    name: string;
    message: string;
  };
  outline: {
    company: string;
    category: string;
    work: string;
    basicMoney: number;
    holiday: string;
    retirement: string;
    difficulty: string;
    workplace: string;
    background: string;
    button: string;
  };
};

const initialState: state = {
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
};

const JobRedux = createSlice({
  name: "JobRedux",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeOwner: (
      state,
      action: PayloadAction<{
        name: string;
        message: string;
      }>
    ) => {
      state.owner = action.payload;
    },
  },
});

export const changeName = JobRedux.actions.changeName;
export const changeOwner = JobRedux.actions.changeOwner;
export default JobRedux.reducer;
