import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/login/Join";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import MyPage from "./components/MyPage/MyPage";
import Layout from "./components/detail/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/detail" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
