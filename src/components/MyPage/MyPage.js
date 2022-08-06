import React from "react"
import './style.css'
export default function MyPage(){
    return(
        <>
        <div id="wrap">
            <button id="btnHover1">카페조아</button> 
        <div className="backGround">
            <div className="layer">
                <div className="photo">
                    <button>+</button>
                </div>
            <div className="status">
                <h2>profile</h2>
                <div>
                <h5>name :</h5>
                <h5>age :</h5>
                <h5>sex :</h5>
                </div>
            </div>
        </div>
            <div className="post">
            <a>Posting</a>
            <button id="button">+</button>
            </div>
    <div id="boxList">
        <div className="cardBox">
            <a>카페 사진란</a>
        </div>
        <div className="cardBox">
            <a>카페 사진란</a>
        </div>
    </div>
</div>
</div>
        </>)
}