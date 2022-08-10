import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./modules/cafeSlice";
import tmpReducer from "./modules/tmpSlice";

const store = configureStore({
  reducer: {
    cafe: cafeReducer,
    tmp: tmpReducer,
  },
});

export default store;
