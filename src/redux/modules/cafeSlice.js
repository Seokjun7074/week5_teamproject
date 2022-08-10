import { createSlice, current } from "@reduxjs/toolkit";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

const initialState = {
  cafeList: [],
  tmp: {},
};

const cafeSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {
    createCafes: (state, action) => {
      state.cafeList.push(action.payload);
    },
    deleteCafes: (state, action) => {
      const idx = action.payload;
      return {
        ...state,
        cafeList: state.cafeList.filter((e) => e.cafe_id !== idx),
      };
    },

    updateCafes: (state, action) => {
      state.cafeList.push(action.payload);
    },

    createTmp: (state, action) => {
      state.tmp = state.cafeList.find((e) => e.cafe_id === action.payload);
      console.log(current(state.tmp));
    },
  },
});

export const { createCafes, deleteCafes, updateCafes, createTmp } =
  cafeSlice.actions;
export default cafeSlice.reducer;
