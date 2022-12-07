import React,{useState} from "react";
import { Button, Card, TextField } from "@mui/material";
import "./Signup.css";
import FundooIcon from "../components/FundooIcon";
import logo from "../../src/account.svg";
import { fontSize } from "@mui/system";
import { registerAPI } from "../services/UserService";
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /^[A-Z][a-zA-Z]{1,19}$/;
const lastNameRegex = /^[A-Za-z ]{3,10}$/;
const SignUp = () => {
  const [signUpObj, setSignUpObj] = useState({
        FirstName: "",
        LastName: "",
        EmailID: "",
        Password: "",
    });
    const [regexObj, setRegexObj] = useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
    });
    const takeFirstName = (event) => {
        // setSignUpObj({FirstName:event.target.value})
        setSignUpObj((prevState) => ({
            ...prevState,
            FirstName: event.target.value,
        }));
    }
    const takeLastName = (event) => {
        // setSignUpObj({LastName:event.target.value})
        setSignUpObj((prevState) => ({
            ...prevState,
            LastName: event.target.value,
        }));
    }
    const takeEmail=(event)=>{
        // setSignUpObj({EmailID:event.target.value})
        setSignUpObj(prevState=>({
            ...prevState,
            EmailID:event.target.value
        }))
    }

    const takePassword=(event)=>{
     // setSignInObj({Password:event.target.value})
        setSignUpObj(prevState=>({
            ...prevState,
            Password:event.target.value
        }))
    }

    const submit=()=>{
        let firstNameTest=firstNameRegex.test(signUpObj.FirstName);
        let lastNameTest=lastNameRegex.test(signUpObj.LastName)
        let emailTest=emailRegex.test(signUpObj.EmailID);
        let passwordTest=passwordRegex.test(signUpObj.Password);
        if(firstNameTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                firstNameBorder:true,
                firstNameHelper:"Enter valid first Name"
            }))
        }
        else if(firstNameTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                firstNameBorder:false,
                firstNameHelper:""
            }))
        }
        if(lastNameTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                lastNameBorder:true,
                lastNameHelper:"Enter valid first Name"
            }))
        }
        else if(lastNameTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                lastNameBorder:false,
                lastNameHelper:""
            }))
        }
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
        if(firstNameTest===true && lastNameTest===true && emailTest===true && passwordTest===true){
            registerAPI(signUpObj).then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }
    return (
        <div className="register">
      <Card
        className="cardrow"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <div className="cardI">
          <FundooIcon className="fundooIcon" />
          <div className="createText">Create Your Fundoo Account</div>
          <div className="textField">
            <div className="columnTextField">
              <TextField
                className="firstName"
                label="FirstName"
                size="small"
                margin="dense"
                name="firstName"
                variant="outlined"
                onChange={takeFirstName}
                error={regexObj.firstNameBorder}
                helperText={regexObj.firstNameHelper}
              />
            </div>
            <div className="columnTextField">
              <TextField
                className="lastName"
                label="LastName"
                size="small"
                margin="dense"
                name="lastName"
                variant="outlined"
                onChange={takeLastName}
                error={regexObj.lastNameBorder}
                helperText={regexObj.lastNameHelper}
              />
            </div>
          </div>
          <div
            className="rowTextField"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "98%",
            }}
          >
            <TextField
              className="userName"
              label="UserName@gmail.com"
              size="small"
              margin="dense"
              variant="outlined"
              onChange={takeEmail}
              error={regexObj.emailBorder}
              helperText={regexObj.emailHelper}
            />
            <span
              style={{ textAlign: "left", fontSize: "14px", fontWeight: "500" }}
            >
              You can use letters, numbers and periods
            </span>
          </div>
          <div
            className="buttonCurrentEmail"
            style={{ textAlign: "left", color: "#1a73e8" }}
          >
            <Button
              style={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
              }}
            >
              <span>Use my current Email instead</span>
            </Button>
          </div>
          <form className="passwordTextFields">
            <div className="passwordTextField">
              <div className="columnTextField">
                <TextField
                  className="password"
                  label="Password"
                  size="small"
                  margin="dense"
                  name="firstName"
                  variant="outlined"
                  onChange={takePassword}
                  error={regexObj.passwordBorder}
                    helperText={regexObj.passwordHelper}
                />
              </div>
              <div className="columnTextField">
                <TextField
                  className="confirm"
                  label="Confirm"
                  size="small"
                  margin="dense"
                  name="lastName"
                  variant="outlined"
                />
              </div>
            </div>
          </form>
          <div
            className="passwordValidation"
            style={{ textAlign: "left", fontSize: "14px", fontWeight: "500" }}
          >
            <span>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
          </div>
          <form style={{ textAlign: "left", fontSize: "18px" }}>
            <input type={"checkbox"} />
            <span>show password</span>
          </form>

          <div className="buttonRegister">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="buttonHead">
                <Button
                  className="signInButton"
                  style={{
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
                  }}
                >
                  Sign in instead
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="registerButton"
                  style={{
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: '"Google Sans",Roboto,Arial,sans-serif',
                  }}
                  onClick={submit}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="columncenterhide"
          style={{ width: "244px", alignContent: "center" }}
        >
          <img src={logo} alt="account.svg" />
          <div
            className="oneAccount"
            style={{ textAlign: "center", fontSize: "18px" }}
          >
            <span>One account. All of Fudoo working for you.</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default SignUp;
