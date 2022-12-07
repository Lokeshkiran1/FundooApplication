import axios from 'axios';
export const loginAPI=(signInObj)=>{
    let response=axios.post("http://localhost:4000/api/v1/users/login",signInObj);
    return response;
}
export const registerAPI=(signUpObj)=>{
    let response=axios.post("http://localhost:4000/api/v1/users/register",signUpObj);
    return response;
}