import React from 'react';
// Import your CSS file
import './login.css'
import HealthConnect from "../Assets/HealthConnect.png";

function Component() {
  return (
    <div style={{ backgroundImage: `url(${HealthConnect})`, backgroundRepeat: "no-repeat" }}>
     
    </div>
  );
}

export { Component };


const Login = () => {
    return (
        <div className="mitya">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Mobile Number" required />
                    <i className='bx bx-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <br />
                    <p style={{ textAlign: 'center' }}>Don't have an account?<a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
