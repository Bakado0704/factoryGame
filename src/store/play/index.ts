import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import playpattern from "../../models/playpattern";
import initialState from "./initialState";
import { judgeStatus, PlayStatus } from "../../types/play";

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
    changeCompletecount: (state, action: PayloadAction<number>) => {
      state.play.completeCount = state.play.completeCount + action.payload;
    },
    resetCompletecount: (state) => {
      state.play.completeCount = 0;
    },
    changeNowMoney: (state, action: PayloadAction<number>) => {
      if (action.payload !== 0) {
        state.play.money = state.play.money + action.payload;
      } else {
        state.play.money = 0;
      }
    },
    staminaDecrese: (state, action: PayloadAction<number>) => {
      state.play.stamina = state.play.stamina - action.payload;
    },
    staminaReset: (state, action: PayloadAction<number>) => {
      state.play.stamina = 300 - 50 * action.payload;
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
    }
  },
});

export const changeNowMoney = PlayRedux.actions.changeNowMoney;
export const changeCombo = PlayRedux.actions.changeCombo;
export const changeCompletecount = PlayRedux.actions.changeCompletecount;
export const resetCompletecount = PlayRedux.actions.resetCompletecount;
export const staminaDecrese = PlayRedux.actions.staminaDecrese;
export const staminaReset = PlayRedux.actions.staminaReset;
export const changeStatus = PlayRedux.actions.changeStatus;
export const changeJudge = PlayRedux.actions.changeJudge;
export const changeProcessCount = PlayRedux.actions.changeProcessCount;
export const changeActivePattern = PlayRedux.actions.changeActivePattern;
export default PlayRedux.reducer;
