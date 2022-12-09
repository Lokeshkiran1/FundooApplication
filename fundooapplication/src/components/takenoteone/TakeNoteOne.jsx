import { Box } from '@mui/system';
import React from 'react';
import './TakeNoteOne.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
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
                            <CheckBoxIcon></CheckBoxIcon>                        
                        </Tooltip>
                        <Tooltip>
                            <BrushIcon></BrushIcon>
                        </Tooltip>
                        <Tooltip>
                            <WallpaperIcon></WallpaperIcon>
                        </Tooltip>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default TakeNoteOne;