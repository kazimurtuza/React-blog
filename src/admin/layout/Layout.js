import React from "react";
import { SLayout, SMain, Smaincontent } from "../components/Styles";
import Sidebar from "../components/sidebar/Sidebar";
import { useStateContext } from "../../contexts/contextProvider";

import Topbar from "../components/Topbar";
import {
  Alert,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const Layout = ({ children }) => {
  let mt = 1;
  const { notifications, successnotifications } = useStateContext();
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Topbar />

        {notifications.map((msg, index) => (
          <Alert
            style={{
              position: "absolute",
              right: "0",
              top: `${(mt += 60)}px`,
              zIndex: "200",
            }}
            variant="filled"
            severity="error"
            key={index}
          >
            {msg}
          </Alert>
        ))}

        {successnotifications.map((msg, index) => (
          <Alert
            style={{
              position: "absolute",
              right: "0",
              top: `${(mt += 60)}px`,
              zIndex: "200",
            }}
            variant="filled"
            severity="success"
            key={index}
          >
            {msg}
          </Alert>
        ))}

        <Smaincontent>{children}</Smaincontent>
      </SMain>
    </SLayout>
  );
};

export default Layout;
