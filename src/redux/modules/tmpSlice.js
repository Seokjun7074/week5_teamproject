import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tmp: {
        nick :'sparta',
        profile_url: null,
   }
  
};

const tmpSlice = createSlice({
  name: "tmp",
  initialState,
  reducers: {
    updateTmp: (state, action) =>{

    state.tmp = action.payload
        // return{
        // ...state,nick:action.payload.nick,profile_url:action.payload.profile_url
        // }
    },
  },
});

export const { updateTmp } = tmpSlice.actions;
export default tmpSlice.reducer;
