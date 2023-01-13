import React, { useState } from "react";
import {
  SSidbar,
  Slogo,
  SSearch,
  SsearchIcon,
  SDivider,
  SLinkContainer,
  SLinkIcon,
  SLinkNotification,
  SLinkLabel,
  SLink,
  SSidebarButton,
} from "./Style";
import logo from "../../../images/logo2.png";
import { ThemeContext } from "../../layout/AdminBasement";

import { AiOutlineSearch, AiFillAppstore, AiOutlineLeft } from "react-icons/ai";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <SSidbar>
      <SSidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <AiOutlineLeft />
      </SSidebarButton>
      <Slogo>
        <img src={logo} alt="" />
      </Slogo>
      <SSearch style={!sidebarOpen ? { width: `fit-content` } : {}}>
        <SsearchIcon>
          <AiOutlineSearch />
        </SsearchIcon>
        <input
          type="text"
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({ label, icon, to, notification }) => (
        <SLinkContainer
          key={label}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {linksArray.map(({ label, icon, to, notification }) => (
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <SLinkContainer>
        <SLink>
          {sidebarOpen && <SLinkLabel>Darkmode</SLinkLabel>}

          <SLinkIcon>
            <AiFillAppstore
              onClick={() =>
                setTheme((p) => (p === "light" ? "dark" : "light"))
              }
            />
          </SLinkIcon>
        </SLink>
      </SLinkContainer>
    </SSidbar>
  );
};

const linksArray = [
  {
    icon: <AiFillAppstore />,
    label: "Create Blog",
    to: "/admin/blog/create",
    notification: 0,
  },
  {
    icon: <AiFillAppstore />,
    label: "Category",
    to: "/admin/blog/category",
    notification: 0,
  },
  {
    icon: <AiFillAppstore />,
    label: "Subategory",
    to: "/admin/blog/subcategory",
    notification: 0,
  },
  {
    icon: <AiFillAppstore />,
    label: "Create Blog",
    to: "/blogdetails",
    notification: 0,
  },
  {
    icon: <AiFillAppstore />,
    label: "Home t",
    to: "/admin",
    notification: 1,
  },
];

export default Sidebar;
