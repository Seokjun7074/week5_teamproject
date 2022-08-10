import React from "react";
import { ProfileWrap,Photo,Status,Layer,Button } from "./style";
import {useState } from "react";
import Modal from "../modal";
import { useDispatch } from "react-redux";
import { updateTmp } from "../../redux/modules/tmpSlice";

export default function Profile({tmpData}){
  const Dispatch=useDispatch();
  const [modalToggels, setModlaToggles] = useState(false);
  const closeModals = () => {setModlaToggles(false);};
  const [Nick,setNick]=useState('');

  const [fileImage, setFileImage]=useState(null);
  const changeNick=(e)=>{
    setNick(e.target.value);
  }
  const saveImage=(e)=>{
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const [postImage,setPostImage]=useState(setFileImage);
  const onClickHandler=()=>{
   const img_url=fileImage;
   const new_nick=Nick;
   Dispatch(updateTmp({nick:new_nick,profile_url:img_url}));
    // console.log(img_url,new_nick);
    alert("수정되었습니다.")
    closeModals()
  }
  

    return (
      <ProfileWrap>
        <Modal visible={modalToggels} closeModal={closeModals}>
          <div>
            {fileImage && (
              <img
                alt="sample"
                src={fileImage}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              ></img>
            )}
            <h2 style={{ position: "absolute", right: "30%", top: "10%" }}>
              프로필 사진 변경
            </h2>
            <input
              style={{ position: "absolute", right: "9%", top: "20%" }}
              type="file"
              accept="image/*"
              onChange={saveImage}
            />
            <input
            onChange={changeNick}
              style={{
                position: "absolute",
                right: "28%",
                top: "30%",
                border: "1px solid black",}}
              type="text"
              placeholder="닉네임 변경"
            ></input>
            <button style={{ position: "absolute", right: "20%", top: "90%" }} onClick={onClickHandler}>
              수정하기
            </button>
            <button
              style={{ position: "absolute", right: "10%", top: "90%" }}
              onClick={closeModals}
            >
              취소
            </button>
          </div>
        </Modal>
        <Layer>
          <div style={{
              position: "absolute",
              textIndent: "20px",
              lineHeight: "80px",}}>
            my 프로필
          </div>
          <Photo src={tmpData.profile_url} />
          <Status>
            <h5 style={{ marginTop: "60px", marginLeft: "100px" }}>
              {tmpData.nick}님
            </h5>
            <h5 style={{ marginLeft: "170px", marginTop: "20px" }}>
              반갑습니다.
            </h5>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                position: "absolute",
                right: "52%",
                margin: "10px",
              }}
              onClick={() => {
                setModlaToggles(true);
              }}
            >
              개인정보 수정
            </Button>
          </Status>
        </Layer>
        
      </ProfileWrap>
    );
  }