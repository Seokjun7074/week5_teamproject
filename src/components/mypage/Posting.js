import React from "react";
import {BoxList,CardBox} from "./style";
import { Link } from "react-router-dom";
import { createTmp } from "../../redux/modules/cafeSlice";
import { useDispatch, useSelector } from "react-redux";



export default function Posting(){
  const dispatch = useDispatch();
  const pic=useSelector((state)=>state.cafe.cafeList)
  
  console.log(pic.id)

    return(
        <div>
  
        
         <div style={{textAlign: "justify",fontSize: '20px',textIndent:'240px',marginTop:"40px"}}>my posting</div>
      <BoxList>
      <Link to={`/detail`}>
              <CardBox></CardBox>
        </Link>
      </BoxList>

        </div>)
}