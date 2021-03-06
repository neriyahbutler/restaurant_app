import React, { useState, useContext, Link } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Signin.css';

const Signin1 = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [token, setToken] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState("")
    
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    function handleValidation() {
        if (email === "" || password === "") {
            return false
        }
        return true
    }

    function submitSignIn() {
        if (handleValidation()) {
            console.log("Validation passed!")
            const accountInput = {
                username: email,
                password: password
            }

            fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountInput)
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            setToken(data.token)
            if (data.token !== "") {
                navigate("/", {state: {
                    token: data.token,
                    firstName: data.firstName,
                    isLoggedIn: true,
                    email: email
                }})

                navigate("/reservedtable", {state: {
                    token: data.token,
                    firstName: data.firstName,
                    isLoggedIn: true,
                    email: email
                }})
                setIsLoggedIn(true)
            } else {
                setPasswordError("Invalid email/password")
            }
        })
        } else {
            if (email === "") {setEmailError("Please provide your email")}
            else {setEmailError("")}
            if (password === "") {setPasswordError("Please provide your password")}
            else {setPasswordError("")}
            console.log("Validation failed!")
        }
    }

    return (
        <div className = "inner-container">
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="navbar-logo">
                        <a href='http://localhost:3000/' className='navbar-logo-link'>
                        GROUP 8 RESTAURANT
                        </a>
                    </div>
                    <div className='nav-menu'>
                        {false !== true && (
                            <a href='http://localhost:3000/signin' className='nav-item'>
                            Sign In
                            </a>
                        )}

                        <a href='http://localhost:3000/reservedtable' className='nav-item'>Reserved Table</a>
                    </div>
                </div>
            </nav>

            
            <form onSubmit={submitSignIn}>
                <div className="signin-box">
                    <div className = "signin-header">
                        Sign In
                    </div>

                    <div className = "input-group" >
                        <label className='form-input' htmlFor = "username">Email</label>
                        <input
                            type = "text"
                            name = "username"
                            className = "login-input"
                            placeholder = "Username"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='signin-error'>{emailError}</div>
                    {/* <br /> */}

                    <div className = "input-group">
                        <label className='form-input' htmlFor = "password">Password</label>
                        <input
                            type = "text"
                            name = "username"
                            className = "login-input"
                            placeholder = "Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='signin-error'>{passwordError}</div>
                    <br />
                    <button
                        type = "button"
                        value='submit'
                        onClick = {submitSignIn}
                        className = "login-btn">Login</button>
                    <div>
                        {/* <Link to='/createaccount' className='signin-link'>Create an account</Link> */}
                        <a href='http://localhost:3000/createaccount' className='signin-link'>Create an account</a>
                    </div>
                </div>
            </form>
        </div>  
    )
}

export default Signin1