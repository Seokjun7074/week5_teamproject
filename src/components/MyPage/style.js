
import styled from "styled-components";

export const Mainwrap = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-align: left;
`
export const BackGround = styled.img`
  background-color: green;
  height:140px;
  object-fit:cover;
`
export const Layer = styled.div`
  background-color: gainsboro;
  margin:40px 370px 40px 0px;
  width: 50%;
  height: 280px;
  display: flex;
  border-radius: 10px;
`;
export const Status = styled.div`
  font-size: 30px;
  height: 280px;
  padding: auto;
  color: black;
  flex-direction: row;
`;
export const Photo = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 20%;
  background-color: white;
  margin-left:100px;
  margin-top:30px;
`;
export const Button = styled.button`
  font-size: 15px;
  margin-right: 20px;
  background-color: white;
  padding-left: 25px;
  padding-top:10px;
  padding-bottom:10px;
  padding-right:25px;
  border: 3px solid gainsboro;
  border-radius: 7px;
  font-size:13px;
  &:hover {
  text-decoration:underline;
  }
`;
export const ProfileWrap = styled.div`
  width: 100%;
  height: 100%;
  min-width: 800px;
  max-width: 1800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const BoxList = styled.div`
  display: flex;
  margin-left:240px;
`;
export const CardBox = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: tomato;
  cursor: pointer;
  margin: 30px 10px 30px 0px ;
  padding:2px;
`;
export const PostPaginationWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, auto));
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const PaginationNavigator = styled.div`
  display: flex;
  justify-content: center;
`;

