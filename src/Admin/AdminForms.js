import React from 'react';
import "../Login/home.css";
import AdminSidebar from './Sidebar';

function Forms() {
    return (
        <div>
            <AdminSidebar />
        
        <div className='' style={{paddingLeft:"8%"}}>
            <br />
            {/*Add Practice button */}
            <input className='popInputText' placeholder='Search' type="text"></input>
            <button className="sButton" style={{width:"150px",float:"right"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            Forms
                        </div>
                        <div class="modal-footer">
                            <button type="button"  class="sButton" style={{width:"anto"}} data-bs-dismiss="modal">Close</button>
                            <button type="button" class="sButton" style={{width:"anto"}}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Add Practice button end */}
            </div>

        </div>
    )
}

export default Forms;