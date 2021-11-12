import { Link } from 'react-router-dom';
import React, { useState }  from 'react';
import './Signin.css';

//Signin Box
class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSigninOpen: true,
            isRegisterOpen: false
        };
    }

    submitSignin(e) {}
    
    render() {
        return (
            <div className = "inner-container">
                <div className = "header">
                    <h1> Sign In</h1>
                </div>
                
                <div className = "box">
                    <div className = "input-group" >
                        <label htmlFor = "username">Username</label>
                        <input
                            type = "text"
                            name = "username"
                            className = "login-input"
                            placeholder = "Username" />
                    </div>

                    <div className = "input-group">
                        <label htmlFor = "password">Password</label>
                        <input
                            type = "text"
                            name = "username"
                            className = "login-input"
                            placeholder = "Password" />
                    </div>

                    <button
                        type = "button"
                        className = "login-btn"
                        onClick = {this
                        .submitSignin
                        .bind(this)}>Login</button>

                    <div>
                        <Link to='/createaccount' className='signin-link'>Create an account</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;