import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/admin/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;