import React, { useState, useEffect, useRef, createRef } from 'react';
import "./style.css";
import { StForm, StWrap, StWrapInner, StInput, StButton, StSpan, StSelect, StCen } from './styleCompo';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams } from 'react-router-dom';
import {useNavigate } from "react-router-dom";

// import ReactPlayer from 'react-player';
// Added lib list
// yarn add sweetalert2 sweetalert2-react-content

const MySwal = withReactContent(Swal);
const Join = () => {
  const navigate = useNavigate();
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31];
  
  // State Update for joining
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [gender,setGender] = useState("F");
  const [monthSelected, setMonthSelected] = useState(0);
  const [daySelected, setDaySelected] = useState(0);
  const [date,setDate] = useState(["Jan",1]);
  const test = true;
  const tRef = useRef();


   // 유효성 검사
   function is_nickname(asValue) {
    var regExp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    return regExp.test(asValue);
}

function is_password(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    return regExp.test(asValue);
}

function is_email(asValue) {
    var regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    return regExp.test(asValue);
}

const onTest = (e) =>{
  console.log(e);
}


     const onKeyPress = (e) => {
        if(e.key === 'Enter') {
          console.log("Enter!");
        }
       }

    const OnSubmitHandler = (e) =>{
      e.preventDefault();
      console.log(e.target.id.value);
      console.log(e.target.password.value);
      console.log(e.target);
      console.log(e.target.monthSelected.value);
      console.log(e.target.daySelected.value);
      console.log(e.target.genders.value);

      MySwal.fire({
        title: 'Welcome',
        icon: 'success',
      })
    }

    const onClickHandler = (e) =>{
      test?
      MySwal.fire({
        text: 'The ID exists, please try another ID',
        icon: 'fail',
      }) :
      MySwal.fire({
        text: 'You can use this ID',
        icon: 'success',
      })
    }

    const onChangeGen = (e) =>{
      // console.log(e.target.value);
      // console.log(e.target.id);
      (e.target.id==="F") ? setGender("female") : setGender("male");
    }

    const handleChange1 = (e) => {
        // console.log(e.target.value);
        // console.log(monthSelected);
      setMonthSelected(e.target.value);
    }
    
    function handleChange2(e) {
      // console.log(e.target.value);
      // console.log(daySelected);
      setDaySelected(e.target.value);
    }
    // state 비동기성으로 한 박자씩 늦게 console 작용하여, useEffect로 체크
    // useEffect(() => {
    //       console.log(gender);
    //       console.log(monthSelected);
    //       console.log(daySelected);
    //     // eslint-disable-next-line no-use-before-define
    //     }, [daySelected, gender, monthSelected]);
    
  // let genderS = Array.from(document.getElementsByName("genderS")).find(r => r.checked).value;
  //http://daplus.net/javascript-%EC%84%A0%ED%83%9D%ED%95%9C-%EB%9D%BC%EB%94%94%EC%98%A4-%EB%B2%84%ED%8A%BC%EC%9D%98-%EA%B0%92%EC%9D%84-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95/

// Conditional Rendering
// 1. loginCheckBtn, if :id exists, btn >> disabled=true, color changed
// 2. confirmPwInput, disabled=true, if pw.trim()!=="" >> disabled=false
// 3. birthday, if selected Feb, show day untill 29, and others are 30 or 31
// 4. joinBtn, disabled=true,
// if form compo has null value show pop up and focusing on that compo
// not null >> disabled=false and show pop


  return (
    <StWrap>
      <video
        autoPlay
        muted
        loop
        // src="https://pixabay.com/ko/videos/download/video-2142_tiny.mp4"
        src="/videos/join.mp4"
        width="100%"
      />
      <StWrapInner join>
        <h1 style={{ margin: "30px" }}>CAFE JOA</h1>
        <StForm onSubmit={OnSubmitHandler}>
          {/* <span className="icon is-left">
          <i className="fa fa-user" style={{ marginRight: "10px" }} />
        </span> */}
          {/* style={{display:'table-cell', verticalAlign:'middle'}} */}
          <StCen>
            <span className="material-icons">account_box</span>
            <StInput name="id" type="text" login placeholder="ID"></StInput>
            <StButton type="button" loginCheck>
              CHECK
            </StButton>
          </StCen>
          <br />
          {/* <span className="icon is-small is-left">
          <i className="fa fa-lock" style={{ marginRight: "10px" }} />
        </span> */}
          <StCen>
            <span className="material-icons">lock</span>
            <StInput
              join
              name="password"
              placeholder="PASSWORD"
              type="password"
            ></StInput>
          </StCen>
          <br />
          {/* <span className="icon is-small is-left">
          <i className="fa fa-lock" style={{ marginRight: "10px" }} />
        </span> */}
          <StCen>
            <span className="material-icons">lock</span>
            <StInput
              join
              name="re_password"
              placeholder="CONFIRM-PASSWORD"
              type="password"
            ></StInput>
          </StCen>
          <br />
          {/* <span className="icon is-small is-left">
          <i className="fa fa-address-card-o" style={{ marginRight: "6px" }} />
        </span> */}
          <StCen>
            <span className="material-icons">face_retouching_natural</span>
            <StInput
              join
              name="nickName"
              placeholder="NICKNAME"
              type="text"
            ></StInput>
          </StCen>
          <br />
          {/* <span className="icon is-small is-left">
          <i className="fa fa-calendar" style={{ marginRight: "5px" }} />
        </span> */}
          <StCen>
            <span className="material-icons">calendar_month</span>
            <StSpan bday>BIRTHDAY</StSpan>
            <select birth="true" name="monthSelected">
              {month.map((arrayItem, index) => (
                <option key={index} value={arrayItem}>
                  {arrayItem}
                </option>
              ))}
            </select>
            <select birth="true" name="daySelected">
              {day.map((arrayItem, idx) => (
                <option key={idx} value={arrayItem}>
                  {arrayItem}
                </option>
              ))}
            </select>
          </StCen>
          <br />
          <StCen>
            <label htmlFor="F">
              <span className="material-icons">woman_2</span>
            </label>
            <StInput
              gender
              id="F"
              type="radio"
              name="genders"
              value={gender}
              onChange={onChangeGen}
            />
            <label htmlFor="M">
              <span className="material-icons">man_2</span>
            </label>
            <StInput
              gender
              id="M"
              type="radio"
              name="genders"
              value={gender}
              onChange={onChangeGen}
            />
            <br />
          </StCen>
          <StButton join>JOIN</StButton>
        </StForm>
        <StSpan onClick={()=>navigate(-1)} back>
          Back
        </StSpan>
      </StWrapInner>
    </StWrap>
  );
}
export default Join;

