import React from 'react';
import "../Login/home.css";
import AdminSidebar from './Sidebar';
import AdminHeader from './AdminHeader';

function Empoloyees() {
    return (
        <div className='container-fluid'>
            <AdminHeader />
            <br></br><br></br>
            <div className='row'>
                <div className='col-md-1 '>
                    <AdminSidebar />
                </div>
                <div className='col-md-11'>
                    <br />
                    {/*Add Practice button */}
                    <input className='popInputText' style={{ width: "180px", marginLeft: "14px" }} placeholder='Search' type="text"></input>
                    <button className="sButton" style={{ width: "150px", float: "right" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Practice
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel" style={{ color: "#4F4F4F" }}><b>Create Practice</b></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        ChangePassword
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="sButton" style={{ width: "anto" }} data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="sButton" style={{ width: "anto" }}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Add Practice button end */}
                </div>
            </div>
        </div>
    )
}

export default Empoloyees;