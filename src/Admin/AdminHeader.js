import React, { useState } from 'react';
import "./Sidebar.css";
import CornerstohnMobile from "../Admin/Dashoard Icons/cornerstohn logo.png";
import MobileMenu from "../Admin/Dashoard Icons/menu.png"
function AdminHeader() {

    return (
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
                <header className="header d-none d-sm-none d-md-block d-lg-block" style={{ boxShadow: "0px 4px 10px 0px #00000040", width:"290%" }}>
                    <div className='col-4 px-2 mt-4 mb-2' style={{ textAlign: "end" }}>
                        <h6 style={{ fontSize: "12px" }}><b>Admin</b></h6>
                    </div>
                </header>
            </div>
        </div>
    )
}
export default AdminHeader;


