import axios from 'axios';
const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}
export const createNote=(obj)=>{
    let response=axios.post('http://localhost:4000/api/v1/notes',obj,headerConfig)
    return response;
}
export const getAllNotes=()=>{
    let response=axios.get('http://localhost:4000/api/v1/notes/allNotes',headerConfig)
    return response;
}
export const archiveNote=(id)=>{
    let response=axios.post(`http://localhost:4000/api/v1/notes/${id}/archive`,id,headerConfig)
    return response;
}
export const colorTakeNoteThree=(id,obj)=>{
    let response=axios.put(`http://localhost:4000/api/v1/notes/color/${id}`,obj,headerConfig)
    return response;
}