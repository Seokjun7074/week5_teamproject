import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/login/Join";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
