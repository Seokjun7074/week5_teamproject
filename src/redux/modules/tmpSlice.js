import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tmp: [
   { user_id :'hello',
    nick:'sparta',
  }
  ]
}

const tmpSlice = createSlice({
  name: "tmp",
  initialState,
  reducer: {
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
