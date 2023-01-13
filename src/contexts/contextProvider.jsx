import { createContext, useContext, useState } from "react";
const StateContext = createContext({
  loginShow: false,
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  setLginshow: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
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
  const setLoginshow = () => {
    _setloginShow(true);
  };
  return (
    <StateContext.Provider
      value={{ loginShow, user, token, setUser, setToken, setLoginshow }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
