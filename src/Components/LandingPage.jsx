import React from "react";
import "../Components/LandingPage.css";
function LandingPage() {

    const handleLogin = (event) => {
        
        alert('Login Sucess');
       
    }
    return (
       <div className="container-fluid login form">
        <h1>Login</h1>
        <form className="login"action={handleLogin} method="POST">
         <label htmlFor="username">Username</label>
         <input type="text" name="username" id="username" required/>
            <label htmlFor="password">Password</label>
         <input type="password" name="password" id="password" required/>
            <button className="subtn" type="submit">Login</button>
        </form>
       </div>
    );
}
export default LandingPage;