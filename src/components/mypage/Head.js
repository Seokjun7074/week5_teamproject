import React from "react";
import { Mainwrap, BackGround } from "./style";
import Header from "../header";



export default function Head() {
  
  

  return (
    <Mainwrap>
      <Header/>
      <BackGround src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg"></BackGround>
      <div style={{color: "white",position: "absolute", lineHeight: "330px",fontSize: "35px", textIndent: "240px"}}>my cafe</div> 
    </Mainwrap>
  );
}

   {/* {fileImage &&(<img alt="sample"src={fileImage} style={{width:"350px",height:"300px",marginTop:"10PX",marginLeft:"20px"}}></img>)}
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
        </div> */}