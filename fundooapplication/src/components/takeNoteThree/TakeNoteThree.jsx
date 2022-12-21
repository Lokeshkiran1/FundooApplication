import { Box } from "@mui/system";
import "./TakeNoteThree.css";
import React, { useState } from "react";
import { Button, IconButton, InputBase, Paper, Tooltip } from "@mui/material";
import {
  AddAlertOutlined,
  ArchitectureOutlined,
  ArchiveOutlined,
  DeleteOutlined,
  InputOutlined,
  InsertPhotoOutlined,
  MoreVertOutlined,
  PersonAddAlt1Outlined,
  PushPinOutlined,
  RedoOutlined,
  UndoOutlined,
} from "@mui/icons-material";
import ColorLensTwoToneIcon from "@mui/icons-material/ColorLensTwoTone";
import ColorPopper from "../colorpopup/ColorPopup";
import {
  archiveNote,
  isTrashUpdate,
  noteUpdateTakeNoteThree,
} from "../../services/DataService";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { green } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 180,
  padding: 0,
  // bgcolor: 'background.paper',
  backgroundColor: "white",
  border: "0px solid red",
  borderRadius: 3,
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const TakeNoteThree = (props) => {
  const [open, setOpen] = React.useState(false);
  const [inputObj, setInputObj] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleOpen = (input) => {
    setInputObj({
      id: input._id,
      title: input.title,
      description: input.description,
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const listenToColorUpdate = () => {
    props.getNote();
  };

  const archiveUpdate = (id) => {
    // let input={noteId:[id]}
    archiveNote(id)
      .then((response) => {
        console.log(response);
        props.autoRefresh()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const trashUpdate = (id) => {
    isTrashUpdate(id)
      .then((response) => {
        console.log(response);
        props.autoRefresh()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateNote = () => {
    setOpen(false);
    //let id=inputObj.id;
    noteUpdateTakeNoteThree(inputObj.id, inputObj)
      .then((res) => {
        console.log(res);
        props.autoRefresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takingTitle = (event) => {
    setInputObj((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const takingDescription = (event) => {
    setInputObj((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  return (
    <Paper className="frame" elevation={3} style={{ backgroundColor: props.note.color }}>
      <Box
        className="outerContainer"
      >
        <Box className="innerContainer1">
          <Box className="leftContainer" onClick={() => handleOpen(props.note)}>
            <Box className="note3a">
              <p>{props.note.title}</p>
            </Box>
            <Box className="note3b">
              <p>{props.note.description}</p>
            </Box>
          </Box>
          <IconButton className="iconpin">
            <Tooltip title="pin">
              <PushPinOutlined></PushPinOutlined>
            </Tooltip>
          </IconButton>
        </Box>
        <Box className="innerContainer2">
          <Tooltip>
            <AddAlertOutlined></AddAlertOutlined>
          </Tooltip>
          <Tooltip>
            <PersonAddAlt1Outlined></PersonAddAlt1Outlined>
          </Tooltip>
          <IconButton>
            <Tooltip>
              <ColorPopper
                action="update"
                id={props.note._id}
                listenToColorUpdate={listenToColorUpdate}
              />
            </Tooltip>
          </IconButton>
          <IconButton>
            <Tooltip>
              <DeleteOutlineOutlinedIcon
                onClick={() => trashUpdate(props.note._id)}
              />
            </Tooltip>
          </IconButton>
          <IconButton>
            <Tooltip>
              <ArchiveOutlined onClick={() => archiveUpdate(props.note._id)} />
            </Tooltip>
          </IconButton>

          <Tooltip>
            <MoreVertOutlined></MoreVertOutlined>
          </Tooltip>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: props.note.color }}>
          <Box
            className="innerCont1"
            sx={{
              width: "100%",
              height: "75%",
              border: "0px solid green",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "100%",
                border: "0px solid yellow",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginLeft: "3%",
              }}
            >
              <Box>
                <InputBase
                  defaultValue={inputObj.title}
                  onChange={takingTitle}
                />
              </Box>
              <Box>
                <InputBase
                  defaultValue={inputObj.description}
                  onChange={takingDescription}
                />
              </Box>
            </Box>
            <Box
              sx={{ width: "20%", height: "100%", border: "0px solid yellow" }}
            >
              <Box
                sx={{
                  width: "40%",
                  height: "30%",
                  border: "0px solid brown",
                  position: "relative",
                  left: "60%",
                  top: "10%",
                }}
              >
                <IconButton>
                  <Tooltip>
                    <PushPinOutlined></PushPinOutlined>
                  </Tooltip>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            className="innerCont2"
            sx={{
              width: "100%",
              height: "25%",
              border: "0px solid black",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "100%",
                border: "0px solid black",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <IconButton>
                <Tooltip>
                  <AddAlertOutlined></AddAlertOutlined>
                </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip>
                  <PersonAddAlt1Outlined></PersonAddAlt1Outlined>
                </Tooltip>
              </IconButton>
              <IconButton>
              <Tooltip>
                <ColorLensTwoToneIcon />
                    </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip>
                  <DeleteOutlineOutlinedIcon />
                </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip>
                  <ArchiveOutlined />
                </Tooltip>
              </IconButton>
              <Tooltip>
                <MoreVertOutlined></MoreVertOutlined>
              </Tooltip>
              <IconButton>
                <Tooltip>
                  <UndoOutlined />
                </Tooltip>
              </IconButton>
              <IconButton>
                <Tooltip>
                  <RedoOutlined />
                </Tooltip>
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "20%",
                height: "100%",
                border: "0px solid black",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ position: "relative", left: "35%" }}
                onClick={updateNote}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};
export default TakeNoteThree;
