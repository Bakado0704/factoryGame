import { createSlice } from "@reduxjs/toolkit";

const changeOutlineSlice = createSlice({
  name: "changeOutline",
  initialState: {
    outline: {
       company: "山川製作所",
        category: "精密機械工場",
        work: "システム基盤構築",
        basicMoney: 15,
        holiday: "90%",
        retirement: "完全週休一日制",
        difficulty: "C",
        workplace: "鳥取県"
      }
  },
  reducers: {
    changeOutline: (state, action) => {
      state.outline = action.payload.outline;
    },
  }
});

export const changeOutline = changeOutlineSlice.actions.changeOutline;
export default changeOutlineSlice.reducer;