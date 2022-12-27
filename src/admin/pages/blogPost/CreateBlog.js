import {
  Button,
  TextField,
  Grid,
  Fab,
  ButtonGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Autocomplete,
} from "@mui/material";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

import AdminBasement from "../../layout/AdminBasement";
import PostImgVdo from "./Post_img_video";
import { BPCard, BPleft, BPright, DeleteItem, ItemContetDiv } from "./Style";
import { useEffect } from "react";

const CreateBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState();

  const [postItem, setPostItem] = useState([]);
  const [episodStage, setEpisodStage] = useState("new");

  const addPostSection = () => {
    setPostItem([...postItem, { id: new Date().getTime().toString() }]);
  };
  const deleteItem = (index) => {
    let updateList = postItem.filter((data) => data.id !== index);
    setPostItem(updateList);
  };

  let nameArray = ["jim", "kazi", "mahadi", "jon"];

  let objarray = nameArray.map((val, index) => ({
    name: val,
    id: index + 1,
  }));

  const [dataselect, setdata] = useState(null);
  const [episodType, setEpisodType] = useState("single");
  useEffect(() => {
    console.log(dataselect);
  }, [dataselect]);

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
                id="outlined-basic"
                variant="outlined"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <PostImgVdo />
              <JoditEditor
                ref={editor}
                value={content}
                // config={config}
                // tabIndex={1} // tabIndex of textarea
                // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => setContent(newContent)}
              />
            </Grid>
            {postItem.map((item) => {
              return (
                <Grid item sx={{ pt: 10 }} xs={12} key={item.id}>
                  <ItemContetDiv>
                    <DeleteItem onClick={() => deleteItem(item.id)}>
                      <BsXLg />
                    </DeleteItem>
                    <PostImgVdo />

                    <JoditEditor
                    // ref={editor}
                    // value={content}
                    // config={config}
                    // tabIndex={1} // tabIndex of textarea
                    // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    // onChange={(newContent) => setContent(newContent)}
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
              checked={episodType === "single"}
              value="single"
              control={<Radio color="primary" />}
              onChange={(e, v) => setEpisodType("single")}
              label="Single"
            />
            <FormControlLabel
              checked={episodType === "episod"}
              value="episod"
              onChange={(e, v) => setEpisodType("episod")}
              control={<Radio color="primary" />}
              label="Episod"
            />
          </RadioGroup>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={(e, v) => setdata(v)}
            options={objarray}
            getOptionLabel={(objarray) => objarray.name}
            sx={{ width: "100%", mt: 2, mb: 2 }}
            size="small"
            renderInput={(params) => <TextField {...params} label="Category" />}
          />

          {episodType === "episod" ? (
            <Grid container spacing={2} id="post">
              <Grid item xs={12}>
                <FormLabel component="legend">Episod Stage</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    checked={episodStage === "new"}
                    value="new"
                    control={<Radio color="primary" />}
                    onChange={(e, v) => setEpisodStage("new")}
                    label="New create"
                  />
                  <FormControlLabel
                    checked={episodStage === "old"}
                    value="episod"
                    onChange={(e, v) => setEpisodStage("old")}
                    control={<Radio color="primary" />}
                    label="Add in Old"
                  />
                </RadioGroup>
              </Grid>
              {episodStage === "old" ? (
                <Grid item xs={12}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    onChange={(e, v) => setdata(v)}
                    options={objarray}
                    getOptionLabel={(objarray) => objarray.name}
                    sx={{ width: "100%", mb: 3 }}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Episod" />
                    )}
                  />
                  <TextField
                    sx={{ mb: 2, width: "60%" }}
                    fullWidth
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
              <Button color="success" variant="contained">
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
