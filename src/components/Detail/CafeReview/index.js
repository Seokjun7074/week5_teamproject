import React from "react"
import { MainWrap, InputWrap, ReviewList } from "./style"
import { useState } from "react";
import Review from "./review";
const CafeReview = ({ reviewList }) => {

    //리뷰리스트
    //const [reviewList, SetReviewList] ;
    //새로 작성할 리뷰
    //const [review, SetReview] = useState("");

    //리뷰를 추가하는 메소드
    // const AddReview = () => {
    //     if (review === "") { alert("리뷰를 입력해주세요!!"); return; }
    //     else {
    //         alert("리뷰를 등록하시겠습니까?");
    //         SetReviewList(preData => [...preData, userData])
    //     }

    // }

    return (
        <MainWrap>
            <InputWrap>
                <input type={"text"} placeholder="리뷰를 남겨주세요!" />
                <button>등록</button>
            </InputWrap>
            <ReviewList>
                {
                    reviewList.map((item) => {
                        return <Review review_id={item.review_id} user_nick={item.user_nick} post_date={item.post_date} content={item.content} />
                    })
                }
            </ReviewList>
        </MainWrap>);
}

export default CafeReview;