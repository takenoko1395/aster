/* App.js */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Mypage from "./mypage";
import Socket from './socket.tsx';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/socket`} element={<Socket />} />
          <Route path={`/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
