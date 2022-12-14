import { Box } from '@mui/system';
import React from 'react';
import './TakeNoteOne.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { InputBase, Paper, Tooltip } from '@mui/material';
const TakeNoteOne=(props)=>{

    const openNoteTwo=()=>{
        props.listenToTakeNoteOne()
    }
    
    return(
        // <div>
        //     <div className='takeNoteOne'>
        //         <input className='takeNote' placeholder='Take a note...'></input>
        //         <div className='buttons'>
        //             <CheckBoxIcon></CheckBoxIcon>
        //             <BrushIcon></BrushIcon>
        //             <WallpaperIcon></WallpaperIcon>
        //         </div>
        //     </div>
        // </div>
        <Box>
            <Paper elevation={4} className='takeNote' onClick={openNoteTwo}>
                <Box className='takeNoteOne'>
                    <InputBase className='noteOne' placeholder='Take a note...'></InputBase>
                    <Box className='takeNoteIcon'>
                        <Tooltip>
                            <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>                     
                        </Tooltip>
                        <Tooltip>
                            <BrushIcon></BrushIcon>
                        </Tooltip>
                        <Tooltip>
                            <ImageOutlinedIcon></ImageOutlinedIcon>
                        </Tooltip>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default TakeNoteOne;