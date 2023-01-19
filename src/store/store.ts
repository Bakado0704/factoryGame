import { configureStore } from "@reduxjs/toolkit";

import changeJobReducers from "./job";
import JobReducer from "./job/index";
import playReducer from "./play/index";
import userReducer from "./user/index";
import productReducer from "./product/index";


export const store = configureStore({
  reducer: {
    job: changeJobReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
