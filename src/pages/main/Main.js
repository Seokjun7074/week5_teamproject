import { useSelector } from "react-redux";
import { MainWrapper } from "./style";

import PostPagination from "../../components/main/postsPagination";

import { CustomButton } from "../../components/CustomButton";
import Modal from "../../components/modal";
import { useState } from "react";
import Header from "../../components/header";
import CafeForm from "../../components/main/cafeForm";
const Main = () => {
  // 모달창 토글부분
  const [modalToggel, setModlaToggle] = useState(false);
  const closeModal = () => {
    setModlaToggle(false);
  };

  return (
    <MainWrapper>
      <Header />
      <PostPagination filter={false} />
      <Modal visible={modalToggel} closeModal={closeModal}>
        <CafeForm visible={modalToggel} closeModal={closeModal} />
      </Modal>
      <CustomButton
        color={"wheat"}
        textColor={"black"}
        width={"100px"}
        onClick={() => setModlaToggle(true)}
      >
        카페추가
      </CustomButton>
    </MainWrapper>
  );
};

export default Main;
