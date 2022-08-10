import { createSlice, current} from "@reduxjs/toolkit";

//  action은 FSA(Flux Standard Action) 
// type: 액션의 성질, payload: 액션의 인자, error, meta : 부가적 내용
const initialState = {
  userList: [
    {
    user_id: "ha",
    pw: "a12!",
    nick: "a12!",
    gender: "male",
    birth :['May',5],
    profile_url:''
  }, 
  {

  }
  ],
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
      state.tmpUser = {
        user_id : action.payload.user_id,
        pw: action.payload.pw,
        nick: action.payload.nick,
        gender: action.payload.gender,
        month:[action.payload.monthSelected, action.payload.daySelected],
        profile_url:''
      }
      state.userList.push(state.tmpUser);
      console.log(current(state.userList));
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