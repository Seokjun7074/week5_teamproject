import React from "react";
import { ModalWrapper, ModalContainer } from "./style";

function Modal({ visible, closeModal, children }) {
  return (
    <div className="Modal">
      <ModalContainer visible={visible}>{children}</ModalContainer>
      <ModalWrapper visible={visible} onClick={closeModal}></ModalWrapper>
    </div>
  );
}

export default Modal;

// [사용방법]

// 모달을 열고 닫을 수 있는 state와 모달 닫는 함수를 만들어 props로 전달
// const [modalToggel, setModlaToggle] = useState(false);
// const closeModal = () => {
//   setModlaToggle(false);
// };

// <div>
//   <Modal visible={modalToggel} closeModal={closeModal}>
//     여기에 원하는 태그 넣어서 사용
//   </Modal>
// </div>;
