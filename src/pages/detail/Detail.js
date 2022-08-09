
import React from "react";

import CafeInfo from "../../components/detail/CafeInfo";
import CafeReview from "../../components/detail/CafeReview";
import { useSelector } from "react-redux";

const Detail = () => {

    const reviewList = useSelector(state => state.review.reviewList);
    console.log(reviewList);

    return (
        <div>
            <CafeInfo />
            <CafeReview reviewList={reviewList} />
        </div>);
}

export default Detail;