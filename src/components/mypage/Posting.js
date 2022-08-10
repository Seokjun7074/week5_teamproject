import React from "react";
import {BoxList,CardBox} from "./style";
import { createTmp } from "../../redux/modules/cafeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function Posting(){
  const user=useSelector((state)=>state);
  console.log(user);
  const cafeList = useSelector((state) => {
    return state.cafe.cafeList;
  });
  const dispatch = useDispatch();
  const pic=useSelector((state)=>state.cafe.cafeList)
  const navigate = useNavigate();
  console.log(pic.state)

    return(
        <div>
        {cafeList.map((data) => {
          return (
            <BoxList
              key={data.cafe_id}
              onClick={() => {
                dispatch(createTmp(data.cafe_id));
                navigate(`/detail/${data.cafe_id}`);
              }}
            >
              <CardBox>{data.cafe_id}</CardBox>
              </BoxList>
          );
        })}

        </div>)
}