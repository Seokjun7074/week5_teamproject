// import { CustomButton } from "../CustomButton";
import {
  HeaderWrapper,
  Navigator,
  NavRight,
  NavMypage,
  NavLogin,
} from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <Navigator>
        <div>로고</div>
        <NavRight>
          <NavMypage>마이페이지</NavMypage>
          <NavLogin>로그인/회원가입</NavLogin>
        </NavRight>
      </Navigator>
    </HeaderWrapper>
  );
};

export default Header;
