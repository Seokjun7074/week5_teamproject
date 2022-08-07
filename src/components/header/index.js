// import { CustomButton } from "../CustomButton";
import {
  HeaderWrapper,
  Navigator,
  NavRight,
  NavMypage,
  NavLogin,
} from "./style";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Navigator>
        <Link to={"/"}>
          <div>로고</div>
        </Link>
        <NavRight>
          <NavMypage>마이페이지</NavMypage>
          <NavLogin>로그인/회원가입</NavLogin>
        </NavRight>
      </Navigator>
    </HeaderWrapper>
  );
};

export default Header;
