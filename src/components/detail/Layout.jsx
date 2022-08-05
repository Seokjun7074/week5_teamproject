import React from "react";
import styled from "styled-components";
const Layout = (props) => {
  return (
    <MainWrap>
      <button>카페조아</button>
      <ContentWrap>
        <Image></Image>
        <InputField type={"text"} value={"카페명"} />
        <InputField type={"text"} value={"카페 주소"} />
        <InputField type={"text"} value={"카페 전화번호"} />
        <InputField type={"text"} value={"카페 영업시간"} />
        <Button>저장</Button>
      </ContentWrap>
    </MainWrap>
  );
};

export default Layout;

const MainWrap = styled.div`
  min-width: 800px;
  min-width: 1500px;
  height: 800px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 500px;
  height: 700px;
  background-color: red;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;
const Image = styled.div`
  width: 300px;
  height: 200px;
  background-color: green;
  margin-bottom: 30px;
`;

const InputField = styled.input`
  background-color: blue;
  width: 400px;
  height: 50px;
  margin-top: 30px;
  color: white;
`;

const Button = styled.button`
  background-color: greenyellow;
  color: white;
  width: 100px;
  height: 30px;
  margin-top: 100px;
`;
