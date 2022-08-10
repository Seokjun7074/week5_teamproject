import React from "react";
import { Mainwrap, BackGround } from "./style";
import Header from "../header";



export default function Head() {
  return (
    <Mainwrap>
      <Header/>
      <BackGround src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg"></BackGround>
      {/* <div style={{color: "white",position: "absolute", lineHeight: "330px",fontSize: "35px", textIndent: "240px"}}>my cafe</div>  */}
    </Mainwrap>
  );
}