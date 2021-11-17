import {React, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './ReservedTable.css';

const ReservedTable = () => {
    const [logInOption, setLogInOption] = useState("");

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

    return (
        <div>
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
    
            <h1>
                Reserved Tables
            </h1>

            <div className='reserved-tables-display'>
                <div className='reserved-tables-date'>11/17/2021</div>
                <div className='table-columns'>
                    Table 1
                </div>
                <div className='table-columns'>
                    Sitting 10
                </div>
            </div>

        </div>
    )
}

export default ReservedTable;