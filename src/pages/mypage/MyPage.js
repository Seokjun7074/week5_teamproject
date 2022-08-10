import React from "react";
import Head from "../../components/mypage/Head";
import Posting from "../../components/mypage/Posting";
import Profile from "../../components/mypage/Profile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function MyPage() {
   
    const tmpData=useSelector(state=>state.tmp.tmp);
    console.log(tmpData);
    return (
        <div>
            <Head />
            <Profile tmpData={tmpData}/>
            <Posting />
        </div>);
}

