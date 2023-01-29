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
import { useStateContext } from "../../contexts/contextProvider";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  Fab,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import axiosClient from "../../axios-client";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

function PostSubCategory() {
  let { setNotification } = useStateContext();
  var subcategory = {
    id: null,
    name: null,
    category_id: null,
  };

  let [name, setname] = useState();
  let [default_category, setdefaultCategory] = useState({
    id: "",
    name: "",
  });
  let [loading, setLoading] = useState(false);
  let [categoryList, setCategoryList] = useState([]);
  let [subCategoryList, setSubCategoryList] = useState([]);
  let [subcategoryColum, _setsubcategoryColum] = useState(subcategory);

  useEffect(() => {
    subcategoryList();
    categoryListset();
  }, []);

  let categoryListset = () => {
    axiosClient
      .get("/post-category")
      .then(({ data }) => {
        const newLIst = data.data;
        setCategoryList(newLIst);
      })
      .catch((error) => {
        let errorList = error.response;
        console.log(errorList);
      });
  };

  let subcategoryEdit = (id) => {
    setLoading(false);
    axiosClient
      .get(`/post-subcategory/${id}`)
      .then(({ data }) => {
        let newob = {
          id: data.id,
          name: data.name,
          category_id: data.category_id,
        };
        _setsubcategoryColum(newob);
        setname(data.name);
        setdefaultCategory(data.category_info);
        categoryListset();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  let deleteItem = (id) => {
    setLoading(true);
    axiosClient
      .delete(`/post-subcategory/${id}`)
      .then(({ data }) => {
        setLoading(false);
        subcategoryList();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const addSubcategory = (event) => {
    event.preventDefault();

    subcategoryColum.id &&
      axiosClient
        .put(`/post-subcategory/${subcategoryColum.id}`, subcategoryColum)
        .then(({ data }) => {
          subcategoryList();
          setname("");
          _setsubcategoryColum(subcategory);
          setdefaultCategory({
            id: "",
            name: "",
          });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            let errorlist = error.response.data.errors;
            setNotification(Object.values(errorlist)[0]);
          }
        });

    (!subcategoryColum.id || (subcategoryColum.id = "")) &&
      axiosClient
        .post(`/post-subcategory`, subcategoryColum)
        .then(({ data }) => {
          subcategoryList();
          setname("");
          _setsubcategoryColum(subcategory);
          setdefaultCategory({
            id: "",
            name: "",
          });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            let errorlist = error.response.data.errors;

            setNotification(Object.values(errorlist)[0]);
          }
        });
  };

  let addFild = () => {
    setname("");
    _setsubcategoryColum(subcategory);
    setdefaultCategory({
      id: "",
      name: "",
    });
  };

  let subcategoryList = () => {
    axiosClient
      .get("/post-subcategory")
      .then(({ data }) => {
        let subcategoryList = data.data;

        setSubCategoryList(subcategoryList);
      })
      .catch((error) => {
        let errorList = error.response.data.errors;
        console.log(errorList);
      });
  };

  return (
    <AdminBasement>
      <BPCard>
        <BPleft>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <caption>A basic table example with a caption</caption>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Subcategory</TableCell>
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
                  subCategoryList.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="right">
                        {row.category_info.name}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Button
                          variant="contained"
                          size="large"
                          color="success"
                          onClick={() => subcategoryEdit(row.id)}
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
          <form onSubmit={addSubcategory}>
            <Card sx={{ minWidth: "100%", padding: "10px" }}>
              <Grid container spacing={2} id="post">
                <Grid item xs={12}>
                  {subcategoryColum.id && (
                    <Box>
                      <strong>Edit SubCategory</strong>
                      <Fab
                        style={{
                          marginTop: "0px",
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
                    </Box>
                  )}
                  {!subcategoryColum.id && <strong>Create SubCategory</strong>}

                  <Autocomplete
                    onChange={(e, v) =>
                      _setsubcategoryColum((pre) => ({
                        ...pre,
                        category_id: v != null ? v.id : "",
                      }))
                    }
                    options={categoryList}
                    value={default_category}
                    getOptionLabel={(categoryList) => categoryList.name}
                    sx={{ width: "100%", mt: 4, mb: 2 }}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Category" />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    label="Subcategory"
                    id="outlined-basic"
                    variant="outlined"
                    value={name}
                    onInput={(event) => {
                      setname(event.target.value);
                      _setsubcategoryColum((pre) => ({
                        ...pre,
                        name: event.target.value,
                      }));
                    }}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="info"
                    style={{ float: "right" }}
                    variant="contained"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </form>
        </BPright>
      </BPCard>
    </AdminBasement>
  );
}

export default PostSubCategory;
