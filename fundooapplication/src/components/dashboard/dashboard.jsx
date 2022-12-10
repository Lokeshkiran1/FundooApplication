import React, { useState } from 'react';
import Header from '../header/Header';
import TakeNoteOne from '../takenoteone/TakeNoteOne';
import TakeNoteTwo from '../takeNoteTwo/TakeNoteTwo';
function DashBoard(){
    const [toggle,setToggle]=useState(false)
    const listenToTakeNoteOne=()=>{
        setToggle(true)
    }
    const listenToTakeNoteTwoCloseButton=()=>{
        setToggle(false)
    }
    return(
            <div>
                <Header />
                <div>
                    {
                        toggle?<TakeNoteTwo listenToTakeNoteTwoCloseButton={listenToTakeNoteTwoCloseButton} />:<TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} />
                    }
                </div>
            </div>
    )
}
export default DashBoard;