import axios from 'axios';
export const loginAPI=(signInObj)=>{
    let response=axios.post("http://localhost:4000/api/v1/users/login",signInObj);
    return response;
}