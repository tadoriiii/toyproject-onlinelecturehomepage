import { configureStore } from "@reduxjs/toolkit";

import resultsReducer from "../reducer";

export const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});

// TODO: redux library 다운로드를 안받으니까 당연히 store에 getState가 없죠...
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
