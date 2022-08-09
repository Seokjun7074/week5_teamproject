import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./modules/cafeSlice";
import reviewReducer from "./modules/reviewSlice";

const store = configureStore({
  reducer: {
    cafe: cafeReducer,
    review: reviewReducer,
  },
});

export default store;
