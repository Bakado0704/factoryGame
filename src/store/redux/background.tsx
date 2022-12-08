import { createSlice } from "@reduxjs/toolkit";
import { BackgroundType } from "../../types/background";

const changeTypeSlice = createSlice({
  name: "changeType",
  initialState: {
    type: BackgroundType.yamagawa,
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const changeType = changeTypeSlice.actions.changeType;
export default changeTypeSlice.reducer;
