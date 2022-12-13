import { Box } from '@mui/system';
import './TakeNoteThree.css'
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { AddAlertOutlined, ArchitectureOutlined, ArchiveOutlined, DeleteOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined } from '@mui/icons-material';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
const TakeNoteThree=(props)=>{
    console.log("note threeeee===========>>>>",props)
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
                </Box>

            </Box>
        </Box>
    )
}
export default TakeNoteThree;