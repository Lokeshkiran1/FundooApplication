import { Box } from '@mui/system';
import './TakeNoteThree.css'
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { AddAlertOutlined, ArchitectureOutlined, ArchiveOutlined, DeleteOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined } from '@mui/icons-material';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import ColorPopper from '../colorpopup/ColorPopup';
import { archiveNote, isTrashUpdate } from '../../services/DataService';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const TakeNoteThree=(props)=>{
    
    const listenToColorUpdate=()=>{
        props.getNote()
    }
    const archiveUpdate=(id)=>{
        // let input={noteId:[id]}
        archiveNote(id).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }
    const trashUpdate=(id)=>{
        isTrashUpdate(id).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <Box className='frame'>
            <Box className='outerContainer' style={{backgroundColor:props.note.color}}>
                <Box className='innerContainer1'>
                   <Box className='leftContainer'>
                        <Box className='note3a'>
                            <p>{props.note.title}</p>
                        </Box>
                        <Box className='note3b'>
                            <p>{props.note.description}</p>
                        </Box>
                   </Box>
                    <IconButton className='iconpin'>
                            <Tooltip title='pin'>
                                <PushPinOutlined></PushPinOutlined>
                            </Tooltip>
                    </IconButton>
                </Box>
                <Box className='innerContainer2'>
                        <Tooltip>
                            <AddAlertOutlined></AddAlertOutlined>
                        </Tooltip>
                        <Tooltip>
                            <PersonAddAlt1Outlined></PersonAddAlt1Outlined>
                        </Tooltip>
                        <IconButton>
                        <Tooltip>
                            <ColorPopper action="update" id={props.note._id} listenToColorUpdate={listenToColorUpdate}/>
                        </Tooltip>
                        </IconButton>
                        <IconButton>
                        <Tooltip>
                            <DeleteOutlineOutlinedIcon onClick={()=>trashUpdate(props.note._id)}/>
                        </Tooltip>
                        </IconButton>
                        <IconButton>
                        <Tooltip>
                            <ArchiveOutlined onClick={()=>archiveUpdate(props.note._id)} />
                        </Tooltip>
                        </IconButton>
                        
                        <Tooltip>
                            <MoreVertOutlined></MoreVertOutlined>
                        </Tooltip>
                </Box>

            </Box>
        </Box>
    )
}
export default TakeNoteThree;