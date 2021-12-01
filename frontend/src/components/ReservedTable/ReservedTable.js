import {React, useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import '../Navbar/Navbar.css';
import './ReservedTable.css';

const ReservedTable = () => {
    const [logInOption, setLogInOption] = useState("");
    const [userData, setUserData] = useState("")
    const [renderBool, setRenderBool] = useState(false);
    const [table, setTable] = useState({name: 'Test', seated: 0})

    var generated_html = [];
    const navigate = useNavigate();
 
    var { state } = useLocation()
    console.log(state)

    const loadData = async () => {
        if (state !== null && generated_html.length === 0) {
            const input = {
                email: state.email
            }

            const response = await fetch("http://localhost:5000/reservedtable", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input)
            }).then(response => response.json())
            .then(data => {
                console.log("Data value =", data)
                if (data !== []) {
                    setUserData(data[0])
                    console.log("Data[0] value =", data[0])
                }
            })
        } else {console.log("Boolean failed")}
    }

    useEffect(() => {
        if (renderBool === false)
        {
            console.log("Loaded")
            loadData()
            setRenderBool(true)
        }
    })

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

    function changeLoggedInStatus() {
        console.log("userData is equal to", userData)
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

    const handleTable = (e) => {
        e.preventDefault();
        if (userData !== "") {
            setTable({
                ...table,
                name: userData.email,
                seated: 10
            });
        }
    };

    return (
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

            {state !== null && (
                    state.isLoggedIn === false && (
                        <div>
                            Please login to see your history
                        </div>
                    )
                )
            }

            {state === null && (
                        <div>
                            Please login to see your history
                        </div>
                )
            }

            <div className='reserved-tables-display'>
                <div className='reserved-tables-title'>Reserved Tables</div>

                <div>
                    <div className='table-columns-title'>Date</div>
                    <div className='table-columns-title'>Table</div>
                    <div className='table-columns-title'>People Sitting</div>
                </div>

                {userData !== "" && (
                    state !== null && (
                        state.isLoggedIn === true && (
                            (userData.reserved_tables.map((table_dates) => (
                            <div className='reserved-tables-date'>{table_dates.date}</div>          
                                && (table_dates.tables.map((table_obj) => (
                                    <div>
                                        <div className='table-columns'>{table_dates.date}</div>
                                        <div className='table-columns'>{table_obj.table}</div>
                                        <div className='table-columns'>{table_obj.peopleSitting}</div>
                                    </div>
                                )))
                        )))
                    )))
                }
                {userData === "" && (
                    <div>
                    <div className='table-columns'>None</div>
                    <div className='table-columns'>None</div>
                    <div className='table-columns'>None</div>
                </div>
                )}
                {state !== null && (
                    state.isLoggedIn === false && (
                        <div>
                            <div className='table-columns'>None</div>
                            <div className='table-columns'>None</div>
                            <div className='table-columns'>None</div>
                        </div>
                ))}

                <button className='history-table-button' onClick={handleTable}>Re-Render</button>
            </div>
        </div>
    )
}

export default ReservedTable;