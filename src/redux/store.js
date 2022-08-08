import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./slice";

const store = configureStore({
  reducer: {
    todo: cafeReducer,
  },
});

export default store;
