import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    reviewList: [],
};


//thunk
const fetchReview = createAsyncThunk(
    'review/fetchReview',
    async () => {
        const response = await axios.get("http://localhost:3001/review");
        const data = await response.json();
        return response;
    });

const reviewSlice = createSlice({
    name: "review",
    initialState,
    //리듀셔 - 액션생성 함수까지 합쳐진것
    reducers: {
        //리뷰 생성 리듀서
        createReview: (state, action) => {
            state.reviewList.push(action.payload);
        },

        //리뷰 삭제 리듀서
        deleteReview: (state, action) => {
            const idx = action.payload;
            return {
                ...state,
                reviewList: state.reviewList.filter((e) => e.review_id !== idx),
            };
        },
        extraReducers: (builder) => {
            builder.addCase(fetchReview.pending, (state) => {
            });
            builder.addCase(fetchReview.fulfilled, (state, action) => {
                state.reviewList = action.payload;
                console.log("데이터 업데이트!!", state.reviewList);
            })
            builder.addCase(fetchReview.rejected, (state, action) => {
                state.reviewList = [];
            })
        }
    }
});

export const { createReview, deleteReview } = reviewSlice.actions;
export { fetchReview };
export default reviewSlice.reducer;
