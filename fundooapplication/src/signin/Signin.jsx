import React from "react";
import "./Signin.css";
import FundooIcon from"../components/FundooIcon";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
const SignIn=()=>{
    return(
        <div className="loginPage">
            <div className="loginCard">
                <div className="columncenter">
                    <FundooIcon className="fitWidth" />
                    <h3 className="headText">Sign in</h3>
                    <span className="subText">Use your Google Account</span>
                </div>
                <div className="columnform" >
                    <div><TextField className="outlined" label="Email" variant="outlined" margin="normal" /></div>
                    <div><TextField className="outlined"label="Password" variant="outlined" margin="normal" /></div>
                </div>
                <div className="notComputer">Not your computer? Use Guest mode to sign in privately.
                    <a className="link" href="https://support.google.com/chrome/answer/6130773?hl=en">Learn More</a>
                </div>
                <div className="buttonRegister" >
                       <div className="row" style={{ justifyContent: 'space-between' }}>
                            <div className="create">Create Account</div>
                            <Button className="loginButton" variant="contained">Login</Button>
                       </div>
                </div>
            </div>
        </div>

    )
}
export default SignIn;