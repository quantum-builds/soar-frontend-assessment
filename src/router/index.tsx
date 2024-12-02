import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../dashboard";
import Setting from "../setting";
import RootLayout from "../layout/RootLayout";

const Router = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default Router;
