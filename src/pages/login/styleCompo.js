import styled from "styled-components";
{/* <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script> */}


export const StH1 = styled.h1`
&:hover {
  background-color: #ca7df9;
}
// logo login
${(props) =>
  props.login &&
  `
  margin: 50px;
`}
// logo join
${(props) =>
  props.join &&
  `
  margin: 30px;

`}

`

export const StWrap = styled.div`
overflow: hidden; 
display: flex;
 align-items: center; /* 수직 정렬 */
 flex-direction: row; /* default: row */
 justify-content: center; /* flex direction에 대해서 정렬방식 선택 */
`;

export const StWrapInner = styled.div`
  //Common
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: auto;

  // login div
  ${(props) =>
    props.login &&
    `
height : 370px;
  width : 350px;
`}
  // join div
${(props) =>
    props.join &&
    `
  height : 470px;
  width : 430px;
    `}
`;

export const StCen = styled.div`
// make center
display:inline-flex;
justifyContent:center;
align-items:center;
`

export const StForm = styled.form`
// justifyContent:center;
// align-items:center;
`

export const StInput = styled.input`
  // Common
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
  padding-left: 7px;
  &:focus {
    outline: 2px solid #f896d8;
  }

  // login inputs, using also in join.jsx
  ${(props) =>
    props.login &&
    `
  width: 250px;
  padding-left: 7px;
`}

// join check input
${(props) =>
  props.joinCheck &&
  `
width: 250px;
padding-left: 7px;
background : ${props.disabled? 'rgba(0,0,0,0.4)': 'none'}
`}

  // join input
${(props) =>
    props.join &&
    `
width: 310px;
  margin-left: 5px;
`}

// gender radio input
${(props) =>
    props.gender &&
    `
  height: 20px;
  width: 35px;
  align-items: center;
  &:focus {
    outline: none;
  }
`}
`;

export const StButton = styled.button`
  height: 40px;
  border-radius: 10px;
  color: white;
  background-color: #564592;
  border: none;
  &:hover {
    background-color: #ca7df9;
  }

  // login  Button
  ${(props) =>
    props.login &&
    `
  width: 290px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight : bold;
      `}
  //  join Button
    ${(props) =>
    props.join &&
    `
  width: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight : bold;
  
        `}

  // join Check Button
${(props) =>
    props.joinCheck &&
    `
    font-size : 10px;
    margin: 5px;
    width: 50px;
    height: 35px;
    background-color:${props.disabled?'#ca7df9':''}
    `}
`;

export const StDiv = styled.div`
  // Common
  font-size: 15px;
  color: #474747;
  border: none;

  // fix birthday ButtonSt span
  ${(props) =>
    props.bday &&
    `
  margin-right:30px;
  padding:10px 3px 10px 3px;
`}

// back div in join.js
  ${(props) =>
    props.back &&
    `
  font-size : 13px;
  &:hover {
  text-decoration-line: line-through;
  text-decoration-style: solid 
        }
        `}
  // join div in login.js
  ${(props) =>
    props.join &&
    `
    font-size : 14px;
  &:hover {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.6);
        }
        `}
   // warn div     
  ${(props) =>
    props.warn &&
    `
    font-size : 13px;
    color: red;
        `}
`;

