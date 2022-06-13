import React, { useState } from "react"
function Login() {
    const [isAdmin, setIsAdmin] = useState(false)
    const display = () => {
        console.log("Admin Clicked")
        setIsAdmin(true)
    }
    console.log(isAdmin)
    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
}

export default Login;