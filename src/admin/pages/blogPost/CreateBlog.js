import {
  Button,
  TextField,
  Grid,
  Fab,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Autocomplete,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

import AdminBasement from "../../layout/AdminBasement";
import PostImgVdo from "./Post_img_video";
import { BPCard, BPleft, BPright, DeleteItem, ItemContetDiv } from "./Style";
import { useEffect } from "react";

import axiosClient from "./../../../axios-client";
import { useStateContext } from "../../../contexts/contextProvider";

const CreateBlog = () => {
  const { setNotification, setSuccessNotification } = useStateContext();
  const [postItem, setPostItem] = useState([
    { id: new Date().getTime().toString() },
  ]);

  var emptyPost = {
    id: new Date().getTime().toString(),
    img: "",
    video: "",
    txt: "",
  };

  const blogPostData = {
    title: null,
    subtitle: null,
    category_id: null,
    sub_category_id: null,
    image: null,
    image_video_name: null,
    slug: null,
    meta_tag: null,
    video_link: null,
    post_details: null,
    post_type: 0,
    episode_no: 1,
    parent_blog_id: null,
    blogSection: null,
  };

  const [blogTxtImg, setBlogTxtImg] = useState([emptyPost]);
  const [sendableData, setSendabledata] = useState(blogPostData);
  const [categoryList, setcategoryList] = useState([]);
  const [subcategoryList, setsubcategoryList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [episodList, setEpisodList] = useState([]);
  const [episodNo, setepisodNo] = useState(0);
  const [totalEp, settotalEp] = useState(0);

  const blogTxtImgList = (data) => {
    let id = data.id;
    let newobject = [...blogTxtImg];
    let findIndex = newobject.findIndex((item) => id === item.id);
    newobject[findIndex] = data;

    setBlogTxtImg(newobject);
    let newSendAbledata = { ...sendableData, blogSection: blogTxtImg };

    setSendabledata(newSendAbledata);
  };

  const addPostSection = () => {
    let newEmptyPost = {
      id: new Date().getTime().toString(),
      img: "",
      video: "",
      txt: "",
    };
    setBlogTxtImg((pre) => [...pre, newEmptyPost]);
  };
  const deleteItem = (index) => {
    let updateList = postItem.filter((data) => data.id !== index);
    let updateblog = blogTxtImg.filter((item) => index !== item.id);
    setBlogTxtImg(updateblog);
    setPostItem(updateList);
    setSendabledata((pre) => ({ ...pre, blogSection: updateList }));
  };

  const setInputdata = (event) => {
    // sendableData;
    var name = event.target.name;
    var value = event.target.value;
    setSendabledata((pre) => ({ ...pre, [name]: value }));
  };
  const publish = (data) => {
    let firstpart = sendableData.blogSection[0];
    let newblogsection = sendableData.blogSection.filter(
      (data, index) => index !== 0 && data
    );
    let categoryId = sendableData.category_id ? sendableData.category_id.id : 1;
    let subCategoryId = sendableData.sub_category_id
      ? sendableData.sub_category_id.id
      : 1;

    let updatesetdata = {
      ...sendableData,
      blogSection: newblogsection,
      image: firstpart.img,
      post_details: firstpart.txt,
      category_id: categoryId,
      sub_category_id: subCategoryId,
    };
    console.log(updatesetdata);

    axiosClient
      .post("/blog", updatesetdata)
      .then(({ data }) => {
        console.log(data.status);
        setSuccessNotification(["Successfully Created Blog "]);
      })
      .catch((error) => {
        let errorlist = error.response.data.errors;
        setNotification(Object.values(errorlist)[0]);
      });
  };

  useEffect(() => {
    getCategoryList();

    sendableData.post_type && getPostList();
  }, []);

  let getCategoryList = () => {
    axiosClient
      .get("/post-category")
      .then(({ data }) => {
        setcategoryList(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getsubcategoryList = (categoryId) => {
    axiosClient.get(`/subcategory/src/${categoryId}`).then(({ data }) => {
      setsubcategoryList(data);
    });
  };

  let getPostList = () => {
    axiosClient
      .get("/blog")
      .then(({ data }) => {
        setPostList(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let setTotalEpisode = (postId) => {
    axiosClient
      .get(`/blog/episode/no?episode_id=${postId}`)
      .then(({ data }) => {
        settotalEp(data.total_post + 1);
        setepisodNo();
      });
  };

  function getEpisodList() {
    axiosClient
      .get("/blog/list/own")
      .then((data) => {
        setEpisodList(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AdminBasement>
      <BPCard>
        <BPleft>
          <Grid container spacing={2} id="post">
            <Grid item xs={12}>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="Title"
                onInput={setInputdata}
                name="title"
                id="outlined-basic"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                label="Subtitle"
                name="subtitle"
                onInput={setInputdata}
                id="outlined-basic"
                variant="outlined"
                size="small"
              />
            </Grid>

            {blogTxtImg.map((item) => {
              return (
                <Grid item sx={{ pt: 10 }} xs={12} key={item.id}>
                  <ItemContetDiv>
                    <DeleteItem onClick={() => deleteItem(item.id)}>
                      <BsXLg />
                    </DeleteItem>
                    <PostImgVdo
                      id={item.id}
                      inputList={blogTxtImgList}
                      img={item.img}
                      video={item.video}
                    />
                  </ItemContetDiv>
                </Grid>
              );
            })}
          </Grid>
          <Fab
            style={{ marginTop: "10px" }}
            color="primary"
            aria-label="add"
            onClick={addPostSection}
          >
            <BiPlus style={{ fontSize: "25px" }} />
          </Fab>
        </BPleft>
        <BPright>
          <FormLabel component="legend">Blog Type</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              checked={sendableData.post_type === 0}
              value="single"
              control={<Radio color="primary" />}
              onChange={() =>
                setSendabledata((pre) => ({
                  ...pre,
                  post_type: 0,
                }))
              }
              label="Single"
            />

            <FormControlLabel
              checked={sendableData.post_type === 1}
              value="episod"
              onChange={() =>
                setSendabledata((pre) => ({
                  ...pre,
                  post_type: 1,
                  category_id: null,
                  sub_category_id: null,
                }))
              }
              control={<Radio color="primary" />}
              label="Episod"
            />
          </RadioGroup>
          {sendableData.post_type === 0 && (
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                name="category_id"
                value={sendableData.category_id}
                onChange={(e, v) => {
                  getsubcategoryList(v.id);
                  setSendabledata((pre) => ({ ...pre, category_id: v }));
                }}
                options={categoryList}
                getOptionLabel={(categoryList) => categoryList.name}
                sx={{ width: "100%", mt: 2, mb: 2 }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={sendableData.sub_category_id}
                onChange={(e, v) => {
                  setSendabledata((pre) => ({ ...pre, sub_category_id: v }));
                }}
                options={subcategoryList}
                name="sub_category_id"
                getOptionLabel={(subcategoryList) => subcategoryList.name}
                sx={{ width: "100%", mt: 2, mb: 2 }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Sub Category" />
                )}
              />
            </Box>
          )}

          {sendableData.post_type ? (
            <Grid container spacing={2} sx={{ mb: 2 }} id="post">
              <Grid item xs={12}>
                <FormLabel component="legend">Episod Stage</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    checked={sendableData.episode_no === 1}
                    value={sendableData.episode_no}
                    control={<Radio color="primary" />}
                    // onChange={(e, v) => setEpisodStage("new")}
                    onChange={(e, v) => {
                      setSendabledata((pre) => ({
                        ...pre,
                        episode_no: 1,
                      }));
                    }}
                    label="New create"
                  />
                  <FormControlLabel
                    checked={sendableData.episode_no !== 1}
                    value={sendableData.episode_no}
                    // onChange={(e, v) => setEpisodStage("old")}
                    onChange={(e, v) => {
                      getEpisodList();
                      setSendabledata((pre) => ({
                        ...pre,
                        episode_no: 0,
                      }));
                    }}
                    control={<Radio color="primary" />}
                    label="Add in Old"
                  />
                </RadioGroup>
              </Grid>
              {sendableData.episode_no !== 1 ? (
                <Grid item xs={12}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={setSendabledata.episode_no}
                    options={episodList}
                    getOptionLabel={(episodList) => episodList.title}
                    onChange={(e, v) => {
                      setTotalEpisode(v.id);
                      setSendabledata((pre) => ({
                        ...pre,
                        parent_blog_id: v.id,
                      }));
                    }}
                    sx={{ width: "100%", mb: 3 }}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Episod" />
                    )}
                  />
                  <TextField
                    sx={{ mb: 2, width: "60%" }}
                    fullWidth
                    value={totalEp}
                    label="Episod Number"
                    defaultValue="0"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          ) : (
            ""
          )}
          <Grid container spacing={2} id="post2">
            <Grid item xs={4}>
              <Button variant="contained">Preview</Button>
            </Grid>
            <Grid item xs={4}>
              <Button color="secondary" variant="contained">
                Draf
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                color="success"
                onClick={() => publish()}
                variant="contained"
              >
                Publish
              </Button>
            </Grid>
          </Grid>
        </BPright>
      </BPCard>
    </AdminBasement>
  );
};

export default CreateBlog;
