import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./modules/cafeSlice";
import reviewReducer from "./modules/reviewSlice";
import userReducer from "./modules/userSlice";

const store = configureStore({
  reducer: {
    cafe: cafeReducer,
    review: reviewReducer,
    user: userReducer,
  },
});

export default store;
