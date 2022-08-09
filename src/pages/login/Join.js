import React, { useState, useEffect, useRef, createRef } from 'react';
import './style.css';
import {
  StForm,
  StWrap,
  StWrapInner,
  StInput,
  StButton,
  StDiv,
  StSelect,
  StCen,
} from './styleCompo';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {userJoin} from './User';

// import ReactPlayer from 'react-player';
// Added lib list
// yarn add sweetalert2 sweetalert2-react-content

const MySwal = withReactContent(Swal);
const Join = () => {
  const navigate = useNavigate();
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  // State Update for joining
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [rePw, setRePw] = useState('');
  const [nick, setNick] = useState('');
  const [gender, setGender] = useState('female');
  const [monthSelected, setMonthSelected] = useState('Jan');
  const [daySelected, setDaySelected] = useState(1);
  const [birth, setBirth] = useState(['Jan', 1]);
  const [isChk, setIsChk] = useState(true);
  // const [isPw, setIsPw] = useState(false);
  const [warn, setWarn] = useState('');

  // initial
  const initialState = {
    id: '',
    pw: '',
    nick: '',
    gender: 'female',
    birth:['May',1],
  };

  const [user, setUser] = useState(initialState);
  const [user2, setUser2] = useState(initialState);


  // dummy existed ID
  const tmpId = 'hello';
  
  // Validation Check
  // function is_nickname(asValue) {
  //   var regExp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
  //   return regExp.test(asValue);
  // }

  //6~20 영문, 최소 1개의 숫자 혹은 특수 문자를 포함해야 함
  //  /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
  // function is_password(asValue) {
  //   var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{4,20}$/;
  //   return regExp.test(asValue);
  // }



  // test console.log(e)
  const onTest = (e) => {
    console.log(e);
  };

  // user set
  const userFunc = (e) => {
    const { name, value } = e.target;
    setUser2({ ...user2, [name]: value });
  }

  

  // AutoFocus when using Enter
  const onKeyId = (e) => {
    if (e.key === 'Enter') {
      // e.preventDefault();
      is_id(e);
    }
  };
  const onKeyPw = (e) => {
    // enter keyCode
    if (e.keyCode === 13) {
     if(onChangePw(e)) {
      document.getElementById('rePw').focus();
     }else{
      document.getElementById('pw').focus();
      }
      e.preventDefault();
    }
  };
  const onKeyRePw = (e) => {
    // enter keyCode
    if (e.keyCode === 13) {
      if(onChangeRePw(e)) {
       document.getElementById('nick').focus();
      }else{
       document.getElementById('rePw').focus();
       }
       e.preventDefault();
     }
  };
  const onKeyNick = (e) =>{
    if (e.keyCode === 13) {
     onChangeNick(e); 
    }
  }

  // red alert
  const redAlert = (msg) => {
  MySwal.fire({
    title: `${msg}`,
    icon: 'error',
  });
}
// const{name, value} = e.target;
// setUser({[name]:value});

// onSubmit **
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let tmp = e.target;
    setMonthSelected(tmp.monthSelected?.value);
    setDaySelected(tmp.daySelected?.value);
    setUser ({
    id,
    pw,
    nick,
    gender,
    birth:[monthSelected,daySelected],
    })
    console.log(user.pw);
    console.log(user.birth);
    console.log(user2.pw);
    
    // console.log(e.target.id.value);
    // console.log(e.target.password.value);
    // console.log(e.target.monthSelected.value);
    // console.log(e.target.daySelected.value);
    // console.log(e.target.genders.value);

  // Reg
  let numReg = pw.search(/[0-9]/g);
  let engReg = pw.search(/[a-z]/ig);
  let speReg = pw.search(/[!@#$%^&*]/gi);
    if(pw===''){
      setWarn('비밀번호를 입력해주세요.');
      redAlert(warn);
    } else if(4 > pw.length || pw.length > 20){
      setWarn('비밀번호 4자리 ~ 20자리 이내로 입력해주세요.');
      redAlert(warn);
     }else if(numReg < 0 || engReg < 0 || speReg < 0 ){
      setWarn('비밀번호 영문, 숫자, 특수문자를 혼합하여 입력해주세요.');
      redAlert(warn);
     }else if(pw !==rePw){
      setWarn('비밀번호가 일치하지 않습니다.');
      redAlert(warn);
     }else if(nick===''){
      setWarn('닉네임을 입력하세요.');
      redAlert(warn);
     }else {
      setWarn('');
      MySwal.fire({
        title: `Welcome, ${e.target.nickName.value}!`,
        icon: 'success',
      });

  }
   
  };

  // Gender set, use checked to set default
  const onChangeGen = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.id);
    e.target.id === 'F' ? setGender('female') : setGender('male');
    userFunc(e);
  };

  // Id check and set immediately
  const onChangeId = (e) => {
    e.target.value = e.target.value.replace(/[^0-9a-zA-Z]/g, ''); // only eng (others are restricted)
    setId(e.target.value.trim());
    // console.log(e.target.value);
    userFunc(e);
  };

  // Nick handler
  const onChangeNick = (e) =>{
    let tmp = e.target.value;
   tmp = tmp.replace(' ', ''); // remove space only
    setNick(tmp);
    if(tmp===''){
      setWarn('닉네임을 정해주세요.');
      e.preventDefault();
    }else{
      setWarn('');
      userFunc(e);
    }
  }

  // Password set, check val light
  const onChangePw = (e) => {
    let tmPw = e.target.value;
    tmPw.replace(' ','')
    setPw(tmPw);// remove space only
    // Var Reg
  let numReg = tmPw.search(/[0-9]/g);
  let engReg = tmPw.search(/[a-z]/ig);
  let speReg = tmPw.search(/[!@#$%^&*]/gi);
    if(e.target.value===''){
      setWarn('비밀번호를 입력해주세요.');
      return false;
    } else if(4 > tmPw.length || tmPw.length > 20){
      setWarn('4자리 ~ 20자리 이내로 입력해주세요.');
      return false;
     }else if(numReg < 0 || engReg < 0 || speReg < 0 ){
      setWarn('영문, 숫자, 특수문자를 혼합하여 입력해주세요.');
      return false;
     }else if(rePw !==tmPw){
      setWarn('비밀번호가 일치하지 않습니다.');
      return true;
     }else {
       setWarn('')
       userFunc(e);
       return true;
      
  }
}
 
  // Re-Password set, check val light
  const onChangeRePw = (e) => {
    let tmPw = e.target.value;
    setRePw(tmPw);
    if(e.target.value===''){
      setWarn('비밀번호를 입력해주세요.');
      return false;
    } else if (pw !== tmPw) {
      setWarn('비밀번호가 일치하지 않습니다.');
      return false;
      }
    if(pw === tmPw){
      setWarn('');
      userFunc(e);
      return true;
    }
    userFunc(e);
    // console.log(e.target.value);
  };

  // state 비동기성으로 한 박자씩 늦게 console 작용하여, useEffect로 체크
  // useEffect(() => {
  //   console.log(gender);
  //   console.log(monthSelected);
  //   console.log(daySelected);
  //   // eslint-disable-next-line no-use-before-define
  // }, [daySelected, gender, monthSelected]);
  //http://daplus.net/javascript-%EC%84%A0%ED%83%9D%ED%95%9C-%EB%9D%BC%EB%94%94%EC%98%A4-%EB%B2%84%ED%8A%BC%EC%9D%98-%EA%B0%92%EC%9D%84-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95/

  // Conditional Rendering
  // 1. loginCheckBtn, if :id dosen't exists, btn >> disabled=true, color changed => later
  const is_id = (e) => {
    // let isChk = e.target.isChk;
    if (e.target.value === '') {
      MySwal.fire({
        title: 'Write the ID that you want!',
        icon: 'error',
      });
    } else {
      if (tmpId === e.target.value) {
        setIsChk(true);
        MySwal.fire({
          title: 'The ID exists, please try another ID',
          icon: 'error',
        });
      } else {
        setIsChk(false);
        MySwal.fire({
          title: 'You can use this ID',
          icon: 'success',
        }).then(() => {
          document.getElementById('pw').focus();
        });
      }
    }
    userFunc(e);
    e.preventDefault();
  };

  const is_pw = (e) =>{
    if (warn === '') {
       document.getElementById('warn').style.display = 'none';
    } 
    userFunc(e);
  }; 

  // 2. confirmPwInput, disabled=true, if pw.trim()!=='' >> disabled=false
  // 3. birthday, if selected Feb, show day untill 29, and others are 30 or 31
  // 4. joinBtn, disabled=true,=> alert pop, instead of this (tmp solved)
  // if form compo has null value show pop up and focusing on that compo
  // not null >> disabled=false and show popup

  return (
    <StWrap>
      <video
        autoPlay
        muted
        loop
        // src='https://pixabay.com/ko/videos/download/video-2142_tiny.mp4'
        src='/videos/join.mp4'
        width='100%'
      />
      <StWrapInner join>
        <h1 style={{ margin: '30px' }}>CAFE JOA</h1>
        <StForm onSubmit={onSubmitHandler}>
          {/* <span className='icon is-left'>
<i className='fa fa-user' style={{ marginRight: '10px' }} />
</span> */}
          {/* style={{display:'table-cell', verticalAlign:'middle'}} */}
          <StCen>
            <span className='material-icons'>account_box</span>
            <StInput
              joinCheck
              name='id'
              disabled={!isChk}
              type='text'
              placeholder='ID'
              value={id}
              onChange={onChangeId}
              onKeyDown={onKeyId}
              maxLength='15'
              autoFocus
            ></StInput>
            <StButton
              joinCheck
              id='idChk'
              isChk={isChk}
              value={id}
              type='button'
              onClick={is_id}
            >
              CHECK
            </StButton>
          </StCen>
          <br />
          {/* <span className='icon is-small is-left'>
<i className='fa fa-lock' style={{ marginRight: '10px' }} />
</span> */}
          <StCen>
            <span className='material-icons'>lock</span>
            <StInput
              join
              id='pw'
              name='password'
              type='password'
              value={pw}
              placeholder='PASSWORD'
              onChange={onChangePw}
              onKeyDown={onKeyPw}
              maxLength='20'
            ></StInput>
          </StCen>
          <br />
          {/* <span className='icon is-small is-left'>
<i className='fa fa-lock' style={{ marginRight: '10px' }} />
</span> */}
          <StCen>
            <span className='material-icons'>lock</span>
            <StInput
              join
              id='rePw'
              name='re_password'
              type='password'
              value={rePw}
              placeholder='CONFIRM-PASSWORD'
              onChange={onChangeRePw}
              onKeyDown={onKeyRePw}
              maxLength='20'
            ></StInput>
          </StCen>
          <br />
          {/* <span className='icon is-small is-left'>
<i className='fa fa-address-card-o' style={{ marginRight: '6px' }} />
</span> */}
          <StCen>
            <span className='material-icons'>face_retouching_natural</span>
            <StInput
              join
              id='nick'
              name='nickName'
              placeholder='NICKNAME'
              type='text'
              maxLength='20'
              onChange={onChangeNick}
              onKeyDown={onKeyNick}
            ></StInput>
          </StCen>
          <br />
          <StDiv warn id='warn' isPw={is_pw}>{warn}</StDiv>
          {/* <span className='icon is-small is-left'>
<i className='fa fa-calendar' style={{ marginRight: '5px' }} />
</span> */}
          <StCen>
            <span className='material-icons'>calendar_month</span>
            <StDiv bday>BIRTHDAY</StDiv>
            <select birth='true' name='monthSelected' onChange={onTest}>
              {month.map((arrayItem, index) => (
                <option key={index} value={arrayItem}>
                  {arrayItem}
                </option>
              ))}
            </select>
            <select birth='true' name='daySelected'>
              {day.map((arrayItem, idx) => (
                <option key={idx} value={arrayItem}>
                  {arrayItem}
                </option>
              ))}
            </select>
          </StCen>
          <br />
          <StCen>
            <label htmlFor='F'>
              <span className='material-icons'>woman_2</span>
            </label>
            <StInput
              gender
              id='F'
              type='radio'
              name='genders'
              value={gender}
              onChange={onChangeGen}
              checked={gender === 'female'}
            />
            <label htmlFor='M'>
              <span className='material-icons'>man_2</span>
            </label>
            <StInput
              gender
              id='M'
              type='radio'
              name='genders'
              value={gender}
              onChange={onChangeGen}
              checked={gender === 'male'}
            />
            <br />
          </StCen>
          <StButton join>JOIN</StButton>
        </StForm>
        <StDiv onClick={() => navigate(-1)} back>
          Back
        </StDiv>
      </StWrapInner>
    </StWrap>
  );
};

export default Join;
