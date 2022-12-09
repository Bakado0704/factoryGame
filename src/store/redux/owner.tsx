import { createSlice } from "@reduxjs/toolkit";

const changeOutlineSlice = createSlice({
  name: "changeOwner",
  initialState: {
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
  },
  reducers: {
    changeOwner: (state, action) => {
      state.owner = action.payload.owner;
    },
  },
});

export const changeOwner = changeOutlineSlice.actions.changeOwner;
export default changeOutlineSlice.reducer;
