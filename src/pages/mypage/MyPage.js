import React from "react";
import Head from "../../components/myPage/Head";
import Posting from "../../components/myPage/Posting";
import Profile from "../../components/myPage/Profile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function MyPage() {
   
    const tmpData=useSelector(state=>state.tmp.tmp);
    console.log(tmpData);
    return (
        <div>
            <Head />
            <Profile tmpData={tmpData}/>
            <Posting/>
        </div>);
}

