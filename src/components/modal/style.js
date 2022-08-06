import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 10px;
  width: 700px;
  height: 600px;
  padding: 40px 20px;
  z-index: 100;
  /* cursor: default; */
`;
