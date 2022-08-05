import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <MainWrap>
      <Header>
        <Button>카페조아</Button>
        <Button>마이페이지</Button>
        <Button>로그아웃</Button>
      </Header>
      <ContentWrap>
        <CafeImage src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg" />
        <CafeInfo>
          <div>카페명 : {"숭실마루"}</div>
          <div>카페명 : {"서울특별시 동작구 XXX"}</div>
          <div>카페명 : {"02-XXX-XXXX"}</div>
          <div>카페명 : {"07시~20시"}</div>
        </CafeInfo>
      </ContentWrap>

      <ReviewWrap>
        <div>
          <input type={"text"} placeholder="후기를 남겨주세요!"></input>
          <button>등록</button>
        </div>
        <div>
          <Review>
            <div style={{ color: "red", textAlign: "left" }}>dudgns5845</div>
            <div>카페가 정말 이쁩니다!!</div>
          </Review>
          <Review>
            <div style={{ color: "red", textAlign: "left" }}>dudgns5845</div>
            <div>카페가 정말 이쁩니다!!</div>
          </Review>
          <Review>
            <div style={{ color: "red", textAlign: "left" }}>dudgns5845</div>
            <div>카페가 정말 이쁩니다!!</div>
          </Review>
          <Review>
            <div style={{ color: "red", textAlign: "left" }}>dudgns5845</div>
            <div>카페가 정말 이쁩니다!!</div>
          </Review>
          <Review>
            <div style={{ color: "red", textAlign: "left" }}>dudgns5845</div>
            <div>카페가 정말 이쁩니다!!</div>
          </Review>
        </div>
      </ReviewWrap>
    </MainWrap>
  );
};

export default Layout;

const MainWrap = styled.div`
  /* background-color: orange; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px;
  justify-content: space-evenly;
`;
const CafeImage = styled.img`
  width: 720px;
  height: 480px;
  background-color: green;
  margin-bottom: 30px;
  object-fit: cover;
  border: none;
  border-radius: 30px;
`;

const CafeInfo = styled.div`
  text-align: left;
  div {
    margin-bottom: 50px;
    font-size: ${(props) => props.theme.fontSize.button};
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ca965c;
  align-items: center;
  justify-content: space-around;

  height: 50px;
  width: 100%;
`;
const Button = styled.button`
  /* background-color: greenyellow; */
  color: black;
  width: 100px;
  height: 30px;
`;

const ReviewWrap = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Review = styled.div`
  width: 800px;
  height: 100px;
  border: 2px solid;
  border-radius: 30px;
  padding: 20px 50px;
  margin-bottom: 50px;
`;
