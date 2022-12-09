import { createSlice } from "@reduxjs/toolkit";

const changeOutlineSlice = createSlice({
  name: "changeIcon",
  initialState: {
    icon: "山川製作所",
  },
  reducers: {
    changeIcon: (state, action) => {
      state.icon = action.payload.icon;
    },
  },
});

export const changeIcon = changeOutlineSlice.actions.changeIcon;
export default changeOutlineSlice.reducer;
