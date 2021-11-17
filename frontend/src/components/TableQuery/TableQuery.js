import { React, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import { useLocation } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import './TableQuery.css';

const TableQuery1 = () => {
    const [date, setDate] = useState("")
    const [peopleCount, setPeopleCount] = useState("")
    const [logInOption, setLogInOption] = useState("");

    // var logInOption = "Sign In"
    var { state } = useLocation()
    console.log(state)
    
    // setLogInOption("Sign In")

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
    
                        
                        <a href='http://localhost:3000/reservedtable' className='nav-item'>Reserved Table</a>
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
                        <button>Find Table</button>
                    </div>
                </div>
                <div className='test2'>
                    TEST 2
                </div>
            </div>
    )
}

export default TableQuery1;