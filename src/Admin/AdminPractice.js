import React from 'react';
import "../Login/home.css";
import AdminSidebar from './Sidebar';

function Practices() {
  return (
    <div className='container-fluid'>

        <div className='row'>
            <div className='col-lg-1 d-none d-md-none d-lg-block'>
                <AdminSidebar />
            </div>
            <div className='col-lg-11'>
            <br /><br />
        {/*Add Practice button */}
        <input className='popInputText' style={{ width: "180px" }} placeholder='Search' type="text"></input>
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

                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="row">
                      <div className="col-5 popText">Practice Name*</div>
                      <div className="col-7"><input type="text" placeholder="Enter Name" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Practice Address*</div>
                      <div className="col-7"><input type="text" placeholder="Enter Address" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Latitude*</div>
                      <div className="col-7"><input type="text" placeholder="Enter latitude" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Longitude*</div>
                      <div className="col-7"><input type="text" placeholder="Enter longitude" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Zip code*</div>
                      <div className="col-7"><input type="text" placeholder="Enter zipcode" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Practice Email*</div>
                      <div className="col-7"><input type="text" placeholder="Enter Email-Id" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Password*</div>
                      <div className="col-7"><input type="text" placeholder="Enter password" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Primary Contact</div>
                      <div className="col-7"><input type="text" placeholder="Enter number" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Contact(Optional)</div>
                      <div className="col-7"><input type="text" placeholder="Enter number" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Tax Number</div>
                      <div className="col-7"><input type="text" placeholder="Enter Tax number" className="popInputText" /></div><br /><br />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="row">
                      <div className="col-5 popText">Website Url*</div>
                      <div className="col-7"><input type="text" placeholder="Enter url" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Facebook Url</div>
                      <div className="col-7"><input type="text" placeholder="Enter url" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Twitter Url</div>
                      <div className="col-7"><input type="text" placeholder="Enter url" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Logo</div>
                      <div className="col-7"><input type="text" placeholder="Upload file" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">General Tips</div>
                      <div className="col-7"><input type="text" placeholder="Type something" className="popInputText" /></div>
                      <br /><br />
                      <div className="col-5 popText">Patient Appointment booking</div>
                      <div className="col-7"><input type="text" placeholder="" className="popInputText" /></div><br />
                    </div>
                  </div>
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

      {/* ----------[table]------------ -----------*/}

      <div style={{paddingLeft:"7%"}} class="table-responsive container mt-3">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>101</td>
              <td>john</td>
              <td>1/20,covai</td>
              <td>john@exam.com</td>
              <td>john@exam.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>102</td>
              <td>mary@exam.com</td>
              <td>John</td>
              <td>Doe</td>
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
)
}

export default Practices;