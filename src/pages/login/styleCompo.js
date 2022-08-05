import styled from "styled-components";
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>

export const StWrap = styled.div`
overflow: hidden; 
display: flex;
 align-items: center; /* 수직 정렬 */
 flex-direction: row; /* default: row */
 justify-content: center; /* flex direction에 대해서 정렬방식 선택 */
`;

export const StWrapInner = styled.div`
// login div
${(props)=>
props.login && `
height : 370px;
  width : 350px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin:auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  background: rgba(255, 255, 255, 0.6);"
`
}
// join div
${(props)=>
    props.join && `
    height : 500px;
      width : 450px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin:auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      background: rgba(255, 255, 255, 0.6);"
    `
}

  
`
export const StForm = styled.form`
 justify-content: space-around;
//  justify-content: center;
`

export const StInput = styled.input`
// login inputs, using also in join.jsx
${(props)=> props.login &&`
border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
  height: 35px;
  width: 250px;
  align-items: center;
  padding-left: 7px;
  &:focus {
    outline: 2px solid #f896d8;
  }
`}

// join input
${(props)=> props.join &&`
border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
//   margin-right: 60px;
  height: 35px;
  width: 310px;
  align-items: center;
  padding-left: 7px;
  &:focus {
    outline: 2px solid #f896d8;
  }
`}

// gender radio input
${(props)=> props.gender &&`
border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
//   margin-right: 60px;
  height: 20px;
  width: 35px;
  align-items: center;
  padding-left: 7px;
`}


`

export const StButton = styled.button`
  // login  Button
  ${(props) =>
    props.login &&
    `
    background-color : #564592;
    color: white;
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 290px;
    margin-top: 10px;
    font-weight : bold;
    cursor: pointer;
    &:hover {
        background-color: #ca7df9;
    }
    `}
    //  join Button
    ${(props) =>
        props.join &&
        `
        background-color : #564592;
        color: white;
        border: none;
        border-radius: 10px;
        height: 40px;
        width: 350px;
        margin-top: 10px;
        font-weight : bold;
        cursor: pointer;
        &:hover {
            background-color: #ca7df9;
        }
        `}

  // login Check Button
${(props) =>
    props.loginCheck &&
`
    font-size : 10px;
    margin: 5px;
    background-color : #564592;
    color: white;
    border: none;
    border-radius: 10px;
    height: 35px;
    width: 50px;
    cursor: pointer;
    &:hover {
        background-color: #ca7df9;
    }
    `}
`;

export const StDiv = styled.span`
// fix birthday ButtonSt span
${(props) =>
    props.bday && `
    font-size : 15px;
    // font-weight: bold;
    margin: 5px;
    // background-color : #ca7df9;
    color: #474747;
    border: none;
    border-radius: 10px;
    height: 35px;
    width: 50px;
    padding:10px 3px 10px 3px;
    `}
`