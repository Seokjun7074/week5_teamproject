import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReview = createAsyncThunk(
    "review/getReview",
    async (arg, thunkAPI) => {
        const response = await userAPI.fetchById(userId);
    }
);
