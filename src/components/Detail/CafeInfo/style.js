import styled from "styled-components";

export const MainWrap = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 30px;
`;

export const CafeImage = styled.img`
    width: 720px;
    height: 480px;
   background-color: green;
   margin-bottom: 30px;
   object-fit: cover;
   border: none;
   border-radius: 30px;
`;

export const CafeInfoWrap = styled.div`
/* background-color: orange; */
width: 30%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
position:relative;
 div { 
display: flex;
  font-size: 1.3em;
  }
`

export const EditButton = styled.button`
position: absolute;
 left: 85%; 
 top: 5% ;
`