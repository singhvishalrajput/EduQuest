import React from 'react';
import './SignUp.css'; // Import the CSS file

const SignUp = () => {
    return (
        <div className="container_main">
            <h1>Create Your Account</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username   :</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email                              :</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password           :</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="login.html">Log In</a></p>
        </div>
    );
}

export default SignUp;
