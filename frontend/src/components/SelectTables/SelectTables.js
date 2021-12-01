import {React, useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import axios from 'axios';

import './SelectTables.css'

const SelectTables = () => {
    const [logInOption, setLogInOption] = useState("");

    const [table1Select, setTable1Select] = useState("table-option")
    const [table2Select, setTable2Select] = useState("table-option")
    const [table3Select, setTable3Select] = useState("table-option")
    const [table4Select, setTable4Select] = useState("table-option")
    const [table5Select, setTable5Select] = useState("table-option")
    const [table6Select, setTable6Select] = useState("table-option")
    const [table7Select, setTable7Select] = useState("table-option")
    const [table8Select, setTable8Select] = useState("table-option")

    const [forceUpdate, setForceUpdate] = useState(false);

    const [selectedTableDetails, setSelectedTableDetails] = useState("")
    const [selectedTables, setSelectedTables] = useState([])

    var { state } = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        if (state !== null) {
            const peopleCountInput = state.peopleCount

            const input = {
                peopleCount: state.peopleCount,
                date: state.date
            }

            fetch('http://localhost:5000/selecttables/options/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(input)
            }).then(response => response.json())
            .then(data => {
                const tableOptions = data.tableOptions
                const unavailableTables = data.unavailableTables

                console.log("Table options is", tableOptions)
                console.log("Unavailable tables:", unavailableTables)

                handleTableSize(tableOptions, peopleCountInput)
                handleTableCombinations(tableOptions, peopleCountInput)

                handleUnavailableTables(unavailableTables)
            })
        }
    }, []);

    const displayTableInfo = async (tableNumber) => {
        console.log("The table chosen is table number", tableNumber)
        const tableInput = `Table ${tableNumber}`;

        const response = await fetch("http://localhost:5000/selecttables", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({table: tableInput})
        }).then(response => response.json())
        .then(data => {
            console.log(data)

            setSelectedTableDetails(data)
            handleTableStates(tableNumber)
        })
    }

    function handleTableCombinations(tableOptions, peopleCountInput) {
        for (let i = 0; i < tableOptions.length; i++) {
            var peopleCount = peopleCountInput
            for (let j = 0; j < tableOptions.length; j++) {
                if (peopleCountInput - (tableOptions[i].peopleSitting + tableOptions[j].peopleSitting) === 0) {
                    handleCombinationHelper(i + 1)
                    handleCombinationHelper(j + 1)
                }
            }
        }
    }

    function handleCombinationHelper(tableNumber) {
        if (tableNumber === 1) {
            setTable1Select("table-combination")
        } else if (tableNumber === 2) {
            setTable2Select("table-combination")
        } else if (tableNumber === 3) {
            setTable3Select("table-combination")
        } else if (tableNumber === 4) {
            setTable4Select("table-combination")
        } else if (tableNumber === 5) {
            setTable5Select("table-combination")
        } else if (tableNumber === 6) {
            setTable6Select("table-combination")
        } else if (tableNumber === 7) {
            setTable7Select("table-combination")
        } else {
            setTable8Select("table-combination")
        }
    }

    function handleTableSize(tableOptions, peopleCountInput) {
        if (peopleCountInput > tableOptions[0].peopleSitting) {
            setTable1Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[1].peopleSitting) {
            setTable2Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[2].peopleSitting) {
            setTable3Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[3].peopleSitting) {
            setTable4Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[4].peopleSitting) {
            setTable5Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[5].peopleSitting) {
            setTable6Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[6].peopleSitting) {
            setTable7Select("table-invalid")
        }
        if (peopleCountInput > tableOptions[7].peopleSitting) {
            setTable8Select("table-invalid")
        }
    }

    function handleUnavailableTables(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].table === 'Table 1') {
                setTable1Select('table-invalid')
            } else if (arr[i].table === 'Table 2') {
                setTable2Select('table-invalid')
            } else if (arr[i].table === 'Table 3') {
                setTable3Select('table-invalid')
            } else if (arr[i].table === 'Table 4') {
                setTable4Select('table-invalid')
            } else if (arr[i].table === 'Table 5') {
                setTable5Select('table-invalid')
            } else if (arr[i].table === 'Table 6') {
                setTable6Select('table-invalid')
            } else if (arr[i].table === 'Table 7') {
                setTable7Select('table-invalid')
            } else if (arr[i].table === 'Table 8') {
                setTable8Select('table-invalid')
            }
        }
    }

    function handleTableCart(tableNumber, isAddingTable) {
        var tableCart = selectedTables

        if (isAddingTable) {
            tableCart.push(tableNumber)
            console.log("Array is", selectedTables)
        } else {
            let index = tableCart.indexOf(tableNumber)
            if (index !== -1) {
                tableCart.splice(index, 1)
                console.log("Array is", selectedTables)
            }
        }
        setSelectedTables(tableCart)
        setForceUpdate(!forceUpdate)
    }

    function handleTableStates(tableNumber) {
        var isAddingTable = false
        
        if (tableNumber === 1 && table1Select !== 'table-invalid') {
            if (table1Select !== 'table-selected') {
                setTable1Select('table-selected')
                isAddingTable = true
            } else {setTable1Select('table-option')}
        } else if (tableNumber === 2 && table2Select !== 'table-invalid') {
            if (table2Select !== 'table-selected') {
                setTable2Select('table-selected')
                isAddingTable = true
            } else {setTable2Select('table-option')}
        } else if (tableNumber === 3 && table3Select !== 'table-invalid') {
            if (table3Select !== 'table-selected') {
                setTable3Select('table-selected')
                isAddingTable = true
            } else {setTable3Select('table-option')}
        } else if (tableNumber === 4 && table4Select !== 'table-invalid') {
            if (table4Select !== 'table-selected') {
                setTable4Select('table-selected')
                isAddingTable = true
            } else {setTable4Select('table-option')}
        } else if (tableNumber === 5 && table5Select !== 'table-invalid') {
            if (table5Select !== 'table-selected') {
                setTable5Select('table-selected')
                isAddingTable = true
            } else {setTable5Select('table-option')}
        } else if (tableNumber === 6 && table6Select !== 'table-invalid') {
            if (table6Select !== 'table-selected') {
                setTable6Select('table-selected')
                isAddingTable = true
            } else {setTable6Select('table-option')}
        } else if (tableNumber === 7 && table7Select !== 'table-invalid') {
            if (table7Select !== 'table-selected') {
                setTable7Select('table-selected')
                isAddingTable = true
            } else {setTable7Select('table-option')}
        } else if (table1Select !== 'table-invalid'){
            if (table8Select !== 'table-selected') {
                setTable8Select('table-selected')
                isAddingTable = true
            } else {setTable8Select('table-option')}
        }

        handleTableCart(tableNumber, isAddingTable)
    }

    function submitCart() {
        if (selectedTables.count !== 0) {
            // navigate to the payment page
            navigate("/paymentpage", {
                state: {
                    tables : selectedTables,
                    date: state.date,
                    name: state.name,
                    phoneNum: state.phoneNum,
                    email: state.email,
                    phoneCount: state.phoneCount,
                    isLoggedIn: state.isLoggedIn,
                    firstName: state.firstName
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

        <div className='leftside'>
            <div className='tables-container'>
                <div className='tables-columns'>
                    <div className={table1Select} onClick={() => displayTableInfo(1)}>Table 1</div>
                </div>
                <div className='tables-columns'>
                    <div className={table2Select} onClick={() => displayTableInfo(2)}>Table 2</div>
                </div>
                <div className='tables-columns'>
                    <div className={table3Select} onClick={() => displayTableInfo(3)}>Table 3</div>
                </div>
                <div className='tables-columns'>
                    <div className={table4Select} onClick={() => displayTableInfo(4)}>Table 4</div>
                </div>
                <div className='tables-columns'>
                    <div className={table5Select} onClick={() => displayTableInfo(5)}>Table 5</div>
                </div>
                <div className='tables-columns'>
                    <div className={table6Select} onClick={() => displayTableInfo(6)}>Table 6</div>
                </div>
                <div className='tables-columns'>
                    <div className={table7Select} onClick={() => displayTableInfo(7)}>Table 7</div>
                </div>
                <div className='tables-columns'>
                    <div className={table8Select} onClick={() => displayTableInfo(8)}>Table 8</div>
                </div>
            </div>
        </div>
        <div className='rightside'>
            <div className='table-details'>
                <div className='test-fuck'>
                    <div className='table-details-info'><b className='table-title'>Table Details</b></div>
                    {selectedTableDetails !== null && (
                        <div className='table-details-info'>
                            {selectedTableDetails.table} holds {selectedTableDetails.peopleSitting} people
                        </div>
                        )
                    }
                </div>
            </div>
            <div className='table-details'>
                <b className='table-title'>Tables in Cart:</b>
                {selectedTables.map((table) => 
                    <div className='cart-cell'>Table {table}</div>)}
                
                <br />
                <button onClick={submitCart}>Payment</button>
            </div>
        </div>
        </div>
    )
}

export default SelectTables;