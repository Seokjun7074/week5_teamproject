import React from "react";
import { CafeImage, MainWrap, CafeInfoWrap, EditButton } from "./style";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  updateCafes,
  deleteCafes,
  createTmp,
} from "../../../redux/modules/cafeSlice";
const CafeInfo = ({ cafeData }) => {
  const dispatch = useDispatch();

  const cafe_id = useParams().cafe_id;
  // console.log(cafe_id);

  // console.log(cafeData);
  const [isEdit, SetEdit] = useState(false);
  const [isHeart, SetHeart] = useState(false);

  // <<<<<<< HEAD
  const [title, SetTitle] = useState(cafeData.cafe_name);
  const [address, SetAddress] = useState(cafeData.cafe_address);
  const [phone, SetPhone] = useState(cafeData.cafe_phone);
  const [time, SetTime] = useState(cafeData.cafe_time);
  const [image, SetImage] = useState(cafeData.cafe_img);

  const newData = {
    ...cafeData,
    cafe_name: title,
    cafe_address: address,
    cafe_phone: phone,
    cafe_time: time,
    cafe_img: image,
  };

  const [heart, SetHeartCount] = useState(1234);

  const onClickEditBtn = (e) => {
    if (isEdit) alert("수정하시겠습니까?");
    SetEdit(!isEdit);
    //업데이트할 카페 정보
    dispatch(deleteCafes(cafe_id));
    dispatch(updateCafes(newData));
    dispatch(createTmp(cafe_id));
    e.target.innerText = isEdit ? "수정" : "저장";
  };
  return (
    <MainWrap>
      <CafeImage src={image} />
      <CafeInfoWrap>
        <EditButton onClick={onClickEditBtn}>수정</EditButton>
        <div>
          <span>카페 명 : </span>
          {!isEdit ? (
            <span>{title}</span>
          ) : (
            <input
              type={"text"}
              placeholder={title}
              onChange={(e) => SetTitle(e.target.value)}
            />
          )}
        </div>
        <div>
          <span>카페 주소 : </span>
          {!isEdit ? (
            <span>{address}</span>
          ) : (
            <input
              type={"text"}
              placeholder={address}
              onChange={(e) => SetAddress(e.target.value)}
            />
          )}
        </div>
        <div>
          <span>전화 번호 : </span>
          {!isEdit ? (
            <span>{phone}</span>
          ) : (
            <input
              type={"text"}
              placeholder={phone}
              onChange={(e) => SetPhone(e.target.value)}
            />
          )}
        </div>
        <div>
          <span>영업 시간 : </span>
          {!isEdit ? (
            <span>{time}</span>
          ) : (
            <input
              type={"text"}
              placeholder={time}
              onChange={(e) => SetTime(e.target.value)}
            />
          )}
        </div>
        <div>
          <button
            onClick={(e) => {
              SetHeart(!isHeart);
              e.target.innerText = isHeart ? "♥️" : "♡";
            }}
          >
            ♥️
          </button>
          <span>{heart}</span>
        </div>
      </CafeInfoWrap>
    </MainWrap>
  );
};

export default CafeInfo;
