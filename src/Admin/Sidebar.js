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
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={CorrnerstohnLogo} alt="" />
                        </span>

                        <div className="text logo-text">
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
                                    <span className="text nav-text">My Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-square-h"></i>
                                    <span className="text nav-text">Practices</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-stethoscope" />
                                    <span className="text nav-text">Doctor</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-bed-pulse"></i>
                                    <span className="text nav-text">Patients</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-magnifying-glass"></i>
                                    <span className="text nav-text">User Search</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-file-lines"></i>
                                    <span className="text nav-text">Forms</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-cloud-arrow-up"></i>
                                    <span className="text nav-text">Uploads</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-user-tie"></i>
                                    <span className="text nav-text">Employees</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-key"></i>
                                    <span className="text nav-text">Change Password</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i class="icon fa-solid fa-right-from-bracket"></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
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

            <section className="home">
                <div className='card' style={{ boxShadow: "0px 4px 10px 0px #00000040" }}>
                    <div className="text" style={{ textAlign: "right", fontSize:"18px" }}>Admin</div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default AdminSidebar;


{/* <i class="fa-solid fa-square-h"></i>
<i class="fa-solid fa-stethoscope"></i>
<i class="fa-solid fa-bed-pulse"></i>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-solid fa-file-lines"></i>
<i class="fa-solid fa-cloud-arrow-up"></i>
<i class="fa-solid fa-user-vneck"></i>
<i class="fa-solid fa-right-from-bracket"></i>
<i class="fa-solid fa-key"></i> */}