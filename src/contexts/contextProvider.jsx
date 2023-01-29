import { createContext, useContext, useState } from "react";
const StateContext = createContext({
  loginShow: false,
  currentUser: null,
  apiBaseUrl: "",
  token: null,
  notifications: [],
  setUser: () => {},
  setToken: () => {},
  setLginshow: () => {},
  setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
  const apiBaseUrl = "http://127.0.0.1:8000/";
  const [user, setUser] = useState({});
  const [notifications, _setNotification] = useState([]);
  const [successnotifications, _setSuccessNotification] = useState([]);
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [loginShow, _setloginShow] = useState(false);
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  const setNotification = (data) => {
    let newNotification = data;
    _setNotification(newNotification);
    setTimeout(() => {
      let empty = [];
      _setNotification(empty);
    }, 3000);
  };
  const setSuccessNotification = (data) => {
    let newNotification = data;
    _setSuccessNotification(newNotification);
    setTimeout(() => {
      let empty = [];
      _setSuccessNotification(empty);
    }, 3000);
  };
  const setLoginshow = () => {
    _setloginShow(true);
  };
  return (
    <StateContext.Provider
      value={{
        setSuccessNotification,
        successnotifications,
        notifications,
        setNotification,
        apiBaseUrl,
        loginShow,
        user,
        token,
        setUser,
        setToken,
        setLoginshow,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
