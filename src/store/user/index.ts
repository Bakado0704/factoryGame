import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/user";
import initialState from "./initialState";
import { UserIcons } from "../../types/userIcons";
import { productType } from "../../types/product";
import { page } from "../../types/page";
import { GachaStatus } from "../../types/gacha";
import { JobType } from "../../types/job";
import { Mute } from "../../types/user";

const UserRedux = createSlice({
  name: "UserRedux",
  initialState,
  reducers: {
    changePreviewIcon: (state, action: PayloadAction<UserIcons>) => {
      state.previewIcon = action.payload;
    },
    changeUser: (state, action: PayloadAction<User | UserIcons>) => {
      state.user.icon = action.payload.icon;
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
    changeNextProductType: (state, action: PayloadAction<productType>) => {
      state.user.nextProductType = action.payload;
    },
    changePrevProductType: (state, action: PayloadAction<productType>) => {
      state.user.prevProductType = action.payload;
    },
    changeUserNowJob: (state, action: PayloadAction<JobType>) => {
      state.user.nowJob = action.payload;
    },
    changeGachaStatus: (state, action: PayloadAction<GachaStatus>) => {
      state.user.gachaStatus = action.payload;
    },
    userMoneyIncrease: (state, action: PayloadAction<number>) => {
      state.user.money = state.user.money + action.payload;
    },
    userPage: (state, action: PayloadAction<page>) => {
      state.user.page = action.payload;
    },
    userDrink: (state, action: PayloadAction<number>) => {
      state.user.drink = state.user.drink + action.payload;
      state.user.drinkCost = 80 * state.user.drink;
    },
    userDrinkReset: (state) => {
      state.user.drink = 0;
      state.user.drinkCost = 0;
    },
    changeMute: (state, action: PayloadAction<Mute>) => {
      state.user.mute = action.payload;
    },
    changeGachaCost: (state, action: PayloadAction<number>) => {
      state.user.gachaCost = state.user.gachaCost + action.payload;
    },
  },
});

export const changeUser = UserRedux.actions.changeUser;
export const changeUsername = UserRedux.actions.changeUsername;
export const changePreviewIcon = UserRedux.actions.changePreviewIcon;
export const changeNextProductType = UserRedux.actions.changeNextProductType;
export const changePrevProductType = UserRedux.actions.changePrevProductType;
export const changeGachaStatus = UserRedux.actions.changeGachaStatus;
export const changeUserNowJob = UserRedux.actions.changeUserNowJob;
export const userMoneyIncrease = UserRedux.actions.userMoneyIncrease;
export const userPage = UserRedux.actions.userPage;
export const userDrink = UserRedux.actions.userDrink;
export const userDrinkReset = UserRedux.actions.userDrinkReset;
export const changeMute = UserRedux.actions.changeMute;
export const changeGachaCost = UserRedux.actions.changeGachaCost;
export default UserRedux.reducer;
