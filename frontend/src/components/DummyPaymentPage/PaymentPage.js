import {React, useState} from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

const PaymentPage = () => {
    const [logInOption, setLogInOption] = useState("")
    const [paymentStatus, setPaymentStatus] = useState("")
    
    var { state } = useLocation()
    const navigate = useNavigate()
    
    console.log(state)


    function handleState() {
        if (state !== null)
            {
                navigate("/", {
                    state: {
                        token: state.token,
                        firstName: state.firstName,
                        isLoggedIn: state.isLoggedIn,
                        email: state.email
                    }
                })
            }
    }

    function handleStateHistory() {
        if (state !== null)
            {
                navigate("/reservedtable", {
                    state: {
                        token: state.token,
                        firstName: state.firstName,
                        isLoggedIn: state.isLoggedIn,
                        email: state.email
                    }
                })
            } 
    }

    function changeLoggedInStatus() {
        console.log(`Status was ${state.isLoggedIn}`)
        if (state !== null) {
            if (state.isLoggedIn === true) {
                state.isLoggedIn = false
                state.email = ""
                setLogInOption("Sign In")
            }
            else {
                state.isLoggedIn = true
                setLogInOption("Sign Out")
            }
        }
        console.log(`Status is now ${state.isLoggedIn}`)
    }

    const submitPayment = async () => {
        const input = {
            email: state.email,
            date: state.date,
            tables: state.tables
        }

        const response = await fetch("http://localhost:5000/paymentpage/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        }).then(response => response.json())
        .then(data => {
            console.log("Done")
            setPaymentStatus("Payment was successful!")
        })
    }

    return (
        <div className='paymentPage-container'>
            <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="navbar-logo">
                        <a href='http://localhost:3000/' className='navbar-logo-link' onClick={handleState}>
                        GROUP 8 RESTAURANT                        </a>
                    </div>
                    <div className='nav-menu'>
                        { state !== null && (
                            state.isLoggedIn === true && (
                            <div className='nav-item' onClick={changeLoggedInStatus}>
                                Sign Out
                            </div>
                            )
                        )}

                        { state !== null && (
                            state.isLoggedIn !== true && (
                                <a href='http://localhost:3000/signin' className='nav-item'>
                                    Sign In
                                </a>
                            )
                        )}

                        {state === null && (
                            <a href='http://localhost:3000/signin' className='nav-item'>
                            Sign In
                            </a>
                        )}
    
                        <a href='http://localhost:3000/reservedtable' className='nav-item' onClick={handleStateHistory}>Reserved Table</a>
                    </div>
                </div>
            </nav>

            {state !== null && (
                    state.isLoggedIn === true && (
                        <div>
                            Welcome, {state.firstName}!
                        </div>
                    )
                )
                }
            
            
            PAYMENT PAGE!

            <br />

            {paymentStatus}

            <br />
            
            <button onClick={submitPayment}>Submit Payment</button>
        </div>
    </div>
    )
}

export default PaymentPage;