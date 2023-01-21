import { configureStore } from "@reduxjs/toolkit";

import JobReducer from "./job/index";
import PlayReducer from "./play/index";
import UserReducer from "./user/index";


export const store = configureStore({
  reducer: {
    job: JobReducer,
    play: PlayReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
