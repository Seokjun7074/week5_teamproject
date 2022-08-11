import React from "react"
import { MainWrap, InputWrap, ReviewList } from "./style"
import { useRef, useState } from "react";
import Review from "./review";
import { useDispatch } from "react-redux";
import { createReview, fetchReview } from "../../../redux/modules/reviewSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
const CafeReview = ({ reviewList }) => {

    const dispatch = useDispatch();
    dispatch(fetchReview());
    const cafe_id = useParams().cafe_id;

    const review_id = uuidv4(); // 랜덤 아이디 생성
    const today = new Date().toISOString().slice(0, 10);
    //새로 작성할 리뷰
    const review = useRef("");

    //유저 생성되면 거기서 현재 유저 정보 user.tmp값을 가져와 결합해서 저장한다.
    const [newReview, SetReview] = useState(
        {
            cafe_id: 1,
            review_id: 1,
            post_date: "2022-08-03",
            user_nick: "영등포꿀쟁이",
            user_id: "1",
            content: "테스트",
        }
    );

    const onChangeHandler = (e) => {
        SetReview({ ...newReview, content: e.target.value })
    }

    //리뷰를 추가하는 메소드
    const addReview = () => {
        if (review === "") { alert("리뷰를 입력해주세요!!"); return; }
        else {
            alert("리뷰를 등록하시겠습니까?");

            dispatch(createReview({ ...newReview, post_date: today, review_id: review_id, cafe_id: cafe_id }))
            review.current.value = "";
        }

    }

    return (
        <MainWrap>
            <InputWrap>
                <input type={"text"} ref={review} placeholder="리뷰를 남겨주세요!" onChange={onChangeHandler} />
                <button onClick={addReview}>등록</button>
            </InputWrap>
            <ReviewList>
                {
                    reviewList.filter((item) => item.cafe_id === cafe_id).map((item) => {
                        return <Review key={item.review_id} review_id={item.review_id} user_nick={item.user_nick} post_date={item.post_date} content={item.content} />
                    })
                }
            </ReviewList>
        </MainWrap>);
}

export default CafeReview;