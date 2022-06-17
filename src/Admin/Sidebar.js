import React from 'react';
import "./Sidebar.css"
import CorrnerstohnLogo from "../Admin/Dashoard Icons/cornerstohn logooo.png"
import CorrnerstohnTitle from "../Admin/Dashoard Icons/cornerstohn word.png"
function AdminSidebar() {

    const toggle = () => {
        const body = document.querySelector('body'),
            sidebar = body.querySelector('nav');
        sidebar.classList.toggle("close");
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
                                <a href="#">
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
                                <a href="#">
                                    <i class="icon fa-solid fa-file-lines"></i>
                                    <span className="text-sidebar nav-text">Forms</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-cloud-arrow-up"></i>
                                    <span className="text-sidebar nav-text">Uploads</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-user-tie"></i>
                                    <span className="text-sidebar nav-text">Employees</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-key"></i>
                                    <span className="text-sidebar nav-text">Change Password</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-right-from-bracket"></i>
                                    <span className="text-sidebar nav-text">Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text-sidebar nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch">
                                <span className="switch"></span>
                            </div>
                        </li>

                    </div> */}
                </div>

            </nav>

            {/* <section className="home d-none d-sm-none d-md-block d-lg-block">
                <div className='card' style={{ boxShadow: "0px 4px 10px 0px #00000040" }}>
                    <div className="text-sidebar" style={{ textAlign: "right", fontSize: "18px" }}>Admin</div>
                </div>
            </section> */}

            {/* Mobile View */}
            <header className="header-mobile d-block d-sm-block d-md-none d-lg-none">
                {/* Logo */}
                <a href="#" className="logo-mobile">LR</a>
                {/* Hamburger icon */}
                <input className="side-menu" type="checkbox" id="side-menu" />
                <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
                {/* Menu */}
                <nav className="nav">
                    <ul className="menu-mobile">
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Blog</a> </li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}
export default AdminSidebar;


