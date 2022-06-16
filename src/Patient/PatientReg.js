import React, { useState } from "react";
import "../Login/home.css";
import img from "../Login/cornerstohn.png"

function PatientReg() {

    return (
                <div>
                <div id="colorReg"></div>
                <center className="loginMain">
                    <img className="pic" src={img}></img>
                    {/* ------------------------------------- */}
                    <form>
                        <input type="text" placeholder="First Name" required /><br />
                        <input type="text" placeholder="Last Name" required /><br />
                        <input type="text" placeholder="Gender Name" required /><br />
                        <input type="date" placeholder="D O B" required /><br />
                        <input type="email" placeholder="E-mail" required /><br />
                        <input type="text" placeholder="Password" required /><br />
                        <input type="text" placeholder="Confirm Password" required /><br />
                        <input type="text" placeholder="City" required /><br />
                        <input type="text" style={{}} placeholder="Postal code" required />
                        <p style={{fontSize:"10px",paddingLeft:"40%"}}>Already user?<a href="/PatientLogin">SIGN IN</a></p><br />
                        <button type="submit" id="sButton">SIGN IN</button><br /><br />
                    </form>
                </center>
                </div>
    );
}

export default PatientReg;