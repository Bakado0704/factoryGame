import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type state = {
  owner: {
    name: string;
    message: string;
  };
};

const initialState: state = {
  owner: {
    name: "山川 哲郎(62)",
    message: "「残業なき労働に価値なし」",
  },
};

const changeOutlineSlice = createSlice({
  name: "changeOwner",
  initialState,
  reducers: {
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

export const changeOwner = changeOutlineSlice.actions.changeOwner;
export default changeOutlineSlice.reducer;
