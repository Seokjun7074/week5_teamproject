// import { CustomButton } from "../CustomButton";
import {
  HeaderWrapper,
  Navigator,
  NavRight,
  NavMypage,
  NavLogin,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const userInfo = useSelector((state) => state.user.tmpUser);

  //const userInfo = {};

  // console.log(userInfo);

  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate(`/mypage/${userInfo.user_id}`);
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <HeaderWrapper>
      <Navigator>
        <Link to="/">
          <div>로고</div>
        </Link>
        <NavRight>
          {userInfo.user_id && (
            <NavMypage onClick={goToMyPage}>마이페이지</NavMypage>
          )}
          <NavLogin onClick={goToLogin}>로그인/회원가입</NavLogin>
        </NavRight>
      </Navigator>
    </HeaderWrapper>
  );
};

export default Header;
