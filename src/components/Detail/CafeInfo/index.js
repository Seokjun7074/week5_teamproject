import React from "react";
import { CafeImage, MainWrap, CafeInfoWrap, EditButton } from "./style";
import { useState } from "react";

const CafeInfo = (props) => {

    const [isEdit, SetEdit] = useState(false);

    const CafeData = {
        title: "숭실마루",
        address: "서울특별시 동작구 XXX",
        phone: "02-XXX-XXXX",
        time: "07시~20시",
        image: "https://i.pinimg.com/564x/de/cb/ff/decbff83d65b9bfbbbd3a3ad68420414.jpg"
    }

    const onClickEditBtn = (e) => {
        SetEdit(!isEdit);
        e.target.innerText = isEdit ? "수정" : "저장";
    }
    return (
        <MainWrap>
            <CafeImage src={CafeData.image} />
            <CafeInfoWrap>
                <EditButton onClick={onClickEditBtn} >수정</EditButton>
                <div>
                    <span>카페 명 : </span>
                    {
                        !isEdit ? <span>{CafeData.title}</span> : <input type={"text"} placeholder={CafeData.title} />
                    }
                </div>
                <div>
                    <span>카페 주소 : </span>
                    {
                        !isEdit ? <span>{CafeData.address}</span> : <input type={"text"} placeholder={CafeData.address} />
                    }
                </div>
                <div>
                    <span>전화 번호 : </span>
                    {
                        !isEdit ? <span>{CafeData.phone}</span> : <input type={"text"} placeholder={CafeData.phone} />
                    }
                </div>
                <div>
                    <span>영업 시간 : </span>
                    {
                        !isEdit ? <span>{CafeData.time}</span> : <input type={"text"} placeholder={CafeData.time} />
                    }
                </div>
            </CafeInfoWrap>
        </MainWrap >
    );
}

export default CafeInfo;
