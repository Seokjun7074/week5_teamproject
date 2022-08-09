import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewList: [
        {
            cafe_id: 0,
            review_id: 0,
            post_date: "2022-08-09",
            user_nick: "dudgns5845",
            user_id: "0",
            content: "커피 맛이 좋고 매장 인테리어가 좋습니다. 강추!!",
        },
        {
            cafe_id: 1,
            review_id: 1,
            post_date: "2022-08-07",
            user_nick: "영등포꿀쟁이",
            user_id: "1",
            content: "콘센트가 많아 노트북 하기가 좋은 것 같습니다. 번창하세요~~😆",
        },
    ],
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
