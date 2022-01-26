import { configureStore } from "@reduxjs/toolkit";

import resultsReducer from "../reducer";

export const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
