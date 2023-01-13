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

function PostSubCategory() {
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
  var emptyPost = {
    id: new Date().getTime().toString(),
    img: "",
    video: "",
    txt: "",
  };
  const [blogTxtImg, setBlogTxtImg] = useState([emptyPost]);

  const blogTxtImgList = (data) => {
    let id = data.id;
    let newobject = [...blogTxtImg];
    let findIndex = newobject.findIndex((item) => id === item.id);
    newobject[findIndex] = data;
    setBlogTxtImg(newobject);

    console.log(blogTxtImg);
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
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
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
              <Grid item xs={12}>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Subcategory"
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
                  Publish
                </Button>
              </Grid>
            </Grid>
          </Card>
        </BPright>
      </BPCard>
    </AdminBasement>
  );
}

export default PostSubCategory;
