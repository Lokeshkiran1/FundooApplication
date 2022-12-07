import React from "react";
import { Button, Card, TextField } from "@mui/material";
import "./Signup.css";
import FundooIcon from"../components/FundooIcon";
import logo from '../../src/account.svg'
import { fontSize } from "@mui/system";
const SignUp=()=>{
    return(
        <div className="register">
            <Card className="cardrow" style={{ display: 'flex', flexDirection: "row", justifyContent:'center' ,width: '50%' }}>
                <div className="cardI">
                    <FundooIcon className="fundooIcon" />
                    <div className="createText">Create Your Fundoo Account</div>
                        <div className="textField">
                            <div className="columnTextField">
                                <TextField className="firstName" label="FirstName" size="small" margin="dense" name="firstName" variant="outlined" />
                            </div>
                            <div className="columnTextField">
                                <TextField className="lastName" label="LastName" size="small" margin="dense" name="lastName" variant="outlined" />
                            </div>
                        </div>
                        <div className="rowTextField" style={{ display: 'flex', flexDirection: "column", justifyContent:'center' ,width: '98%' }}>
                            <TextField className="userName" label='UserName@gmail.com' size="small" margin="dense" variant="outlined" />
                            <span style={{textAlign:'left' ,fontSize:'14px',fontWeight:'500'}}>You can use letters, numbers and periods</span>
                        </div>
                        <div className="buttonCurrentEmail" style={{textAlign:'left' ,color:'#1a73e8'}}>
                            <Button style={{textTransform: 'none',fontSize:'16px',fontWeight:'bold',fontFamily:'"Google Sans",Roboto,Arial,sans-serif'}}>
                                <span>Use my current Email instead</span>
                            </Button>
                        </div>
                        <form className="passwordTextFields">
                            <div className="passwordTextField">
                                <div className="columnTextField">
                                    <TextField className="firstName" label="Password" size="small" margin="dense" name="firstName" variant="outlined" />
                                </div>
                                <div className="columnTextField">
                                    <TextField className="lastName" label="Confirm" size="small" margin="dense" name="lastName" variant="outlined" />
                                </div>
                            </div>
                        </form>
                        <div className="passwordValidation" style={{textAlign:'left' ,fontSize:'14px',fontWeight:'500'}}>
                            <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                        </div>
                        <form style={{textAlign:'left' ,fontSize:'18px'}}>
                            <input type={"checkbox"} /><span>show password</span>
                        </form>
                
                        <div className="buttonRegister" >
                            <div className="row" style={{ justifyContent: 'space-between' }}>
                                <div className="buttonHead">
                                    <Button className="signInButton" style={{textTransform: 'none',fontSize:'16px',fontWeight:'bold',fontFamily:'"Google Sans",Roboto,Arial,sans-serif'}}>
                                        Sign in instead
                                    </Button>
                                </div>
                            <div>
                                <Button variant="contained" className="registerButton" style={{textTransform: 'none',fontSize:'16px',fontWeight:"bold",fontFamily:'"Google Sans",Roboto,Arial,sans-serif'}}>
                                    Register
                                </Button>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="columncenterhide" style={{width:'244px',alignContent:'center'}}>
                    <img src={logo} alt="account.svg" />
                    <div className="oneAccount" style={{textAlign:'center' ,fontSize:'18px'}}>
                        <span>One account. All of Fudoo working for you.</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default SignUp;