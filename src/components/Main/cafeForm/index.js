import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { useState, useEffect } from "react";
import { CustomButton } from "../../CustomButton";
import { createCafes } from "../../../redux/modules/cafeSlice";
import {
  CafeImagePreview,
  CafeFormWrapper,
  InputWrapper,
  TextInput,
} from "./style";

const CafeForm = ({ visible, closeModal }) => {
  const new_cafe_id = uuidv4(); // 랜덤 아이디 생성
  const dispatch = useDispatch();

  // 초기 데이터
  const initState = {
    cafe_id: "",
    writer_id: "userList.user_id",
    cafe_name: "",
    cafe_address: "",
    cafe_phone: "",
    cafe_time: "",
    cafe_img: "",
  };
  const [cafeInfo, setCafeInfo] = useState({ ...initState });
  //   console.log(cafeInfo);
  const {
    cafe_id,
    writer_id,
    cafe_name,
    cafe_address,
    cafe_phone,
    cafe_time,
    cafe_img,
  } = cafeInfo;
  const onChangeHandler = (e) => {
    setCafeInfo({
      ...cafeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    console.log(cafeInfo);
    const newDate = {
      ...cafeInfo,
      cafe_id: new_cafe_id,
    };
    dispatch(createCafes(newDate));
    closeModal();
  };

  // 이미지 저장 처리
  const saveImage = (e) => {
    // setFileImage(URL.createObjectURL(e.target.files[0]));
    setCafeInfo({
      ...cafeInfo,
      cafe_img: URL.createObjectURL(e.target.files[0]),
    });
  };
  // 이미지 할당 해제 + cafeInfo 초기화
  const deleteContent = () => {
    URL.revokeObjectURL(cafe_img);
    setCafeInfo({
      ...cafeInfo,
      ...initState,
    });
  };

  useEffect(() => {
    deleteContent();
  }, [visible]);

  return (
    <CafeFormWrapper>
      <CafeImagePreview
        alt="카페사진"
        src={cafeInfo.cafe_img}
      ></CafeImagePreview>
      <InputWrapper>
        <input
          type="file"
          accept="image/*"
          name="cafe_img"
          onChange={saveImage}
        />
        <TextInput
          type="text"
          placeholder="카페명"
          name="cafe_name"
          onChange={onChangeHandler}
          value={cafe_name}
        />
        <TextInput
          type="text"
          placeholder="카페주소"
          name="cafe_address"
          onChange={onChangeHandler}
          value={cafe_address}
        />
        <TextInput
          type="text"
          placeholder="전화번호"
          name="cafe_phone"
          onChange={onChangeHandler}
          value={cafe_phone}
        />
        <TextInput
          type="text"
          placeholder="운영시간"
          name="cafe_time"
          onChange={onChangeHandler}
          value={cafe_time}
        />
        <CustomButton
          color={"whitesmoke"}
          textColor={"black"}
          width={"100px"}
          onClick={onSubmitHandler}
        >
          제출하기
        </CustomButton>
      </InputWrapper>
    </CafeFormWrapper>
  );
};

export default CafeForm;
