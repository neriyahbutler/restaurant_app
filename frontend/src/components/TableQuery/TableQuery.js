import { React, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import { useNavigate, useLocation } from 'react-router-dom';

import Popup from '../Popup/Popup';

import "../Navbar/Navbar.css"
import "react-datepicker/dist/react-datepicker.css";
import './TableQuery.css';

const TableQuery1 = () => {
    const [date, setDate] = useState("");
    const [peopleCount, setPeopleCount] = useState("");
    const [logInOption, setLogInOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isHoliday, setIsHoliday] = useState(false)

    const navigate = useNavigate();

    const togglePopup = () => {
        if (isOpen === false) {loadHoliday()}
        if (isHoliday === true) {
            console.log("Date chosen is a holiday")
            setIsOpen(true);
        } else {
            setIsOpen(false);
            navigate('/selecttables/')
        }
    }

    const toggleClose = () => {
        setIsOpen(false)
        navigate('/selecttables/')
        // navigate('/createaccount')
        // use this to navigate to the page where you select the table u want
    }

    var { state } = useLocation()
    console.log(state)
    
    function changeLoggedInStatus() {
        console.log(`Status was ${state.isLoggedIn}`)
        if (state !== null) {
            if (state.isLoggedIn === true) {
                state.isLoggedIn = false
                setLogInOption("Sign In")
            }
            else {
                state.isLoggedIn = true
                setLogInOption("Sign Out")
            }
        }
        console.log(`Status is now ${state.isLoggedIn}`)
    }

    function handleState() {
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

    const loadHoliday = async () => {
        if (date !== "") {
            const dayInput = {
                date: date
            }

            const response = await fetch('http://localhost:5000/tablequery/holidaycheck', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dayInput)
            }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.isHoliday === true) {
                    console.log("Setting isHoliday to true")
                    setIsHoliday(true)
                } else {
                    console.log("Setting isHoliday to false")
                    setIsHoliday(false)
                }
            })
        }
    } 

    return (
        <div className='tablequery-container'>

            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="navbar-logo">
                        <a href='http://localhost:3000/' className='navbar-logo-link'>
                            GROUP 8 RESTAURANT
                        </a>
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
    
                        
                        <a href='http://localhost:3000/reservedtable' className='nav-item' onClick={handleState}>Reserved Table</a>
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

                <div className='test1'>
                    <div className='restaurant-title'>
                    Group 8's Restaurant
                    </div>

                    <br/>
                    <br/>

                    <div className='restaurant-subbody'>
                    What kind of table are you looking to reserve?
                    </div>

                    <br/>

                    <div className='userTableDetails'>
                        <div className='inputLabel'>When?</div>
                        <div className='userTableInput'>
                            <DateTimePicker selected={date} onChange={(e) => setDate(e)} value={date} />
                        </div>
                    </div>

                    <br/>

                    <div className='userTableDetails'>
                        <div className='inputLabel'>How many?</div>
                        <div className='userTableInput'>
                            <input type='text' className='userTableInputField'></input>
                        </div>
                    </div>

                    <div className='userTableButton'>
                        <button className='tableQueryButton' onClick={togglePopup}>Find Table</button>
                    </div>
                </div>
                <div className='test2'>
                    
                </div>

                {isOpen && <Popup 
                    content={<>
                        <b>The date that you have chosen is a holiday. At the payment page, you will be charged an extra fee of $4.20.</b>
                    </>}
                handleClose={toggleClose}
                />}
            </div>
    )
}

export default TableQuery1;