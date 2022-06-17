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
                    <input type="text" className="text" placeholder="Email" /><br />
                    <input type="password" className="password" placeholder="Password" /><br />
                    <div style={{ paddingLeft: "-30px" }}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1" style={{ fontSize: "12px" }}>Remember me</label>
                    </div>
                    <br /><br />
                    <button type="submit" className="sButton">SIGN IN</button>
                </form>

            </center>
            {/* Start a  post button */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style={{color:"#4F4F4F"}}><b>Create Practice</b></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="col-5 popText">Practice Name*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter Name" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Practice Address*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter Address" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Latitude*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter latitude" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Longitude*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter longitude" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Zip code*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter zipcode" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Practice Email*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter Email-Id" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Password*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter password" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Primary Contact</div>
                                        <div className="col-7"><input type="text" placeholder="Enter number" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Contact(Optional)</div>
                                        <div className="col-7"><input type="text" placeholder="Enter number" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Tax Number</div>
                                        <div className="col-7"><input type="text" placeholder="Enter Tax number" className="popInputText"  /></div><br/><br />
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="col-5 popText">Website Url*</div>
                                        <div className="col-7"><input type="text" placeholder="Enter url" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Facebook Url</div>
                                        <div className="col-7"><input type="text" placeholder="Enter url" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Twitter Url</div>
                                        <div className="col-7"><input type="text" placeholder="Enter url" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Logo</div>
                                        <div className="col-7"><input type="text" placeholder="Upload file" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">General Tips</div>
                                        <div className="col-7"><input type="text" placeholder="Type something" className="popInputText"  /></div>
                                        <br/><br />
                                        <div className="col-5 popText">Patient Appointment booking</div>
                                        <div className="col-7"><input type="text" placeholder="" className="popInputText"  /></div><br />
                                    </div>
                                </div>
                            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* Start a  post button end */}
        </div>


    );
}

export default Login;