import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import TakeNoteOne from '../takenoteone/TakeNoteOne';
import TakeNoteTwo from '../takeNoteTwo/TakeNoteTwo';
import TakeNoteThree from '../takeNoteThree/TakeNoteThree'
import { getAllNotes } from '../../services/DataService';
function DashBoard(){
    const [toggle,setToggle]=useState(false)
    const [noteList,setNoteList]=useState([])

    const listenToTakeNoteOne=()=>{
        setToggle(true)
    }
    const listenToTakeNoteTwoCloseButton=()=>{
        setToggle(false)
    }
    const getNote=()=>{
        getAllNotes().then(response=>{
            console.log(response);
            setNoteList(response.data.data)
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        getNote()
    },[])
    return(
            <div>
                <Header />
                <div>
                    {
                        toggle?<TakeNoteTwo listenToTakeNoteTwoCloseButton={listenToTakeNoteTwoCloseButton} />:<TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} />
                    }
                    <div style={{display:'flex',flexDirection:'row',position:'relative',left:'280px',top:'50px',width:'70vw',flexWrap:'wrap'}}>
                        {
                            noteList.map((note)=>(<TakeNoteThree note={note} getNote={getNote}/>))
                        }
                    </div>
                </div>
            </div>
    )
}
export default DashBoard;