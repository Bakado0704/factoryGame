import { configureStore } from "@reduxjs/toolkit";

import changeJobReducer from "./job";

export const store = configureStore({
  reducer: {
    job: changeJobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
