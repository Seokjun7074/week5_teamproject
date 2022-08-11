import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apis, { api } from "../api/axios";

export const __getUser = createAsyncThunk(
    "/userList",
    async (thunkAPI) => {
      try {
        const data = apis.user_show();
        const dataConfrimed = thunkAPI.fulfillWithValue(data.data);
        // console.log(data);
        return thunkAPI.fulfillWithValue(dataConfrimed);
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue;
      }
    }
  );

export const __userJoin = createAsyncThunk(
    "/userList/join",
    async (payload, thunkAPI) => {
      try {
       const tmpUser = {
            id: payload.user_id,
            user_id : payload.user_id,
            pw: payload.pw,
            nick: payload.nick,
            gender: payload.gender,
            month:[payload.monthSelected, payload.daySelected],
            profile_url:''
          }
        apis.user_join(tmpUser);
        console.log('등록완료');
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue;
      }
    }
  );

  export const __userIdChk = createAsyncThunk(
    "/userList/idChk",
    async (payload, thunkAPI) => {
      try {
      const data = apis.user_idChk(payload)
        console.log(data);
        const dataConfrimed = thunkAPI.fulfillWithValue((await data).data);
        // console.log(data);
        return thunkAPI.fulfillWithValue(dataConfrimed);
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue;
      }
    }
  );



