import React, { useEffect, useState } from 'react';
import './style.css';
import {
  StForm,
  StWrap,
  StWrapInner,
  StInput,
  StButton,
  StDiv,
  StH1,
} from './styleCompo';
import { Link, useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from "../../redux/modules/userSlice";
const MySwal = withReactContent(Swal);
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user_id, setId] = useState('');
  const [pw, setPw] = useState('');
  
  // srcripts
  // "scripts": {
  //   "start": "node server",
  //   "start:dev": "cross-env NODE_PATH=src react-scripts start",
  //   "build": "cross-env NODE_PATH=src react-scripts build",
  //   "test": "react-scripts test --env=jsdom",
  //   "eject": "react-scripts eject",
  //   "heroku-postbuild": "cross-env NODE_PATH=src npm run build"
  // },

  // dummy data
  const tmpPw = 'a12!';
  const tmpId = 'a';
 
  // console.log(userChk);
  // console.log(pwChk);
 
  const onChangeId = (e) => {
    let tmp = e.target.value;
    tmp = tmp.replace(/[^0-9a-zA-Z]/g, ''); // 
    // const { name, value } = e.target;
    // setLogin({ [name]: value });
    setId(tmp);
    // console.log(user_id);
  };

  const onChangePw = (e) => {
    let tmp = e.target.value;
    tmp = tmp.replace(' ', '');
    setPw(tmp);
    // console.log(pw);
  };


  const onKeyId = (e) => {
    if (e.key === 'Enter') {
      document.getElementById('pw').focus();
      e.preventDefault();
    }
  };
 
  // chk id, pw, inefficient
  const userChk = useSelector(db=>db.user.userList.find((ele)=>ele.user_id===user_id));
  const pwChk = userChk?.pw===pw;

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    if(user_id===''){
      MySwal.fire({
        title: '아이디를 입력하세요.',
        icon: 'error',
      });
      document.getElementById('user_id').focus();
    }else if(pw===''){
      MySwal.fire({
        title: '비밀번호를 입력하세요.',
        icon: 'error',
      });
      document.getElementById('pw').focus();
    }else if(!pwChk){
      MySwal.fire({
        title: '아이디, 비밀번호가 불일치 합니다.',
        icon: 'error',
      });
      document.getElementById('user_id').focus();
    }else if(pwChk){
      MySwal.fire({
        title: '로그인 성공!',
        icon: 'success',
      });
      navigate('/mypage/'+user_id)
    }
    // console.log(e.target?.user_id.value);
  };

  return (
    <StWrap>
      <video
        autoPlay
        muted
        loop
        // 4.0MB > 953kb
        // src='https://pixabay.com/ko/videos/download/video-28236_medium.mp4'
        // src='https://pixabay.com/ko/videos/download/video-28236_tiny.mp4'
        src='/videos/login.mp4'
        width='100%'
      />
      <StWrapInner login>
        <StH1 login onClick={()=>navigate('/')}>CAFE JOA</StH1>
        <StForm onSubmit={OnSubmitHandler}>
          <span className='icon is-left'>
            <i className='fa fa-user' style={{ marginRight: '10px' }} />
          </span>
          <StInput
            login
            autoFocus
            id='user_id'
            name='user_id'
            maxLength='15'
            value={user_id}
            type='text'
            placeholder='ID'
            onChange={onChangeId}
            onKeyPress={onKeyId}
          ></StInput>
          <br />
          <span className='icon is-small is-left'>
            <i className='fa fa-lock' style={{ marginRight: '10px' }} />
          </span>
          <StInput
            login
            id='pw'
            name='pw'
            maxLength='20'
            value={pw}
            type='password'
            placeholder='PASSWORD'
            onChange={onChangePw}
          ></StInput>
          <br />
          <StButton login>LOGIN</StButton>
        </StForm>
        <StDiv join onClick={() => navigate('/join')}>
          Join
        </StDiv>
      </StWrapInner>
    </StWrap>
  );
};
export default Login;
