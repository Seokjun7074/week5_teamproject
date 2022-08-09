

const Mainwrap = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-align: left;
`
const BackGround = styled.img`
  background-color: green;
  height:120px;
  object-fit:cover;
`
const Layer = styled.div`
  background-color: gainsboro;
  margin:40px 240px 40px 0px;
  width: 50%;
  height: 280px;
  display: flex;
  border-radius: 10px;
`;
const Status = styled.div`
  font-size: 30px;
  height: 280px;
  padding: auto;
  margin: 30px 20px 30px 40px;
  color: black;
  text-indent: 100px;
  flex-direction: row;
`;
const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: white;
  text-align: center;
  line-height: 200px;
  margin: 40px 80px;
`;
const Button = styled.button`
  font-size: 15px;
  margin-right: 20px;
  background-color: white;
  padding: 8px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  &:hover {
    background-color: whitesmoke;
  }
`;
const ProfileWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const Post = styled.div`
  text-align: justify;
  font-size: 20px;
  text-indent: 300px;
`;
const BoxList = styled.div`
  display: flex;
  margin-left:300px;
`;
const CardBox = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: tomato;
  cursor: pointer;
  margin: 30px 40px 30px 0px ;
  padding:2px;
`;