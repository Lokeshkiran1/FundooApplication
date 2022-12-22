import { Box } from '@mui/system';
import React from 'react';
//import './TakeNoteOne.css';
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
    takeNoteOne:{
        boxSizing: 'borderBox',
        width: '45vw',
        height: '6vh',
        marginTop: '0px',
        border: '0px solid green',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flexStart',
        alignItems: 'center',
        borderRadius: '8px',
        opacity: '1'
    },
    noteOne:{
        marginLeft: '10px',
        width: '70%',
        height: '60%',
        marginTop: '8px',
        fontSize: '14px',
        color: '#202124',
        fontWeight: '550',
        letterSpacing: '.01428571em',
        lineHeight: '1.0rem',
        border: '0px solid brown',
        outline: 'none'
    },
    takeNoteIcon:{
        width: '30%',
        height: '60%',
        border: '0px solid red',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']:{
        takeNoteMain:{
            width: '90vw',
            left: '70px',
            top: '30px',
            bottom: '20px',
            border: '0px solid blue'
        },
        // noteOne:{
        //     border:'0px solid red',
        //     width:'300px'

        // },
        takeNoteIcon:{
            width:'100px',
            border: '0px solid red',
            position:'relative',
            left:'100px'
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']:{
        takeNoteMain:{
            width: '90vw',
            left: '100px',
            top: '30px',
            bottom: '20px',
            border: '0px solid blue'
        },
        takeNoteIcon:{
            width: '150%',
            height: '60%',
            border: '0px solid red',
            position:'relative',
            left:'220px'
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1024px)']:{
        takeNoteMain:{
            width: '70vw',
            left: '120px',
            top: '30px',
            bottom: '20px',
            border: '0px solid blue'
        },
        takeNoteIcon:{
            width: '100%',
            height: '60%',
            border: '0px solid red',
            position:'relative',
            left:'180px'
        }
    }

});

const TakeNoteOne=(props)=>{
    const classes=useStyle();
    const openNoteTwo=()=>{
        props.listenToTakeNoteOne()
    }
    
    return(
            <Paper elevation={5} className={classes.takeNoteMain} onClick={openNoteTwo}>
                <Box className={classes.takeNoteOne}>
                    <InputBase className={classes.noteOne} placeholder='Take a note...'></InputBase>
                    <Box className={classes.takeNoteIcon}>
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