import React from "react";
import AdminBasement from "../layout/AdminBasement";
import { BPCard, BPleft, BPright, ItemContetDiv } from "./blogPost/Style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Card, Grid, TextField } from "@mui/material";
import { BsXLg } from "react-icons/bs";
import PostImgVdo from "./blogPost/Post_img_video";
import { useState } from "react";

function PostCategory() {
  const rows = [
    {
      name: "string",
      calories: "number",
      fat: "number",
      carbs: "number",
      protein: "number",
    },
    {
      name: "string",
      calories: "number",
      fat: "number",
      carbs: "number",
      protein: "number",
    },
    {
      name: "string",
      calories: "number",
      fat: "number",
      carbs: "number",
      protein: "number",
    },
  ];
  let [categoryList, setCategory] = useState(rows);
  var emptyPost = {
    id: new Date().getTime().toString(),
    img: "",
    video: "",
    txt: "",
  };

  const [blogTxtImg, setBlogTxtImg] = useState([]);

  const blogTxtImgList = (data) => {
    data.id = new Date().getTime().toString();
    let new_data = data;
    console.log(new_data === blogTxtImg);
    setBlogTxtImg(new_data);
    console.log(new_data);
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
                  <TableCell>SI</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Create Time</TableCell>
                  <TableCell align="right">Created By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryList.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
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
            <Grid container spacing={2} id="post">
              <Grid item xs={12}>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Category"
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sx={{ pt: 10 }} xs={12} key={22}>
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
                  color="info"
                  style={{ float: "right" }}
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Card>
        </BPright>
      </BPCard>
    </AdminBasement>
  );
}

export default PostCategory;
