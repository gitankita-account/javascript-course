import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../reducer/CountReducer";
import { fetchReducer } from "../reducer/fetchReducer";
import { counterReducer } from "../reduxToolkit/slice";
export const store = configureStore({
  reducer: {
    countReducer,
    fetchReducer,
    counterReducer,
  },
});
