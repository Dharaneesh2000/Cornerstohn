import React, { useState } from "react";
import "../Login/home.css";
import img from "../Login/cornerstohn.png"

function PatientReg() {

    return (
        <div>
            <div id="colorReg" style={{height:"160vh"}}></div>
            <center className="loginMain">
                <img className="pic" src={img}></img>
                {/* ------------------------------------- */}
                <form style={{paddingTop:"20px"}}>
                    
                    <input type="text" id="text" placeholder="First Name" required /><br />
                    <input type="text" id="text" placeholder="Last Name" required /><br />
                    <div><br/>
                        <select style={{width:"300px",border:"none",borderBottom:"1px solid #FFAD0D",borderRadius:"0px",color:"#4F4F4F",paddingLeft:"0PX"}} className="form-select form-control formControlPer"  required>
                            <option selected style={{ display: "none" }}>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div><br/>
                    <input type="date" id="date" placeholder="D O B" required /><br />
                    <input type="email" id="email" placeholder="E-mail" required /><br />
                    <input type="text" id="text" placeholder="Password" required /><br />
                    <input type="text" id="text" placeholder="Confirm Password" required /><br />
                    <input type="text" id="text" placeholder="City" required /><br />
                    <input type="text" id="text" style={{}} placeholder="Postal code" required />
                    <p style={{ fontSize: "10px", paddingLeft: "40%" }}>Already user?<a href="/PatientLogin">SIGN IN</a></p><br />
                    <button type="submit" id="sButton">SIGN IN</button><br /><br />
                </form>
            </center>
        </div>
    );
}

export default PatientReg;