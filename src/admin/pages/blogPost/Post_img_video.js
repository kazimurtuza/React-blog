import React from "react";
import { Grid, TextField } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { ImageUploadDiv } from "./Style";
import { Fab } from "@mui/material";
import { AiFillFileImage } from "react-icons/ai";
import { useState } from "react";

function PostImgVdo() {
  const [media, setmedia] = useState(true);
  const changeMedia = () => {
    setmedia(!media);
  };
  const imgselect = () => {
    document.getElementById("img").click();
  };
  return (
    <>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button onClick={changeMedia}>Image</Button>
          <Button onClick={changeMedia}>Video</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12}>
        {media ? (
          <ImageUploadDiv>
            <Fab
              color="primary"
              sx={{ mb: 2 }}
              aria-label="add"
              onClick={imgselect}
            >
              <AiFillFileImage />
              <input type="file" id="img" hidden />
            </Fab>
          </ImageUploadDiv>
        ) : (
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Video Link"
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
        )}
      </Grid>
    </>
  );
}

export default PostImgVdo;
