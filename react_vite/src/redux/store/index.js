import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../reducer/CountReducer";

export const store = configureStore({
  reducer: {
    countReducer,
  },
});
