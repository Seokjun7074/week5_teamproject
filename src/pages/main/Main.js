import { MainWrapper } from "./style";
import PostPagination from "../../components/main/PostsPagination";
import { CustomButton } from "../../components/CustomButton";
import Modal from "../../components/modal";
import { useState } from "react";
import Header from "../../components/header";
const Main = () => {
  // 모달창 토글부분
  const [modalToggel, setModlaToggle] = useState(false);
  const closeModal = () => {
    setModlaToggle(false);
  };

  return (
    <MainWrapper>
      <Header />
      <PostPagination />
      <Modal visible={modalToggel} closeModal={closeModal}>
        <h1>모달창입니다.</h1>
      </Modal>
      <CustomButton onClick={() => setModlaToggle(true)}>모달</CustomButton>
    </MainWrapper>
  );
};

export default Main;
