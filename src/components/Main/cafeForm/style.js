import styled from "styled-components";

export const CafeFormWrapper = styled.div`
  display: flex;
`;

export const CafeImagePreview = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  object-fit: scale-down;
  /* background-color: grey; */
`;

export const InputWrapper = styled.div`
  width: 300px;
  padding: ${(props) => props.theme.padding.xlarge};
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TextInput = styled.input`
  background-color: whitesmoke;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  border: 0.5px solid grey;
`;
