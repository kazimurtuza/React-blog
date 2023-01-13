import React from "react";
import { SLayout, SMain, Smaincontent } from "../components/Styles";
import Sidebar from "../components/sidebar/Sidebar";

import Topbar from "../components/Topbar";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Topbar />
        <Smaincontent>{children}</Smaincontent>
      </SMain>
    </SLayout>
  );
};

export default Layout;
