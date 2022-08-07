import {
  PostPaginationWrapper,
  PaginationContainer,
  PaginationNavigator,
  NavigatorButton,
} from "./style";
import { dummyData } from "./dummy";
import PostCard from "../PostCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostPagination = () => {
  const [post, setPost] = useState(dummyData); // 전체 게시물 데이터
  const [curPage, setCurPage] = useState(1); // 현재 페이지
  const limit = 8; // 페이지에서 보여줄 게시물 수
  const startIdx = (curPage - 1) * limit;
  const totalPage = Math.ceil(post.length / limit);
  // 데이터를 여기서 fetch 해와야하나..?

  return (
    <PostPaginationWrapper>
      <PaginationContainer>
        {post.slice(startIdx, startIdx + limit).map((data) => {
          return (
            <Link to={"detail"}>
              <PostCard key={data.id}>{data.id}</PostCard>;
            </Link>
          );
        })}
      </PaginationContainer>
      <PaginationNavigator>
        {Array(totalPage)
          .fill()
          .map((e, idx) => {
            return (
              <NavigatorButton
                key={idx + 1}
                nowPosition={idx + 1 === curPage}
                onClick={() => setCurPage(idx + 1)}
              >
                {idx + 1}
              </NavigatorButton>
            );
          })}
      </PaginationNavigator>
    </PostPaginationWrapper>
  );
};

export default PostPagination;

// 필요한 부분
// limit: 페이지에서 보여줄 게시물 수
// totalPage: 전체 페이지 수 (총 게시물 수 / limit 올림)
// curPage: 현재 페이지
// startIdx: 현재페이지의 첫 인덱스 limit* (curPage -1)    0, 1, 2....

// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
