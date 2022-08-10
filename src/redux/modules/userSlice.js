import { createSlice} from "@reduxjs/toolkit";

//  action은 FSA(Flux Standard Action) 
// type: 액션의 성질, payload: 액션의 인자, error, meta : 부가적 내용
const initialState = {
  userList: [],
  tmpUser: {
    user_id : 'sprata',
    pw : '',
    nick : 'sony',
    gender : 'f',
    birth : ['May', 3] ,
    profile_url: '',
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userJoin: (state, action) => {
      state.tmpUser = action.payload;
      console.log(state.tmpUser);
      state.userList.push(state.tmpUser);
      // console.log(state.userList[0]);
    },

    userLogin: (state, action) => {
      state.tmpUser = action.payload;
      console.log(state.tmpUser);
    },
    
  },
  // extraReducers:(builder) =>{
  //      builder
  //      .addCase(join.pending, (state, action) => {
  //       state.isJoining = true;
  //     })}
});

export const { userJoin, userLogin } = userSlice.actions;
export default userSlice.reducer;