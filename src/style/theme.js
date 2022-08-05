const fontSize = {
  base: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  title: "3rem",
};
const padding = {
  base: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  xxlarge: "3rem",
};
const margin = {
  base: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  xxlarge: "3rem",
};

const theme = {
  fontSize,
  padding,
  margin,
};

export default theme;

// 스타일드컴포넌트에서 사용 예시
// export const CustomBox = styled.span`
//   font-size: ${(props) => props.theme.fontSize.base};
// `;
