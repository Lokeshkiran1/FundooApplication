import { Box } from '@mui/system';
import React from 'react';
import './TakeNoteOne.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Paper, Tooltip } from '@mui/material';
const TakeNoteOne=()=>{
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
            <Paper elevation={4} className='takeNote'>
                <Box className='takeNoteOne'>
                    <input className='noteOne' placeholder='Take a note...'></input>
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