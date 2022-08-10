import { configureStore } from "@reduxjs/toolkit";
import cafeReducer from "./modules/cafeSlice";

import tmpReducer from "./modules/tmpSlice";

import reviewReducer from "./modules/reviewSlice";


const store = configureStore({
  reducer: {
    cafe: cafeReducer,

    tmp: tmpReducer,

    review: reviewReducer,

  },
});

export default store;
