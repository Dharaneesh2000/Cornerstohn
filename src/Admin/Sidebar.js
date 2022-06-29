import React, { useState } from 'react';
import "./Sidebar.css";
import CorrnerstohnLogo from "../Admin/Dashoard Icons/cornerstohn logooo.png";
import CorrnerstohnTitle from "../Admin/Dashoard Icons/cornerstohn word.png";
import CornerstohnMobile from "../Admin/Dashoard Icons/cornerstohn logo.png";
import MobileMenu from "../Admin/Dashoard Icons/menu.png"
function AdminSidebar() {


    const toggle = () => {
        const body = document.querySelector('body'),
            sidebar = body.querySelector('nav');
        sidebar.classList.toggle("close");
    }
    // Mobile Nav bar
    // window.addEventListener("load", () => {
    //     document.body.classList.remove("preload");
    // });
    const [sideTgl, setSideTgl] = useState("nav")
    const mobileSideOpen = () => {
        setSideTgl("nav nav--open");
    }
    const mobileSideClose = () => {
        setSideTgl("nav");
    }


    return (
        <React.Fragment>
            <nav className="sidebar close d-none d-sm-none d-md-block d-lg-block">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={CorrnerstohnLogo} alt="" />
                        </span>

                        <div className="text-sidebar logo-text">
                            {/* <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span> */}
                            <img src={CorrnerstohnTitle} alt="" style={{ width: "155px" }} />
                        </div>
                    </div>

                    <i className='fa-solid fa-circle-arrow-right toggle sidebaroc' onClick={() => toggle()}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-chart-pie"></i>
                                    <span className="text-sidebar nav-text">My Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/adminPractices">
                                    <i class="icon fa-solid fa-square-h"></i>
                                    <span className="text-sidebar nav-text">Practices</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-stethoscope" />
                                    <span className="text-sidebar nav-text">Doctor</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-bed-pulse"></i>
                                    <span className="text-sidebar nav-text">Patients</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-magnifying-glass"></i>
                                    <span className="text-sidebar nav-text">User Search</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/adminForms">
                                    <i class="icon fa-solid fa-file-lines"></i>
                                    <span className="text-sidebar nav-text">Forms</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/adminUploads">
                                    <i class="icon fa-solid fa-cloud-arrow-up"></i>
                                    <span className="text-sidebar nav-text">Uploads</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/adminEmpoloyees">
                                    <i class="icon fa-solid fa-user-tie"></i>
                                    <span className="text-sidebar nav-text">Employees</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/adminChangePassword">
                                    <i class="icon fa-solid fa-key"></i>
                                    <span className="text-sidebar nav-text">Change Password</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/">
                                    <i class="icon fa-solid fa-right-from-bracket"></i>
                                    <span className="text-sidebar nav-text">Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>

            {/* <section className="home d-none d-sm-none d-md-block d-lg-block">
                <div className='card' style={{ boxShadow: "0px 4px 10px 0px #00000040" }}>
                    <div className="text-sidebar" style={{ textAlign: "right", fontSize: "18px" }}>Admin</div>
                </div>
            </section> */}

            {/* Mobile View */}
            <div className="d-block d-sm-block d-md-none d-lg-none">
                <header className="header" style={{ boxShadow: "0px 4px 10px 0px #00000040" }}>
                    {/* <div className='row'> */}
                    <div className='col-4 px-2 mt-3'>
                        <button className="header__button" id="btnNav" type="button" onClick={mobileSideOpen}>
                            <img src={MobileMenu} />
                        </button>
                    </div>
                    <div className='col-4 text-center py-3'>
                        <img src={CornerstohnMobile} width="140px" alt="Company Logo" />
                    </div>
                    <div className='col-4 px-2 mt-4' style={{ textAlign: "end" }}>
                        <h6 style={{fontSize:"12px"}}><b>Admin</b></h6>
                    </div>
                    {/* </div> */}
                </header>
                <nav className={sideTgl}>
                    <div className="nav__links text-center">
                        <img src={CornerstohnMobile} width="140px" alt="Company Logo" className="px-2 py-4" style={{ textAlign: "left" }} />
                        <a href="#" className="nav__link  nav__link--active">
                            My Dashboard
                        </a>
                        <a className="nav__link" href="#">
                            Practices
                        </a>
                        <a className="nav__link" href="#">
                            Doctor
                        </a>
                        <a className="nav__link" href="#">
                            Patients
                        </a>
                        <a className="nav__link" href="#">
                            User Search
                        </a>
                        <a className="nav__link" href="#">
                            Forms
                        </a>
                        <a className="nav__link" href="#">
                            Uploads
                        </a>
                        <a className="nav__link" href="#">
                            Employees
                        </a>
                        <a className="nav__link" href="#">
                            Change Password
                        </a>
                        <a className="nav__link" href="#">
                            Logout
                        </a>
                    </div>
                    <div className="nav__overlay" onClick={mobileSideClose}></div>
                </nav>
                {/* <div className='col-sm-4'>
                            <img src={CorrnerstohnTitle} alt="Company Logo" />
                        </div>
                        <div className='col-sm-4'>
                            <h4>Admin</h4>
                        </div> */}
                {/* <div className='col-sm-4'>
                        <img src={CorrnerstohnTitle} alt="Company Logo" />
                    </div>
                    <div className='col-sm-4'>
                        <h4>Admin</h4>
                    </div> */}
            </div>
            {/* Mobile view End */}
        </React.Fragment>
    )
}
export default AdminSidebar;


