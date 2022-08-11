import { createSlice, current } from "@reduxjs/toolkit";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { __createCafes, __getCafes } from "../async/asyncCafe";
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
  extraReducers: {
    [__getCafes.pending]: (state, action) => {
      // console.log("pending 상태", state, action); // Promise가 pending일때 dispatch
    },
    [__getCafes.fulfilled]: (state, action) => {
      // console.log("fulfilled 상태", state, action);
      state.cafeList = action.payload; // Promise가 fullfilled일 때 dispatch
      // console.log(state.cafeList);
    },
    [__getCafes.rejected]: (state, action) => {
      // console.log("rejected 상태", state, action); // Promise가 rejected일 때 dispatch
    },
    [__createCafes.pending]: (state, action) => {
      // console.log("pending 상태", state, action); // Promise가 pending일때 dispatch
    },
    [__createCafes.fulfilled]: (state, action) => {
      // console.log("fulfilled 상태", state, action);
      state.cafeList.push(action.payload); // Promise가 fullfilled일 때 dispatch
    },
    [__createCafes.rejected]: (state, action) => {
      // console.log("rejected 상태", state, action); // Promise가 rejected일 때 dispatch
    },
  },
});

export const { createCafes, deleteCafes, updateCafes, createTmp } =
  cafeSlice.actions;
export default cafeSlice.reducer;
