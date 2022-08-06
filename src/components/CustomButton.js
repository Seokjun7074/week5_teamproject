import styled from "styled-components";

export const CustomButton = styled.button`
  padding: ${(props) => props.theme.padding.base};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color || `none`};
  color: ${(props) => props.textColor || "gray"};
  border-radius: 10px;
`;

// 공용 버튼 사용예시
// <CustomButton color="tomato" textColor="white" width="100px" height="20px"> 공용버튼입니다 </CustomButton>;
