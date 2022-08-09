import React, { useEffect, useState } from 'react';
import "./style.css";
import { StForm, StWrap, StWrapInner, StInput, StButton, StDiv } from './styleCompo';
import { Link, useNavigate } from "react-router-dom";
// import ReactPlayer from 'react-player';

const Login = () => {
    const navigate = useNavigate();

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
          console.log("Enter!");
        }
       }

    const OnSubmitHandler = (e) =>{
        e.preventDefault();
        // console.log(e.current);
    }

    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);
 

  return (
<StWrap>
<video autoPlay muted loop
    // 4.0MB > 953kb
    // src="https://pixabay.com/ko/videos/download/video-28236_medium.mp4"
    // src="https://pixabay.com/ko/videos/download/video-28236_tiny.mp4"
    src="/videos/login.mp4"
    width="100%"/>
    <StWrapInner login>
        <h1 style={{margin: "50px"}}>CAFE JOA</h1>
        <StForm onSubmit={OnSubmitHandler}>
        <span className="icon is-left"><i className="fa fa-user" style={{marginRight: "10px"}}/></span>
        <StInput login placeholder='ID'></StInput>
        <br/>
        <span className="icon is-small is-left"><i className="fa fa-lock" style={{marginRight: "10px"}}/></span>
        <StInput login placeholder='PASSWORD' type="password" onKeyPress={onKeyPress}></StInput>
        <br/>
        <StButton login>LOGIN</StButton>
        </StForm>
        <StDiv join onClick={()=>navigate("/join")}>Join</StDiv>
</StWrapInner>
</StWrap>
  )
}
export default Login;
