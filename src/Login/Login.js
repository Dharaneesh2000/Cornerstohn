import React, { useState } from "react";
import "../Login/home.css";
import img from "../Login/cornerstohn.png"

function Login() {

    return (
        <div>
            <div id="color"></div>
            <center className="loginMain">
                <img className="pic" src={img}></img>
                {/* ------------------------------------- */}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Role
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Admin</a></li>
                        <li><a class="dropdown-item" href="#">Hospital</a></li>
                        <li><a class="dropdown-item" href="#">Doctor</a></li>
                        <li><a class="dropdown-item" href="/patientLogin">Patient</a></li>
                    </ul>
                </div>
                {/* --------------------------- */}
                <form action="/adminPractices">
                    <input type="text" className="text" placeholder="Email" required /><br />
                    <input type="password" className="password" placeholder="Password" required/><br />
                    <div style={{ paddingLeft: "-30px" }}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1" style={{ fontSize: "12px" }}>Remember me</label>
                    </div>
                    <br /><br />
                    <button type="submit" className="sButton">SIGN IN</button>
                </form>

            </center>
        </div>


    );
}

export default Login;