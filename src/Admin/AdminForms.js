import React from 'react';
import "../Login/home.css";
import AdminSidebar from './Sidebar';

function Forms() {
    return (
        <div className='container-fluid'>

            <div className='row'>
                <div className='col-lg-1 d-none d-md-none d-lg-block'>
                    <AdminSidebar />
                </div>


                <div className='col-lg-11'>
                    <br />
                    {/*Add Practice button */}
                    <input className='popInputText' placeholder='Search' type="text"></input>
                    <button className="sButton" style={{ width: "150px", float: "right" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Form
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="row">
                                    <div className='col-6'>
                                    <h5 class="modal-title" id="exampleModalLabel" style={{ color: "#4F4F4F" }}><b>Create Form</b></h5>
                                    </div>
                                    <div className='col-6'>
                                    <button type="button" style={{float:"right"}} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div class="modal-body">
                                <center>
                                Title* <input type="text" style={{width:"250px"}} placeholder="Enter Hospital name" className="popInputText"></input>
                                <br /><br />
                                <button className='sButton' >save</button>
                                </center>
                                </div>
                                
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
                  <th>Form Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>101</td>
                  <td>john</td>
                  <td>1/20,covai</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>102</td>
                  <td>mary@exam.com</td>
                  <td>john@exam.com</td>
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

export default Forms;