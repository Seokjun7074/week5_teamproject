
import React from "react";

import CafeInfo from "../../components/detail/CafeInfo";
import CafeReview from "../../components/detail/CafeReview";
import { useSelector } from "react-redux";

const Detail = () => {

    const cafeData = useSelector(state => state.cafe.tmp);
    const reviewList = useSelector(state => state.review.reviewList);

    return (
        <div>
            <CafeInfo cafeData={cafeData} />
            <CafeReview reviewList={reviewList} />
        </div>);
}

export default Detail;