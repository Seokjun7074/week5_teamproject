import styled from "styled-components";

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
export const PostCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const NavigatorButton = styled.button`
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
