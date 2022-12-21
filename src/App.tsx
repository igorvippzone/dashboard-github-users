import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage, NotFoundPage, LoginPage } from "./pages";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
