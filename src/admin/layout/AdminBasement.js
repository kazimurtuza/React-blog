import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../style/globalStyle";
import { darkTheme, lightTheme } from "../style/theme";
import { Helmet } from "react-helmet";
import Layout from "./Layout";
import { useEffect } from "react";
import "./customstyle.css";
export const ThemeContext = React.createContext(null);
const AdminBasement = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    console.log("reinisialize form admin basement");
  });

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Admin Deshboard</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AdminBasement;
