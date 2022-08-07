import React from "react"
import { MainWrap, InputWrap, ReviewList } from "./style"
import { useState } from "react";
import Review from "./review";
const CafeReview = (props) => {

    //리뷰리스트
    const [reviewList, SetReviewList] = useState([{ id: "Rio", date: "2022-02-22", content: "커피조아!" }]);
    //새로 작성할 리뷰
    const [review, SetReview] = useState("");

    //리뷰를 추가하는 메소드
    const AddReview = () => {
        if (review === "") { alert("리뷰를 입력해주세요!!"); return; }
        else {
            alert("리뷰를 등록하시겠습니까?");
            SetReviewList(preData => [...preData, userData])
        }

    }

    const userData = {
        id: "Rio",
        date: "2022-07-14",
        content: ""
    }


    return (
        <MainWrap>
            <InputWrap>
                <input type={"text"} placeholder="리뷰를 남겨주세요!" onChange={(e) => { SetReview(e.target.value); userData.content = review }} />
                <button onClick={AddReview} >등록</button>
            </InputWrap>
            <ReviewList>
                {
                    reviewList.map((item) => {
                        return <Review id={item.id} date={item.date} content={item.content} />
                    })
                }
            </ReviewList>
        </MainWrap>);
}

export default CafeReview;