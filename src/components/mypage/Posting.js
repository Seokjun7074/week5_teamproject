import React from "react";
import {BoxList,CardBox} from "./style";
import { Link } from "react-router-dom";



export default function Posting(){
    return(
        <>
         <div style={{textAlign: "justify",fontSize: '20px',textIndent:'240px',marginTop:"40px"}}>my posting</div>
      <BoxList>
      <Link to={"/detail"}>
              <CardBox src="https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg" />
        </Link>
      </BoxList>

        </>)
}