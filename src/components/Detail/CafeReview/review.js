import React from "react";
import { ReviewWrap, ReviewHeader, ReviewContent } from "./style"
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../redux/modules/reviewSlice"
const Review = ({ review_id, user_nick, post_date, content }) => {

    const dispatch = useDispatch();

    const DeleteReview = () => {
        alert("리뷰를 삭제하시겠습니까?");
        console.log(review_id, "호출");
        dispatch(deleteReview(review_id));
    }

    return (
        <ReviewWrap>
            <ReviewHeader>
                <span>{user_nick}</span>
                <span>{post_date}</span>
                <button onClick={DeleteReview}>X</button>
            </ReviewHeader>
            <ReviewContent>{content}</ReviewContent>
        </ReviewWrap>
    )
}

export default Review;
