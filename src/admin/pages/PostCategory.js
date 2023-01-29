import React, { useEffect } from "react";
import AdminBasement from "../layout/AdminBasement";
import { BPCard, BPleft, BPright, ItemContetDiv } from "./blogPost/Style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  CircularProgress,
  Fab,
  Grid,
  TextField,
} from "@mui/material";
import PostImgVdo from "./blogPost/Post_img_video";
import { useState } from "react";
import { useRef } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/contextProvider";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

function PostCategory() {
  const { apiBaseUrl, setNotification } = useStateContext();

  let [categoryList, setCategory] = useState([]);
  let [loading, setloading] = useState(false);

  let refcategoryName = useRef();

  const [blogTxtImg, setBlogTxtImg] = useState({});

  const selectCategory = {
    id: null,
    image: null,
    name: null,
  };

  const [editabledata, seteditabledata] = useState(selectCategory);

  const blogTxtImgList = (data) => {
    data.id = new Date().getTime().toString();
    let new_data = data;

    setBlogTxtImg((prevent) => ({ ...new_data }));

    seteditabledata((pre) => ({ ...pre, image: new_data.img }));
    console.log(editabledata);
  };
  const createCategory = (event) => {
    console.log(blogTxtImg.img);
    event.preventDefault();
    let submitdata = {
      name: refcategoryName.current.value,
      image: blogTxtImg.img,
      about: "Empty",
    };

    axiosClient
      .post("/post-category", submitdata)
      .then(({ data }) => {
        setloading(false);
        getCategoryData();
        refcategoryName.current.value = "";
        setBlogTxtImg("");
      })
      .catch((error) => {
        let errorlist = error.response.data.errors;

        setNotification(Object.values(errorlist));
        setloading(false);
      });
  };
  const addFild = () => {
    seteditabledata(selectCategory);
    setBlogTxtImg(selectCategory);
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    setloading(true);
    axiosClient
      .get("/post-category")
      .then(({ data }) => {
        console.log(data.data);
        let updatedData = data.data;

        setCategory(updatedData);

        setloading(false);
      })
      .catch(() => {
        setloading(false);
      });
  };

  function deleteItem(id) {
    if (!window.confirm("are you shoure you want to delete this data")) {
      return;
    }
    axiosClient
      .delete(`/post-category/${id}`)
      .then(({ data }) => {
        setloading(false);
        getCategoryData();
      })
      .catch(() => {
        setloading(false);
      });
  }

  function categoryEditData(id) {
    axiosClient
      .get(`/post-category/${id}`)
      .then(({ data }) => {
        setloading(false);
        let new_data = data.data;
        console.log(editabledata);
        var newimg = `${apiBaseUrl}${data.data.image}`;
        setBlogTxtImg((ev) => ({ ...ev, img: newimg }));
        seteditabledata((pre) => ({ ...new_data, image: data.data.image }));
      })
      .catch(() => {
        setloading(false);
      });
  }

  function editSubmit(event) {
    event.preventDefault();
    axiosClient
      .put(`/post-category/${editabledata.id}`, editabledata)
      .then((data) => {
        getCategoryData();
      })
      .catch(({ data }) => {
        setloading(false);
        console.error(data);
      });
    console.log(editabledata);
  }

  // useEffect(() => {}, [editabledata, blogTxtImg, categoryList]);
  return (
    <AdminBasement>
      <BPCard>
        <BPleft>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <caption>A basic table example with a caption</caption>
              <TableHead>
                <TableRow>
                  <TableCell>SI</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading && (
                  <TableRow>
                    <TableCell colSpan={4} style={{ textAlign: "center" }}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                )}
                {!loading &&
                  categoryList.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">
                        <img
                          width={"100px"}
                          height={"60px"}
                          src={`${apiBaseUrl}${row.image}`}
                          alt=""
                        />
                      </TableCell>

                      <TableCell align="right">
                        <Button
                          variant="contained"
                          size="large"
                          color="success"
                          onClick={() => categoryEditData(row.id)}
                        >
                          <AiFillEdit />
                        </Button>
                        &nbsp;
                        <Button
                          onClick={() => deleteItem(row.id)}
                          variant="contained"
                          size="large"
                          color="error"
                        >
                          <AiFillDelete />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </BPleft>
        <BPright
          style={{ padding: "12px", marginTop: "27px", marginLeft: "7px" }}
        >
          <Card sx={{ minWidth: "100%", padding: "10px" }}>
            {/* {loading && (
              <div style={{ textAlign: "center" }}>
                <CircularProgress />
              </div>
            )} */}
            {editabledata.id && (
              <div>
                <strong>Edit Category</strong>
                <Fab
                  style={{
                    marginTop: "10px",
                    height: "10px",
                    width: "40px",
                    float: "right",
                  }}
                  color="primary"
                  aria-label="add"
                  onClick={addFild}
                >
                  <BiPlus style={{ fontSize: "20px" }} />
                </Fab>
                <br /> <br />
                <form onSubmit={editSubmit}>
                  <Grid container spacing={2} id="post">
                    <Grid item xs={12}>
                      <TextField
                        sx={{ mb: 2 }}
                        fullWidth
                        value={editabledata.name}
                        onChange={(event) =>
                          seteditabledata((pev) => ({
                            ...editabledata,
                            name: event.target.value,
                          }))
                        }
                        label="Category"
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item sx={{ pt: 10 }} xs={12}>
                      <ItemContetDiv>
                        <PostImgVdo
                          id={22}
                          inputList={blogTxtImgList}
                          img={blogTxtImg.img}
                          video="hidden"
                        />
                      </ItemContetDiv>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        color="info"
                        style={{ float: "right" }}
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            )}
            {editabledata.id == null && (
              <div>
                <strong>Add Category {editabledata.id}</strong>
                <br /> <br />
                <form onSubmit={createCategory}>
                  <Grid container spacing={2} id="post">
                    <Grid item xs={12}>
                      <TextField
                        sx={{ mb: 2 }}
                        fullWidth
                        inputRef={refcategoryName}
                        label="Category"
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item sx={{ pt: 10 }} xs={12}>
                      <ItemContetDiv>
                        <PostImgVdo
                          id={22}
                          inputList={blogTxtImgList}
                          img={blogTxtImg.img}
                          video="hidden"
                        />
                      </ItemContetDiv>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        color="info"
                        style={{ float: "right" }}
                        variant="contained"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            )}
          </Card>
        </BPright>
      </BPCard>
    </AdminBasement>
  );
}

export default PostCategory;
