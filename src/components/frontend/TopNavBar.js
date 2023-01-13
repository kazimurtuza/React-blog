import { MdPerson, MdSearch } from "react-icons/md";
import Logo from "../../images/logo2.png";
import SearcImput from "../element/Searchinput";
import { useDispatch } from "react-redux";
import { searchAction } from "../../store";
import { Navigate, useNavigate } from "react-router-dom";

import { NavbarIcon } from "../../style/TopnavBar.style";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Menu,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/contextProvider";
import { useRef } from "react";
import axiosClient from "../../axios-client";

const TopNavBar = (props) => {
  const dispatch = useDispatch();
  const showsrcbar = () => {
    dispatch(searchAction.showSearch());
  };
  const navigate = useNavigate();
  const { setToken, setUser } = useStateContext();

  const loginEmail = useRef();
  const loginPassword = useRef();

  const nameRef = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refConfirmPass = useRef();
  const [errors, seterrors] = useState({});
  const [login_errors, setLogerrors] = useState(null);

  const homePage = () => {
    navigate("/");
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    console.log(props);
  }, []);

  const handleOpen2 = (event) => {
    event.preventDefault();
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",

    boxShadow: 24,
    pt: 4,
    px: 6,
    pb: 6,
  };
  let registraton = (event) => {
    event.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: refEmail.current.value,
      password: refPassword.current.value,
      password_confirmation: refConfirmPass.current.value,
    };

    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          // 422 is validation error
          console.log(response.data.errors);
          seterrors(response.data.errors);
        }
      });
  };

  let loginsubmit = (event) => {
    event.preventDefault();

    let payload = {
      email: loginEmail.current.value,
      password: loginPassword.current.value,
    };
    console.log(payload);
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setLogerrors(null);
        console.log(data);
        setToken(data.token);
        setUser(data.user);

        navigate("/admin");
      })
      .catch((error) => {
        const response = error.response;
        if (response && response.status === 422) {
          setLogerrors(response.data.message);
        }
      });
  };

  return (
    <>
      <header>
        {/* <img src={Imageget} /> */}
        <NavbarIcon onClick={homePage}>
          <img className="logo" width={60} height={60} src={Logo} alt="" />
        </NavbarIcon>
        <SearcImput>
          <input
            onClick={showsrcbar}
            className="srcinput"
            type="text"
            placeholder=" Discover news, articles and more..."
          />
        </SearcImput>

        <ul className="nave_linki">
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="" onClick={handleOpen}>
              Login
            </a>
          </li>
          <li>
            <a href="" onClick={handleOpen2}>
              Registration
            </a>
          </li>
        </ul>
      </header>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center", mb: 3 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Login User
          </Typography>
          <form onSubmit={loginsubmit}>
            <span>{login_errors}</span>
            <br />
            <Grid container spacing={2} id="post">
              <Grid item xs={12}>
                <TextField
                  inputRef={loginEmail}
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Email"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={loginPassword}
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Password"
                  type="password"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  sx={{ width: "100%" }}
                  variant="contained"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center", mb: 3 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Registration
          </Typography>
          <form onSubmit={registraton}>
            <Grid container spacing={2} id="post">
              <Grid item xs={12}>
                {/* {errors &&
                  Object.keys(errors).map((e) => {
                    return (
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errors[e]}
                      </Alert>
                    );
                  })} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={nameRef}
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Name"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
                {errors.name && <span>{errors.name}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={refEmail}
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Email"
                  type="email"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
                {errors.email && <span>{errors.email}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={refPassword}
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Password"
                  type="password"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  required
                />
                {errors.password && <span>{errors.password[0]}</span>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  inputRef={refConfirmPass}
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Confirm Password"
                  type="password_confirm"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  sx={{ width: "100%" }}
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default TopNavBar;
