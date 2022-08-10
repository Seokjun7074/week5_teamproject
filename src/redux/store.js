import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./modules/cafeSlice";
import tmpReducer from "./modules/tmpSlice";
import reviewReducer from "./modules/reviewSlice";
import userReducer from "./modules/userSlice";


const store = configureStore({
  reducer: {
    cafe: cafeReducer,
    tmp: tmpReducer,
    review: reviewReducer,
    user: userReducer,
  },
});

export default store;
