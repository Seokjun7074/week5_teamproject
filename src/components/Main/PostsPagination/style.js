import styled from "styled-components";

export const PostPaginationWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgray; */
`;

export const PaginationContainer = styled.div`
  /* margin: 0 auto; */
  display: grid;
  /* gap: 10px; */
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(4, minmax(300px, auto));
  flex-wrap: wrap;
  justify-items: center;
  /* background-color: lightgray; */
`;

export const PaginationNavigator = styled.div`
  /* width: 100px; */
  /* background-color: green; */
  display: flex;
  justify-content: center;
`;

export const NavigatorButton = styled.button`
  /* border: 2px solid gray; */
  border: ${(props) =>
    props.nowPosition ? `2px solid gray` : `2px solid none`};
  color: gray;
  border-radius: 5px;
  padding: ${(props) => props.theme.padding.base};
  margin: ${(props) => props.theme.margin.base};
  font-size: ${(props) => props.theme.fontSize.xlarge};

  &:hover {
    background: gray;
    color: white;
  }
`;
