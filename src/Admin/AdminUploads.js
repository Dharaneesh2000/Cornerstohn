import React from 'react';
import "../Login/home.css";
import AdminSidebar from './Sidebar';
import AdminHeader from './AdminHeader';

function Uploads() {
    return (
        <div className='container-fluid'>
            <AdminHeader />
            <br></br><br></br>
            <div className='row'>
                <div className='col-lg-1'>
                    <AdminSidebar />
                </div>
                <div className='col-lg-11'>
                    <br />
                    {/*Add Practice button */}
                    <input className='popInputText' placeholder='Search' type="text"></input>
                    <button className="sButton" style={{ width: "150px", float: "right" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Upload image
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="row">
                                    <div className='col-6'>
                                        <br />
                                        <h5 class="modal-title" id="exampleModalLabel" style={{ color: "#4F4F4F", paddingLeft: "15px" }}><b>Upload image</b></h5>
                                    </div>
                                    <div className='col-6'>
                                        <br />
                                        <button type="button" style={{ float: "right", paddingRight: "15px" }} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <div className='row'>
                                        <div className='col-3'>Title*</div>
                                        <div className='col-9'><input type="text" style={{ width: "250px" }} placeholder="Title" className="popInputText"></input></div>
                                    </div><br />
                                    <div className='row'>
                                        <div className='col-3'>Catergory*</div>
                                        <div className='col-9'><input type="text" style={{ width: "250px" }} placeholder="Choose" className="popInputText"></input></div>
                                    </div><br />
                                    <div className='row'>
                                        <div className='col-3'>Upload*</div>
                                        <div className='col-9'><input type="text" style={{ width: "250px" }} placeholder="Upload File" className="popInputText"></input></div>
                                    </div>
                                </div><br />
                                <center>
                                <button className='sButton' >save</button>
                                <br/><br/>
                                </center>
                            </div>
                        </div>
                    </div>
                    {/*Add Practice button end */}
                    {/* ----------[table]------------ -----------*/}
                    <div className="table-responsive container mt-3">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Uploaded by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>101</td>
                                    <td>john</td>
                                    <td>covai</td>
                                    <td>covai</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>102</td>
                                    <td>mary@exam</td>
                                    <td>john@exam</td>
                                    <td>john@exam</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="footer">
                            <center>
                                <button className='sButton'>Previous</button> <button className='sButton' >Next</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Uploads;