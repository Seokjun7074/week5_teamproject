import React from "react";
import { ReviewWrap, ReviewHeader, ReviewContent } from "./style"

const Review = ({ id, date, content }) => {
    const userData = {
        id: "Rio",
        date: "2022-07-14",
        content: "카페가 깔끔하고 커피맛이 좋았습니다. 다음에 또 방문하겠습니다!!"
    }

    const DeleteReview = () => {
        alert("리뷰를 삭제하시겠습니까?");
    }

    return (
        <ReviewWrap>
            <ReviewHeader>
                <span>{id}</span>
                <span>{date}</span>
                <button onClick={DeleteReview}>X</button>
            </ReviewHeader>
            <ReviewContent>{content}</ReviewContent>
        </ReviewWrap>
    )
}

export default Review;
