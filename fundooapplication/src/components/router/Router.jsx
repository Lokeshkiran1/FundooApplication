import React from "react";
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import SignIn from "../../signin/Signin";
import SignUp from "../../signup/Signup";
import DashBoard from "../dashboard/dashboard";

function Router1(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SignIn />}/>
                    <Route  path="/signup" element={<SignUp />}/>
                    <Route  path="/dashboard" element={<DashBoard />}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Router1