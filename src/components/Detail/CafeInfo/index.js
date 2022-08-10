import React from "react";
import { CafeImage, MainWrap, CafeInfoWrap, EditButton } from "./style";
import { useState } from "react";
import { useParams } from "react-router-dom";
const CafeInfo = (props) => {
  const cafe_id = useParams().cafe_id;
  console.log(cafe_id);

  const [isEdit, SetEdit] = useState(false);
  const [isHeart, SetHeart] = useState(false);

  // <<<<<<< HEAD
  const [title, SetTitle] = useState("숭실마루");
  const [address, SetAddress] = useState("서울특별시 동작구 XXX");
  const [phone, SetPhone] = useState("02-XXX-XXXX");
  const [time, SetTime] = useState("07시~20시");
  const [image, SetImage] = useState(
    "https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg"
  );
  const [heart, SetHeartCount] = useState(1234);

  const onClickEditBtn = (e) => {
    if (isEdit) alert("수정하시겠습니까?");
    SetEdit(!isEdit);
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
