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
                <form>
                    <input type="text" id="text" placeholder="Email" /><br />
                    <input type="password" id="password" placeholder="Password" /><br />
                    <div style={{ paddingLeft: "-30px" }}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1" style={{ fontSize: "12px" }}>Remember me</label>
                    </div>
                    <br /><br />
                    <button type="submit" id="sButton">SIGN IN</button>
                </form>

            </center>
            {/* Start a  post button */}
            <div className='col-12'>
                <button type="button" id="sButton" style={{width:"300px"}} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Practice
                </button>
                <div class="modal fade CreatePractice" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 style={{ color: "#4F4F4F" }}><b>Create Practice</b></h6>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="col-6">Practice Name*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Practice Address*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Latitude*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Longitude*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Zip code*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Practice Email*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Password*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Primary Contact number*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Contact Number(Optional)</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Tax Number</div>
                                        <div className="col-6"><input type="text" /></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="col-6">Website Url*</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Facebook Url</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Twitter Url</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Logo</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">General Tips</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <br/>
                                        <div className="col-6">Patient Appointment booking</div>
                                        <div className="col-6"><input type="text" /></div>
                                        <div className="col-12">
                                            <input type="button" id="sButton" value="save" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start a  post button end */}
        </div>


    );
}

export default Login;