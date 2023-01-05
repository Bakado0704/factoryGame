import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/user";
import { UserIcons } from "../../types/userIcons";
import initialState from "./initialState";
import { productType } from "../../types/product";
import { page } from "../../types/page";
import { GachaStatus } from "../../types/gacha";

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

    changeProductType: (state) => {
      let r = Math.random() * 10;
      if (r > 7) {
        state.user.productType = productType.bonus;
      } else {
        state.user.productType = productType.default;
      }
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
  },
});

export const changeUser = UserRedux.actions.changeUser;
export const changePreviewIcon = UserRedux.actions.changePreviewIcon;
export const changeProductType = UserRedux.actions.changeProductType;
export const changeGachaStatus = UserRedux.actions.changeGachaStatus;
export const userMoneyIncrease = UserRedux.actions.userMoneyIncrease;
export const userPage = UserRedux.actions.userPage;
export default UserRedux.reducer;
