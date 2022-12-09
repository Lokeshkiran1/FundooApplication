import { IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import './TakeNoteTwo.css'
import React from 'react';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
const TakeNoteTwo=()=>{
    return(
        <Box>
            <Paper elevation={3} className='takeNoteTwo'>
                <Box className='takeNote2A'>
                    <Box className='titlePin'>
                        <input className='title' placeholder='Title'></input>
                        <IconButton className='icons'>
                            <Tooltip title="pin">
                                <PushPinOutlined></PushPinOutlined>
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box className='description'>
                        <InputBase className='takeNote2Decxription' placeholder='Take a note...'></InputBase>
                    </Box>
                    <Box className='note2c'>
                            <Box className='note2d'>
                                    <Tooltip>
                                        <AddAlertOutlined></AddAlertOutlined>
                                    </Tooltip>
                                    <Tooltip>
                                        <PersonAddAlt1Outlined></PersonAddAlt1Outlined>
                                    </Tooltip>
                                    <Tooltip>
                                        <ColorLensTwoToneIcon></ColorLensTwoToneIcon>
                                    </Tooltip>
                                    <Tooltip>
                                        <InsertPhotoOutlined></InsertPhotoOutlined>
                                    </Tooltip>
                                    <Tooltip>
                                        <ArchiveOutlined></ArchiveOutlined>
                                    </Tooltip>
                                    <Tooltip>
                                        <MoreVertOutlined></MoreVertOutlined>
                                    </Tooltip>
                                    <Tooltip>
                                        <UndoOutlined></UndoOutlined>
                                    </Tooltip>
                                    <Tooltip>
                                        <RedoOutlined></RedoOutlined>
                                    </Tooltip>
                            </Box>
                            <Box className='close'>
                                <Button variant="text" size="small"  style={{textTransform: "none",fontSize: "16px",color:"black" ,fontWeight: "bold",fontFamily: '"Google Sans",Roboto,Arial,sans-serif'}}>Close</Button>
                            </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default TakeNoteTwo;