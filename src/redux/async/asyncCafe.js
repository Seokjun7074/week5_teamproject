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
