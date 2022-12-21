import React, { useEffect, useReducer, useState } from 'react';
import Header from '../header/Header';
import TakeNoteOne from '../takenoteone/TakeNoteOne';
import TakeNoteTwo from '../takeNoteTwo/TakeNoteTwo';
import TakeNoteThree from '../takeNoteThree/TakeNoteThree'
import { getAllNotes } from '../../services/DataService';
import MiniDrawer from '../drawer/Drawer';
import Headermui from '../Headermui'
function DashBoard(){
    const [toggle,setToggle]=useState(false)
    const [noteList,setNoteList]=useState([])
    const[drawerToggle,setDrawerToggle]=useState(false)
    const [noteChoice,setNoteChoice]=useState('Notes')

    const listenToTakeNoteOne=()=>{
        setToggle(true)
    }
    const listenToTakeNoteTwoCloseButton=()=>{
        setToggle(false)
    }
    const listenToHeader=()=>{
        setDrawerToggle(!drawerToggle)
    }
    const autoRefresh=()=>{
        getNote()
    }
    const getNote=()=>{
        getAllNotes().then(response=>{
            console.log(response);
            let filterNote=[];
            if(noteChoice==='Notes'){
                filterNote=response.data.data.filter((note)=>{
                    if(note.isArchived===false && note.isTrash===false){
                        return note;
                    }
                })
            }
            else if(noteChoice==='Archive'){
                filterNote=response.data.data.filter((note)=>{
                    if(note.isArchived===true && note.isTrash===false){
                        return note;
                    }
                })
            }
            else if(noteChoice==='Bin'){
                filterNote=response.data.data.filter((note)=>{
                    if(note.isArchived===false && note.isTrash===true){
                        return note;
                    }
                })
            }
            console.log(filterNote)
            setNoteList(filterNote)

        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        getNote()
    },[noteChoice])

    const listenToDrawer=(choice)=>{
        setNoteChoice(choice)

    }
    return(
            <div>
                <Headermui listenToHeader={listenToHeader}/>
                <MiniDrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} />
                <div style={{border:'0px solid red'}}>
                    {
                        toggle?<TakeNoteTwo listenToTakeNoteTwoCloseButton={listenToTakeNoteTwoCloseButton} autoRefresh={autoRefresh}/>:<TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} />
                    }
                    <div style={{display:'flex',flexDirection:'row',position:'relative',left:'300px',top:'40px',width:'80vw',flexWrap:'wrap'}}>
                        {
                            noteList.map((note)=>(<TakeNoteThree note={note} getNote={getNote} autoRefresh={autoRefresh}/>))
                        }
                    </div>
                </div>
            </div>
    )
}
export default DashBoard;