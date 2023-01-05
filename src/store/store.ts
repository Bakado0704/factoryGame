import { configureStore } from "@reduxjs/toolkit";

import changeJobReducers from "./job";

export const store = configureStore({
  reducer: {
    job: changeJobReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
