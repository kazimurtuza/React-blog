import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/admin" component={<HomePage />} />;
    </Routes>
  );
};

export default AdminRoute;
