import React from "react";
import styled from "styled-components";
import Header from "../header";
import { useState } from "react";
import Modal from "../modal";
import { Link } from "react-router-dom";

export default function MyPage() {
  const [modalToggel, setModlaToggle] = useState(false);
  const closeModal = () => {setModlaToggle(false);};
  const [fileImage, setFileImage]=useState("");
  const [comment,setComment]=useState("");
  const saveImage=(e)=>{
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const DeleteImage = ()=>{
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  const onChangeComment = (e)=>{
    setComment(e.target.value)
  }

  return (
    <Mainwrap>
       <Modal visible={modalToggel} closeModal={closeModal}>
        {fileImage &&(<img alt="sample"src={fileImage} style={{width:"350px",height:"300px",marginTop:"10PX",marginLeft:"20px"}}></img>)}
        <input style={{position:"absolute", right:"5%"}}type="file"accept="image/*"onChange={saveImage} />
        <div style={{flexDirection: "column", justifyContent:"space-between"}}>
        <h3 style={{marginTop:"10px"}}>comment</h3>
        <button >업로드 하기</button>
        <button style={{paddingLeft:"8PX",paddingRight:"8PX",paddingTop:"3px",border: "2px solid gray",borderRadius:"5px"}}onClick={()=>DeleteImage()}>삭제</button>
        </div>
        <div style={{flexDirection: "COLUMN"}}>
        카페 명 :<input style={{marginTop:"20px",marginLeft:"10px",width:"100px",border:"3px solid gainsboro"}}onChange={onChangeComment} type={"text"}></input>
        카페 주소 :<input style={{marginTop:"20px",marginLeft:"10px",width:"100px",border:"3px solid gainsboro"}}onChange={onChangeComment} type={"text"}></input>
        전화 번호 :<input style={{marginTop:"20px",marginLeft:"10px",width:"100px",border:"3px solid gainsboro"}}onChange={onChangeComment} type={"text"}></input>
        영업 시간 :<input style={{marginTop:"20px",marginLeft:"10px",width:"100px",border:"3px solid gainsboro"}}onChange={onChangeComment} type={"text"}></input>
        </div>
        </Modal>
      <Header/>
      <BackGround src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg"></BackGround>
      <div style={{color: "white",position: "absolute", lineHeight: "330px",fontSize: "35px", textIndent: "240px"}}>my cafe</div>
      <ProfileWrap>
        <Layer>
          <b style={{position:"absolute",textIndent:'20px',lineHeight: "80px"}}>my 프로필</b>
          <Photo src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg"/>
          <Status>
            <h5 style={{marginTop:"60px",marginLeft:"100px"}}>NICKNAME 님</h5>
            <h5 style={{marginLeft:"100px"}}>반갑습니다.</h5>
            {/* <h3>age :</h3>
            <h3>sex :</h3>
  <h3>birthday :</h3> */}
            <Button style={{paddingLeft:"30px",paddingRight:"30px", marginLeft:"100px",marginTop:"20PX"}}onClick={()=>{setModlaToggle(true)}}>업로드 하기 </Button>
            <Button style={{backgroundColor:"black",color:"white"}}onClick={()=>{setModlaToggle(true)}} >개인정보 수정</Button>
          </Status>
        </Layer>
      </ProfileWrap>
        <div style={{textAlign: "justify",fontSize: '20px',textIndent:'240px',marginTop:"40px"}}>my posting</div>
      <BoxList>
      <Link to={"/detail"}>
              <CardBox src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg" />
        </Link>
      </BoxList>
    </Mainwrap>
  );
}
const Mainwrap = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-align: left;
`
const BackGround = styled.img`
  background-color: green;
  height:140px;
  object-fit:cover;
`
const Layer = styled.div`
  background-color: gainsboro;
  margin:40px 370px 40px 0px;
  width: 50%;
  height: 280px;
  display: flex;
  border-radius: 10px;
`;
const Status = styled.div`
  font-size: 30px;
  height: 280px;
  padding: auto;
  color: black;
  flex-direction: row;
`;
const Photo = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 20%;
  background-color: white;
  margin-left:100px;
  margin-top:30px;
`;
const Button = styled.button`
  font-size: 15px;
  margin-right: 20px;
  background-color: white;
  padding-left: 25px;
  padding-top:10px;
  padding-bottom:10px;
  padding-right:25px;
  border: 3px solid gainsboro;
  border-radius: 7px;
  font-size:13px;
  &:hover {
  text-decoration:underline;
  }
`;
const ProfileWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const BoxList = styled.div`
  display: flex;
  margin-left:240px;
`;
const CardBox = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: tomato;
  cursor: pointer;
  margin: 30px 10px 30px 0px ;
  padding:2px;
`;
