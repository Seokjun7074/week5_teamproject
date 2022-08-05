import React, { useState } from 'react';
import "./style.css";
import { StForm, StWrap, StWrapInner, StInput, StButton, StDiv } from './styleCompo';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';
// Added lib list
// yarn add sweetalert2 sweetalert2-react-content

const MySwal = withReactContent(Swal);

const Join = () => {
     const onKeyPress = (e) => {
        if(e.key === 'Enter') {
          console.log("Enter!");
        }
       }

    const OnSubmitHandler = (e) =>{
      // e.preventDefault();
      MySwal.fire({
        text: 'Thank you for your join',
        icon: 'success',
        confirmButtonText: 'Confirm'
      })
    }

    const onChangeGen = (e) =>{
      console.log(e.target.value);
      // console.log(e.target.id);
      // e.target.id==="F" ? setGender("female") : setGender("male");
    }

    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);
    const [gender,setGender] = useState("F");
    const [date,setDate] = useState([1,1]);

  // let genderS = Array.from(document.getElementsByName("genderS")).find(r => r.checked).value;
  //http://daplus.net/javascript-%EC%84%A0%ED%83%9D%ED%95%9C-%EB%9D%BC%EB%94%94%EC%98%A4-%EB%B2%84%ED%8A%BC%EC%9D%98-%EA%B0%92%EC%9D%84-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95/
return (
  <StWrap>
    <video
      autoPlay
      muted
      loop
      src="https://pixabay.com/ko/videos/download/video-2142_medium.mp4"
      height="100%"
    />
    <StWrapInner join>
      <h1 style={{ margin: "30px", fontSize: "7vh" }}>CAFE JOA</h1>
      <StForm onSubmit={OnSubmitHandler}>
        <span className="icon is-left">
          <i className="fa fa-user" style={{ marginRight: "10px" }} />
        </span>
        <StInput login placeholder="ID"></StInput>
        <StButton loginCheck>CHECK</StButton>
        <br />
        <span className="icon is-small is-left">
          <i className="fa fa-lock" style={{ marginRight: "10px" }} />
        </span>
        <StInput join placeholder="PASSWORD" type="password"></StInput>
        <br />
        <span className="icon is-small is-left">
          <i className="fa fa-lock" style={{ marginRight: "10px" }} />
        </span>
        <StInput join placeholder="CONFIRM-PASSWORD" type="password"></StInput>
        <br />
        <span className="icon is-small is-left">
          <i className="fa fa-address-card-o" style={{ marginRight: "6px" }} />
        </span>
        <StInput join placeholder="NICKNAME" type="text"></StInput>
        <br />
        <span className="icon is-small is-left">
          <i className="fa fa-calendar" style={{ marginRight: "10px" }} />
        </span>
        <StInput login type="date"></StInput>
        <StDiv bday>B/DAY</StDiv>
        <br />
          <i className="fa fa-female" style={{ marginRight: "10px" }} />
        <StInput gender id="F" type="radio" name="genders" value={gender} onChange={onChangeGen}/>
          <i className="fa fa-male" style={{ marginRight: "10px" }} />
        <StInput gender id="M" type="radio" name="genders" value={gender} onChange={onChangeGen} checked/>
        <br/>
        <StButton join>JOIN</StButton>
      </StForm>
    </StWrapInner>
  </StWrap>
);
}
export default Join;

