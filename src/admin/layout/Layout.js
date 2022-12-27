import React from "react";
import { SLayout, SMain } from "../components/Styles";
import Sidebar from "../components/sidebar/Sidebar";
const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
