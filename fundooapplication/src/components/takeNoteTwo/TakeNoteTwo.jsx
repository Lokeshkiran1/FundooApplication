import { IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import './TakeNoteTwo.css'
import React, { useState } from 'react';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import { createNote } from '../../services/DataService';
import ColorPopper from '../colorpopup/ColorPopup';
const TakeNoteTwo=(props)=>{

    const [noteObj,setNoteObj]=useState({title:'',description:'',color:'',isArchived:false})

    const takingTitle=(event)=>{
        setNoteObj(prevState=>({
            ...prevState,
            title:event.target.value
        }))
    }
    const takingDescription=(event)=>{
        setNoteObj(prevState=>({
            ...prevState,
            description:event.target.value
        }))
    }
    const openNoteOne=()=>{
        console.log("=========",noteObj)
        props.listenToTakeNoteTwoCloseButton()
        createNote(noteObj).then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        })
    }
    const noteArchived=()=>{
        setNoteObj(prevState=>({
            ...prevState,
            isArchived: true
        }))
    }
    const listenToColor=(noteColour)=>{
        setNoteObj(prevState=>({
            ...prevState,
            color:noteColour
        }))

    }
    console.log("from note 2======>>",noteObj);
    return(
            <Paper elevation={3} className='takeNoteTwo' style={{backgroundColor:noteObj.color}}>
                <Box className='takeNote2A'>
                    <Box className='titlePin'>
                        <InputBase className='title' placeholder='Title' onChange={takingTitle}></InputBase>
                        <IconButton className='icons'>
                            <Tooltip title="pin">
                                <PushPinOutlined></PushPinOutlined>
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box className='description'>
                        <InputBase className='takeNote2Description' placeholder='Take a note...' onChange={takingDescription} ></InputBase>
                    </Box>
                    <Box className='note2c'>
                            <Box className='note2d'>
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
                                    <Tooltip className='colorPopper'>
                                        <ColorPopper listenToColor={listenToColor} action="create"/>
                                    </Tooltip>
                                </IconButton> 
                                <IconButton>   
                                    <Tooltip>
                                        <InsertPhotoOutlined></InsertPhotoOutlined>
                                    </Tooltip>
                                </IconButton>
                                <IconButton>
                                    <Tooltip>
                                        <ArchiveOutlined onClick={noteArchived}/>
                                    </Tooltip>
                                </IconButton> 
                                <IconButton>
                                    <Tooltip>
                                        <MoreVertOutlined></MoreVertOutlined>
                                    </Tooltip>
                                </IconButton>
                                    <Tooltip>
                                        <UndoOutlined></UndoOutlined>
                                    </Tooltip> 
                                    <Tooltip>
                                        <RedoOutlined></RedoOutlined>
                                    </Tooltip>    
                            </Box>
                            <Box className='close' onClick={openNoteOne}>
                                <Button variant="text" size="small"  style={{textTransform: "none",fontSize: "16px",color:"black" ,fontWeight: "bold",fontFamily: '"Google Sans",Roboto,Arial,sans-serif'}}>Close</Button>
                            </Box>
                    </Box>
                </Box>
            </Paper>
    )
}
export default TakeNoteTwo;