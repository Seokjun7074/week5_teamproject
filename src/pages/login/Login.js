import React, { useState } from 'react';
import "./style.css";
import { StForm, StWrap, StWrapInner, StInput, StButton } from './styleCompo';
// import ReactPlayer from 'react-player';

const Login = () => {
    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
          console.log("Enter!");
        }
       }

    const OnSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(e.current);
    }

    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);
 

  return (
<StWrap>
<video autoPlay muted loop
    src="https://pixabay.com/ko/videos/download/video-28236_medium.mp4"
    height="100%"/>
    <StWrapInner login>
        <h1 style={{margin: "50px",fontSize: "7vh"}}>CAFE JOA</h1>
        <StForm onSubmit={OnSubmitHandler}>
        <span className="icon is-left"><i className="fa fa-user" style={{marginRight: "10px"}}/></span>
        <StInput login placeholder='ID'></StInput>
        <br/>
        <span className="icon is-small is-left"><i className="fa fa-lock" style={{marginRight: "10px"}}/></span>
        <StInput login placeholder='PASSWORD' type="password" onKeyPress={onKeyPress}></StInput>
        <br/>
        <StButton login>LOGIN</StButton>
        </StForm>
    </StWrapInner>
</StWrap>
  )
}
export default Login;
