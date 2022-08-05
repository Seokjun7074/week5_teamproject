import { MainWrapper, MainListWrapper } from "./style";
// import { dummyData } from "../../components/Main/PostsPagination/dummy";
// import PostCard from "../../components/Main/PostCard";
import PostPagination from "../../components/Main/PostsPagination";
const Main = () => {
  //   console.log(dummyData);
  return (
    <MainWrapper>
      <PostPagination></PostPagination>
    </MainWrapper>
  );
};

export default Main;

// 메인뤠퍼;
//  포스트페이지네이션; display: grid
//      포스트카드 여러개 쥬르륵
