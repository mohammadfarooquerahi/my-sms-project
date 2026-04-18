import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice.js";

const store = configureStore({
  reducer: {
    studentReducer,
  },
});

export default store;
