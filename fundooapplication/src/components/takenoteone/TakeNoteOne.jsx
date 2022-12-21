import { Box } from '@mui/system';
import React from 'react';
import './TakeNoteOne.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { InputBase, Paper, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyle=makeStyles({
    takeNoteMain:{
        height: '7vh',
        width: '45vw',
        position: 'relative',
        left: '470px',
        top: '30px',
        bottom: '20px',
        border: '0px solid blue'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']:{
        
    }

})

const TakeNoteOne=(props)=>{
    const classes=useStyle();
    const openNoteTwo=()=>{
        props.listenToTakeNoteOne()
    }
    
    return(
            <Paper elevation={5} className={classes.takeNoteMain} onClick={openNoteTwo}>
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
    )
}
export default TakeNoteOne;