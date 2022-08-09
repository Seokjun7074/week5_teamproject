import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./slice";

const store = configureStore({
  reducer: {
    cafe: cafeReducer,
  },
});

export default store;
