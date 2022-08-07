import styled from "styled-components";

export const MainWrap = styled.div`

width: 80%;
margin:auto;
margin-top: 30px;

`

export const InputWrap = styled.div`

padding:auto;
margin-bottom: 50px;
*{
    font-size: 1.3em;
}
input{
width: 70%;
height: 70px;
border: 1px solid black;
border-radius: 20px;
padding: 30px;
}
button{
    margin-left : 50px;
}
`;

export const ReviewList = styled.div`
display:flex;
flex-direction: column;
gap: 20px;
`;

export const ReviewWrap = styled.div`
border: 1px solid black;
border-radius: 20px;
height: 70px;
color : black;
width: 80%;
height: 100px;
margin:auto;
padding: 20px 30px;
position:relative;
`;

export const ReviewHeader = styled.div`
display:flex;
justify-content:start;
gap: 30px;
margin-bottom: 10px;
button {
    position:absolute;
    left: 96%;
    top : 20%;
}
`;
export const ReviewContent = styled.div`
font-size: 1.2em;
`;