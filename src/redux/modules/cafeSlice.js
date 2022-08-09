import { createSlice } from "@reduxjs/toolkit";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

const initialState = {
  cafeList: [],
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
        cafeList: state.cafeList.filter((e) => e.id !== idx),
      };
    },
  },
});

export const { createCafes, deleteCafes } = cafeSlice.actions;
export default cafeSlice.reducer;
