import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./modules/cafeSlice";

const store = configureStore({
  reducer: {
    cafe: cafeReducer,
  },
});

export default store;
