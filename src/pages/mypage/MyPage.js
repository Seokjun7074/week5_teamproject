import React from "react";
import Header from "../../components/myPage/Head";
import Profile from "../../components/myPage/Profile";
import PostPagination from "../../components/main/postsPagination";
import { useSelector } from "react-redux";

export default function MyPage() {
  const tmpData = useSelector((state) => state.tmp.tmp);
  console.log(tmpData);
  return (
    <div>
      <Header />

      <Profile tmpData={tmpData} />
      <PostPagination filter={true} />
    </div>
  );
}
