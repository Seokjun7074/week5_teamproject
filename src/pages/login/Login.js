import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
// import ReactPlayer from 'react-player';

const Login = () => {
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Enter!");
    }
  };

  const OnsubmitHandler = (e) => {
    // e.prevent
  };

  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);

  return (
    <StWrap>
      <video
        autoPlay
        muted
        loop
        src="https://pixabay.com/ko/videos/download/video-28236_medium.mp4"
        width="100%"
      />
      <StWrapInner>
        <h1 style={{ margin: "50px" }}>Caffe</h1>
        <StForm>
          <span className="icon is-left">
            <i className="fa fa-user" style={{ marginRight: "10px" }} />
          </span>
          <StInput placeholder="ID"></StInput>
          <br />
          <span className="icon is-small is-left">
            <i className="fa fa-lock" style={{ marginRight: "10px" }} />
          </span>
          <StInput
            placeholder="PASSWORD"
            type="password"
            onKeyPress={onKeyPress}
          ></StInput>
          <br />
          <StButton login>LOGIN</StButton>
        </StForm>
      </StWrapInner>
    </StWrap>
  );
};
export default Login;

// console StScroll = styled.

const StWrap = styled.div`
  display: flex;
  align-items: center; /* 수직 정렬 */
  flex-direction: row; /* default: row */
  justify-content: center; /* flex direction에 대해서 정렬방식 선택 */
`;

const StWrapInner = styled.div`
  height: 370px;
  //   height : 1000px;
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
`;
const StForm = styled.form`
  justify-content: space-around;
  //  justify-content: center;
`;

const StInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
  height: 35px;
  width: 250px;
  align-items: center;
  padding-left: 7px;
  &:focus {
    outline: 2px solid #f896d8;
  }
`;

const StButton = styled.button`
  // login Button
  ${(props) =>
    props.login &&
    `
    background-color : #564592;
    color: white;
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 290px;
    margin-top: 10px;
    font-weight : bold;
    cursor: pointer;
    &:hover {
        background-color: #ca7df9;
    }
    `}
`;
