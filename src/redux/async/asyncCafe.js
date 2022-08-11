import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCafes = createAsyncThunk(
  "cafe/getCafes",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/cafe");
      //   console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __createCafes = createAsyncThunk(
  "cafe/createCafes",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post("http://localhost:3001/cafe", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
