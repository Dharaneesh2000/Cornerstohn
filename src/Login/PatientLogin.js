import React, { useState } from "react";
import "../Login/home.css";
import img from "../Login/cornerstohn.png"

function PatientLogin() {

    return (
                <div>
                <div id="color"></div>
                <center className="loginMain">
                    <img className="pic" src={img}></img>
                    {/* ------------------------------------- */}
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Role
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/">Admin</a></li>
                            <li><a class="dropdown-item" href="/">Hospital</a></li>
                            <li><a class="dropdown-item" href="/">Doctor</a></li>
                            <li><a class="dropdown-item" href="/patientLogin">Patient</a></li>
                        </ul>
                    </div>
                    {/* --------------------------- */}
                    <form>
                        <input type="text" className="text" placeholder="Email" /><br />
                        <input type="password" className="password" placeholder="Password" /><br />
                        <span style={{fontSize:"10px"}}>New user? <a href="/patientReg">SIGN UP</a></span>
                        <span> &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</span>
                        <span style={{fontSize:"10px"}}>Forgot Password?</span>
                        <br /><br />
                        <button type="submit" className="sButton">SIGN IN</button>
                    </form>
                </center>
                </div>
    );
}

export default PatientLogin;