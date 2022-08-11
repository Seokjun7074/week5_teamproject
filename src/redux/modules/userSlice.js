import { createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";
import apis from "../../api/axios";
import { __getUser, __userIdChk, __userJoin } from "../../async/user";

//  action은 FSA(Flux Standard Action) 
// type: 액션의 성질, payload: 액션의 인자, error, meta : 부가적 내용
export let warnMsg ='';
export let msg ='';

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

    userLogin: (state, action) => {
      state.tmpUser = action.payload;
      console.log(state.tmpUser);

    },
    
    userIdChk: (state, action) => {
      console.log(action.payload);
      try {
        // let tmpRes = true;
       const res = apis.user_idChk(
        action.payload
        ).then((res)=>      
        {
          try{
            console.log(res);
            console.log(res.data[0].user_id)
        // tmp = res.data[0].user_id
        console.log(msg)
        }
        catch(error){
          msg = '사용가능한 아이디 입니다.';
          // console.log(msg);
        }
      }
        )
        // console.log(tmpRes)
        // console.log(tmp);
        console.log('User Chk')
    
      } catch (error) {
       warnMsg = '로그인 다시 시도';
       console.log(warnMsg);
      }
    }
    },
    extraReducers: {
      [__getUser.pending]: (state, action) => {
        console.log("pending 상태", state, action); // Promise가 pending일때 dispatch
      },
      [__getUser.fulfilled]: (state, action) => {
        console.log("fulfilled 상태", state, action); // Promise가 fullfilled일 때 dispatch
      },
      [__getUser.rejected]: (state, action) => {
        console.log("rejected 상태", state, action); // Promise가 rejected일 때 dispatch
      },
      [__userJoin.pending]: (state, action) => {
        console.log("pending 상태", state, action); // Promise가 pending일때 dispatch
      },
      [__userJoin.fulfilled]: (state, action) => {
        console.log("fulfilled 상태", state, action); // Promise가 fullfilled일 때 dispatch
      },
      [__userJoin.rejected]: (state, action) => {
        console.log("rejected 상태", state, action); // Promise가 rejected일 때 dispatch
      },
      [__userIdChk.pending]: (state, action) => {
        console.log("pending 상태", state, action); // Promise가 pending일때 dispatch
      },
      [__userIdChk.fulfilled]: (state, action) => {
        console.log("fulfilled 상태", state, action); // Promise가 fullfilled일 때 dispatch
        return true;
      },
      [__userIdChk.rejected]: (state, action) => {
        console.log("rejected 상태", state, action); // Promise가 rejected일 때 dispatch
        return false;
      },
    },  
  },
);

export const { userJoin, userLogin, userIdChk } = userSlice.actions;
export default userSlice.reducer;