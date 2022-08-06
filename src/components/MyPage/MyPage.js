import React from "react"
import styled from "styled-components";
export default function MyPage(){
    return(
    
        <Mainwrap>
            <Header>
                <Span></Span> 
                <a>sign out</a>
            </Header>
        <BackGround>
            <H1>my profile(뒷배경 커피 사진)</H1>
        </BackGround>
        <ProfileWrap>
        <Layer>
            <Photo>
            </Photo>
            <Status>
                <h5>name :</h5>
                <h5>age :</h5>
                <h5>sex :</h5>
                <Button>개인정보 수정</Button>
                <Button>업로드 하기</Button>
                <Button>포스팅 관리</Button>
                <Button>로그아웃 하기</Button>
            </Status>
        </Layer>
    </ProfileWrap>
            <Post>
            <a>my posting</a>
            </Post>
    <BoxList>
        <CardBox>
        </CardBox>
    </BoxList>
    </Mainwrap>
    )
}
const Mainwrap=styled.div
    `width:100%;
     min-width:800px;
     max-width:1800px;
     height:100%;
     display: flex;
     flex-direction: column;
     text-indent:300px;
     text-transform: capitalize;
     text-align: left;
     `
const Header=styled.div
    `flex-direction: row;
     text-align: right;
     background-color:beige;
     height: 120px;
     width: 100%;
    `
const Span=styled.div
   `box-sizing: content-box;
    background-color:white;
    width: 90px;
    height: 90px;
    margin-left: 300px;
    margin-top:10px;
    border-radius: 100%;
    `
const BackGround=styled.div
    `width:100%;
     height:120px;
     background-color:green;`
const H1=styled.div
   `line-height:180px;
    font-size:35px;
    color:white;
    `
const Layer=styled.div
    `background-color:gainsboro;
    margin:50px 260px 30px 0px;
    width:50%;
    height:280px;
    display:flex;
    border-radius: 10px;
    `
 const Status=styled.div
    `font-size:30px;
    height: 280px;
    padding: auto;
    margin: 30px 0px 30px 40px;
    color:black;
    text-indent:100px;
    flex-direction:row;
    `
 const Photo=styled.div
    `width: 200px;
    height:200px;
    border-radius: 100%;
    background-color: white;
    text-align: center;
    line-height: 200px;
    margin: 30px 100px;
    `
const Button=styled.button
`padding:-20px;
 font-size:15px;
margin:auto;

`
const ProfileWrap=styled.div
`width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-evenly;
`
const Post=styled.div
`text-align: justify;
 font-size:20px;

`
const BoxList=styled.div
`display:flex;
`
const CardBox=styled.div`
background-color: blue;
    width:230px;
    height: 200px;
    border-radius: 10px;
    margin-left: 280px;
    text-align: center;
    line-height: 200px;
    color:white;`
