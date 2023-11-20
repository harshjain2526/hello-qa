import { configureStore } from "@reduxjs/toolkit";
import groupingSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    grouping: groupingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
