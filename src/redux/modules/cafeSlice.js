import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cafeList: [
    {
      id: 0,
      title: "title 1",
      content: "content 1",
    },
    {
      id: 1,
      title: "title 2",
      content: "content 2",
    },
  ],
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
