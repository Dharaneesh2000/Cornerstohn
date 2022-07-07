import React from 'react';
import "../Login/home.css";
import AdminHeader from './AdminHeader';
import AdminSidebar from './Sidebar';

function ChangePassword() {
    return (
        <div className='container-fluid'>
      <AdminHeader />
      <br></br><br></br>
      <div className='row'>
        <div className='col-md-1 '>
          <AdminSidebar />
        </div>
        <div className='col-md-11'>
        <br /><br />
            <table>
                <tr>
                    <td style={{width:"200px",height:"70px"}}><h3 className='popText'>Current Password</h3></td>
                    <td><input type="text" className="popInputText" style={{width:"300px"}} placeholder='Current Password' /></td>
                </tr>
                <tr>
                    <td style={{width:"200px",height:"70px"}}><h3 className='popText'>New Password</h3></td>
                    <td><input type="text" className="popInputText" style={{width:"300px"}} placeholder='New Password' /></td>
                </tr>
                <tr>
                    <td style={{width:"200px",height:"70px"}}><h3 className='popText'>Confirm Password</h3></td>
                    <td><input type="text" className="popInputText" style={{width:"300px"}} placeholder='Confirm Password' /></td>
                </tr>
                <tr>
                <input type="submit" value="save" style={{}} className='sButton' />
                </tr>
            </table>
        </div>
      </div>
    </div>
    )
}

export default ChangePassword;