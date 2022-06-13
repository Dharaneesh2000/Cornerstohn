import React, { useState } from "react"
function Login() {
    const [isAdmin, setIsAdmin] = useState(false)
    const display = () => {
        console.log("Admin Clicked")
        setIsAdmin(true)
    }
    console.log(isAdmin)
    return (
        <div className="row">
            <div className="col-3">
            <h1>hello</h1>
            </div>
            <div className="col-9">
            <h1>hello</h1>
            </div>
        </div>
    );
}

export default Login;