import { React, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import { useNavigate, useLocation } from 'react-router-dom';

import Popup from '../Popup/Popup';

import "react-datepicker/dist/react-datepicker.css";
import './TableQuery.css';

const TableQuery1 = () => {
    const [date, setDate] = useState("")
    const [peopleCount, setPeopleCount] = useState("")
    const [logInOption, setLogInOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const navigate = useNavigate();

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

    return (
        <div className='tablequery-container'>

            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="navbar-logo">
                        <a href='http://localhost:3000/' className='navbar-logo-link'>
                            NAME HERE
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
                    <div>
                    Resturant name here
                    </div>

                    <br/>
                    <br/>

                    <div>
                    Sub-body here
                    </div>

                    <br/>

                    <div className='userTableDetails'>
                        <div className='inputLabel'>When?</div>
                        <div className='userTableInput'>
                            <DateTimePicker selected={date} onChange={(e) => setDate(e.target.value)} value={date} />
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
                        <button onClick={togglePopup}>Find Table</button>
                    </div>
                </div>
                <div className='test2'>
                    TEST 2
                </div>
                {isOpen && <Popup 
                    content={<><b>Test</b></>}
                handleClose={togglePopup}
                />}
            </div>
    )
}

export default TableQuery1;