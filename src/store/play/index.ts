import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { judgeStatus, PlayStatus } from "../../types/play";
import playpattern from "../../models/playpattern";
import initialState from "./initialState";
import userInitialState from "../user/initialState";

const PlayRedux = createSlice({
  name: "PlayRedux",
  initialState,
  reducers: {
    changeCombo: (state, action: PayloadAction<number>) => {
      if (action.payload !== 0) {
        state.play.combo = state.play.combo + action.payload;
      } else {
        state.play.combo = 0;
      }
    },
    changeNowMoney: (state, action: PayloadAction<number>) => {
      let bonus = 1.0;
      if (userInitialState.user.productType === "bonus") {
        bonus = 2.0;
      }
      if (action.payload !== 0) {
        let plusMoney = Math.floor(action.payload) * bonus;
        if (state.play.combo <= 2) {
          plusMoney = Math.floor(action.payload) * bonus;
        } else if (state.play.combo <= 4) {
          plusMoney = Math.floor(action.payload * 1.2) * bonus;
        } else if (state.play.combo <= 6) {
          plusMoney = Math.floor(action.payload * 1.6) * bonus;
        } else {
          plusMoney = Math.floor(action.payload * 2.0) * bonus;
        }

        state.play.money = state.play.money + plusMoney;
      } else {
        state.play.money = 0;
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

export const changeNowMoney = PlayRedux.actions.changeNowMoney;
export const changeCombo = PlayRedux.actions.changeCombo;
export const staminaDecrese = PlayRedux.actions.staminaDecrese;
export const staminaIncrese = PlayRedux.actions.staminaIncrese;
export const staminaReset = PlayRedux.actions.staminaReset;
export const changeStatus = PlayRedux.actions.changeStatus;
export const changeJudge = PlayRedux.actions.changeJudge;
export const changeProcessCount = PlayRedux.actions.changeProcessCount;
export const changeActivePattern = PlayRedux.actions.changeActivePattern;
export default PlayRedux.reducer;
