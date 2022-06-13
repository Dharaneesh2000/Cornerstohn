import React, { useState } from "react"
function Login() {
    const [isAdmin, setIsAdmin] = useState(false)
    const display = () => {
        console.log("Admin Clicked")
        setIsAdmin(true)
    }
    console.log(isAdmin)
    return (
        <form>
            <label>
                Admin:
            </label>&nbsp;&nbsp;
            <button onClick={display}>LOGIN</button><br></br>
            <label>
                Doctor:
            </label>&nbsp;&nbsp;
            <button onClick={display}>LOGIN</button><br></br>
            <label>
                Patient:
            </label>&nbsp;&nbsp;
            <button onClick={display}>LOGIN</button><br></br>
            <label>
                Hospital:
            </label>&nbsp;&nbsp;
            <button onClick={display}>LOGIN</button>
        </form>

    );
}

export default Login;