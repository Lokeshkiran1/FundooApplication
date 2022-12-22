import React, { useState } from "react";
import "./Signin.css";
import FundooIcon from "../components/FundooIcon";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginAPI } from "../services/UserService";
import { useNavigate } from "react-router-dom";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const SignIn = () => {
    const navigate=useNavigate()
    const [signInObj,setSignInObj]=useState({EmailID:"",Password:""});
    const [regexObj,setRegexObj]=useState({emailBorder:false,emailHelper:"",passwordBorder:false,passwordHelper:""})
    const takeEmail=(event)=>{
        // setSignInObj({EmailID:event.target.value})
        setSignInObj(prevState=>({
            ...prevState,
            EmailID:event.target.value
        }))
    }
    const takePassword=(event)=>{
        // setSignInObj({Password:event.target.value})
        setSignInObj(prevState=>({
            ...prevState,
            Password:event.target.value
        }))
    }
    const submit=()=>{
        let emailTest=emailRegex.test(signInObj.EmailID);
        let passwordTest=passwordRegex.test(signInObj.Password);
        if(emailTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                emailBorder:true,
                emailHelper:"Enter valid Email"
            }))
        }
        else if (emailTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                emailBorder:false,
                emailHelper:""
            }))
        }
        if(passwordTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                passwordBorder:true,
                passwordHelper:"Enter valid Password"
            }))
        }
        else if (passwordTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                passwordBorder:false,
                passwordHelper:""
            }))
        }
        if(emailTest===true && passwordTest===true){
            loginAPI(signInObj).then(response=>{
                console.log(response);
                localStorage.setItem('token',response.data.data)
                navigate('/dashboard')
            }).catch(error=>{
                console.log(error);
            })
        }
    }
    const openSignUp=()=>{
      navigate('/signup')
    }
    // console.log(signInObj);
  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="columncenter">
          <FundooIcon className="fitWidth" />
          <h3 className="headText">Sign in</h3>
          <span className="subText">Use your Google Account</span>
        </div>
        <div className="columnform">
          <div>
            <TextField
              className="outlined"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={takeEmail}
              error={regexObj.emailBorder}
              helperText={regexObj.emailHelper}
            />
          </div>
          <div>
            <TextField
              className="outlined"
              label="Password"
              variant="outlined"
              margin="normal"
              onChange={takePassword}
              error={regexObj.passwordBorder}
              helperText={regexObj.passwordHelper}

            />
          </div>
        </div>
        <div className="notComputer">
          Not your computer? Use Guest mode to sign in privately.
          <a
            className="link"
            href="https://support.google.com/chrome/answer/6130773?hl=en"
          >
            Learn More
          </a>
        </div>
        <div className="rowCreateSubmit">
          <div>
            <Button
              className="createAccount"
              style={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
              }}
              onClick={openSignUp}
            >
              Create Account
            </Button>
          </div>
          <div>
            <Button
              className="loginButton"
              variant="contained"
              style={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
              }}
              onClick={submit}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
