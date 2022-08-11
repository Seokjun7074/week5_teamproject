import React from "react";

import CafeInfo from "../../components/detail/CafeInfo";
import CafeReview from "../../components/detail/CafeReview";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import axios from "axios";
const Detail = () => {
  const cafeData = useSelector((state) => state.cafe.tmp);
  //const reviewList = useSelector((state) => state.review.reviewList);

  const [reviewList, SetReview] = useState();

  const dbURL = "http://localhost:3001/review?";
  //서버에서 카페 정보를 가져온다
  const fetchReviews = async () => {
    const { data } = await axios.get("http://localhost:3001/review?cafe_id=고유 id 1");
    console.log(data);
    SetReview(data);
  }
  fetchReviews();
  return (
    <div>
      <Header />
      <CafeInfo cafeData={cafeData} />
      <CafeReview reviewList={reviewList} />
    </div>
  );
};

export default Detail;
