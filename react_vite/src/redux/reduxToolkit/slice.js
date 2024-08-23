import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "counter", //  name
  initialState: 0, // insitial state
  reducers: {
    // reducer
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
  },
});

export const counterAction = dataSlice.actions;
export const counterReducer = dataSlice.reducer;
