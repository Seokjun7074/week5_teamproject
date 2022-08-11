import {
  PostPaginationWrapper,
  PaginationContainer,
  PaginationNavigator,
  NavigatorButton,
  PostCardImg,
} from "./style";
// import { dummyData } from "./dummy";
import PostCard from "../postCard";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createTmp } from "../../../redux/modules/cafeSlice";
import axios from "axios";

const PostPagination = ({ filter }) => {
  const user = useSelector((state) => state.user.userList);
  // console.log(user);

  // Redux store에서 데이터 가져오기
  // const cafeList = useSelector((state) => {
  //   return state.cafe.cafeList;
  // });

  const [cafeList, setCafeList] = useState([]);
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/cafe");
    console.log(data);
    setCafeList(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
  console.log(cafeList);
  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  const dispatch = useDispatch();
  const [curPage, setCurPage] = useState(1); // 현재 페이지
  const limit = 8; // 페이지에서 보여줄 게시물 수
  const startIdx = (curPage - 1) * limit;
  const totalPage = Math.ceil(cafeList.length / limit);

  const userInfo = useSelector((state) => state.user.tmpUser);

  const navigate = useNavigate();
  return (
    <PostPaginationWrapper>
      <PaginationContainer>
        {cafeList
          .filter((e) => {
            // 아래에 리턴 부분 (e.cafe_id.length > 10) 상황에 맞게 쓰시면됩니다.
            return filter ? e.writer_id === userInfo.user_id : e;
          })
          .slice(startIdx, startIdx + limit)
          .map((data) => {
            // console.log(data);
            return (
              <div
                key={data.cafe_id}
                onClick={() => {
                  // dispatch(createTmp(data.cafe_id));
                  navigate(`/detail/${data.cafe_id}`);
                }}
              >
                <PostCard>
                  <PostCardImg
                    src={data.cafe_img}
                    // src="img/default_img.jpeg"
                    onerror="img/default_img.jpeg"
                  />
                </PostCard>
              </div>
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
