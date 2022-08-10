import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewList: [],
};

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
    }
});

export const { createReview, deleteReview } = reviewSlice.actions;
export default reviewSlice.reducer;
