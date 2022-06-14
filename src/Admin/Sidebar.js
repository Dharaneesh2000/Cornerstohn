import React from 'react';
import "./Sidebar.css";
import Practices from '../Admin/Dashoard Icons/Hospital.svg';
import Doctor from './Dashoard Icons/Stethoscope.svg'
function AdminSidebar() {
    const toggle = () => {
        const body = document.querySelector('body'),
            sidebar = body.querySelector('nav')
        sidebar.classList.toggle("close");
    }
    return (
        <React.Fragment>
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src={co} alt=""/> */}
                        </span>

                        <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={() => toggle()}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">



                        <ul className="menu-links" style={{ padding: "0px" }}>
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-home-alt icon bi bi-pie-chart-fill' ></i>
                                    <span className="text nav-text">My Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-link">

                                <a href="#">
                                    <span className="text nav-text">Practices</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <img src={Doctor} />
                                    <span className="text nav-text">Doctor</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Patients</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon bi bi-search' ></i>
                                    <span className="text nav-text">User Search</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Forms</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bi bi-cloud-arrow-up-fill icon' ></i>
                                    <span className="text nav-text">Uploads</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='icon bi bi-person-fill' ></i>
                                    <span className="text nav-text">Employees</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bi bi-key-fill icon' ></i>
                                    <span className="text nav-text">Change Password</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-wallet icon' ></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
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

                    </div>
                </div>

            </nav>

            <section className="home">
                <div className="text">Dashboard Sidebar</div>
            </section>

            {/* <script>
                const body = document.querySelector('body'),
                sidebar = body.querySelector('nav'),
                toggle = body.querySelector(".toggle"),
                searchBtn = body.querySelector(".search-box"),
                modeSwitch = body.querySelector(".toggle-switch"),
                modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
                    sidebar.classNameList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
                    sidebar.classNameList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
                    body.classNameList.toggle("dark");

                if(body.classNameList.contains("dark")){
                    modeText.innerText = "Light mode";
    }else{
                    modeText.innerText = "Dark mode";
        
    }
});
            </script> */}

        </React.Fragment>)
}
export default AdminSidebar;