import { Alert, Button } from "@mui/material";
import React from "react";
import { Stopbar } from "./Styles";
import axiosClient from "./../../axios-client";
import { Navigate, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const userLogout = () => {
    axiosClient
      .post("/logout")
      .then(({ data }) => {
        localStorage.removeItem("ACCESS_TOKEN");
        console.log("sdfsd");
        navigate("/");
      })
      .catch((error) => {
        const response = error.response;
        if (response && response.status === 422) {
        }
      });
  };
  return (
    <Stopbar>
      <Button onClick={userLogout} color="inherit">
        Login
      </Button>
    </Stopbar>
  );
}
