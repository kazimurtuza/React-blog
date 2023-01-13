import React, { useRef } from "react";
import { Grid, TextField } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { ImageUploadDiv, UploadedImgae } from "./Style";
import { Fab } from "@mui/material";
import { AiFillFileImage } from "react-icons/ai";
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import JoditEditor from "jodit-react";
import "react-image-crop/dist/ReactCrop.css";
import { Modal, Box, Typography } from "@mui/material";

function PostImgVdo(props) {
  const [cropImage, setCropImage] = useState();
  const [src, selectFile] = useState();
  const [media, setmedia] = useState(true);
  const [scale, setScale] = useState(1.2);
  const [rotate, setRotate] = useState(0);
  const changeMedia = () => {
    setmedia(!media);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const imgselect = () => {
    setOpen(true);
  };
  const editor = useRef(null);

  const imageHandle = (e) => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  };
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [videoLink, setvideoLink] = useState();
  const [txtImg, setImgtext] = useState({
    id: props.id,
    img: "",
    video: "",
    txt: "",
  });

  const cropimg = (data) => {
    const img64 = editor.current.getImageScaledToCanvas().toDataURL();
    txtImg.id = props.id;
    txtImg.img = img64;
    txtImg.video = "";
    setvideoLink("");
    setCropImage(img64);
    props.inputList(txtImg);
  };
  const videolink = (e) => {
    setvideoLink(e.target.value);
    txtImg.id = props.id;
    txtImg.img = "";
    txtImg.video = e.target.value;
    props.inputList(txtImg);
  };
  const text = (newContent) => {
    txtImg.txt = newContent;
    props.inputList(txtImg);
  };
  let categorystyle = {
    height: "139px",
    margintop: "-30px",
  };
  let top =
    props.video === "hidden" ? categorystyle : { height: "", margintop: "" };
  let [margintp, setmargintp] = useState(top);

  return (
    <>
      {props.video !== "hidden" ? (
        <Grid item xs={12} sx={{ mb: 2 }}>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button onClick={changeMedia}>Image</Button>
            <Button onClick={changeMedia}>Video</Button>
          </ButtonGroup>
        </Grid>
      ) : (
        ""
      )}

      <Grid item xs={12}>
        {media ? (
          <ImageUploadDiv
            style={{ marginTop: top.margintop, height: top.height }}
          >
            <Fab
              color="primary"
              sx={{ mb: 2 }}
              aria-label="add"
              onClick={imgselect}
            >
              <AiFillFileImage />
            </Fab>
            <UploadedImgae src={props.img}></UploadedImgae>
          </ImageUploadDiv>
        ) : (
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Video Link"
            id="outlined-basic"
            variant="outlined"
            value={videoLink}
            onInput={videolink}
            size="small"
          />
        )}
      </Grid>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>

          <div>
            {src && (
              <AvatarEditor
                style={{ width: "100%" }}
                ref={editor}
                image={src}
                width={450}
                height={250}
                color={[255, 255, 255, 0.6]} // RGBA
                border={50}
                scale={scale}
                rotate={rotate}
              />
            )}

            {cropImage ? <img width={"100%"} src={cropImage} alt="" /> : ""}
          </div>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={() => setScale(scale - 0.1)}>Zoom In</Button>
            <Button onClick={() => setScale(scale + 0.1)}>Zoom Out</Button>
          </ButtonGroup>

          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              onChange={imageHandle}
              multiple
              type="file"
            />
          </Button>
          <Button
            variant="contained"
            component="label"
            onClick={cropimg}
            // onClick={() => {
            // const img64 = editor.current.getImageScaledToCanvas().toDataURL();
            // setCropImage(img64);
            // }}
          >
            Crop
          </Button>
        </Box>
      </Modal>
      {props.video !== "hidden" ? (
        <JoditEditor
          onChange={(newContent) => {
            text(newContent);
          }}
          // ref={editor}
          // value={content}
          // config={config}
          // tabIndex={1} // tabIndex of textarea
          // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          // onChange={(newContent) => setContent(newContent)}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default PostImgVdo;
