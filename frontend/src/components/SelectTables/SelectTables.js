import {React, useState} from 'react';
import axios from 'axios';

import './SelectTables.css'

const SelectTables = () => {
    const [table1Status, setTable1Status] = useState("")
    const [table2Status, setTable2Status] = useState("")
    const [table3Status, setTable3Status] = useState("")
    const [table4Status, setTable4Status] = useState("")
    const [table5Status, setTable5Status] = useState("")
    const [table6Status, setTable6Status] = useState("")
    const [table7Status, setTable7Status] = useState("")
    const [table8Status, setTable8Status] = useState("")

    const [table1Select, setTable1Select] = useState("table-option")
    const [table2Select, setTable2Select] = useState("table-option")
    const [table3Select, setTable3Select] = useState("table-option")
    const [table4Select, setTable4Select] = useState("table-option")
    const [table5Select, setTable5Select] = useState("table-option")
    const [table6Select, setTable6Select] = useState("table-option")
    const [table7Select, setTable7Select] = useState("table-option")
    const [table8Select, setTable8Select] = useState("table-option")

    const [selectedTableDetails, setSelectedTableDetails] = useState("")

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

    function handleTableStates(tableNumber) {
        if (tableNumber === 1) {
            if (table1Select !== 'table-selected') {
                setTable1Select('table-selected')
            } else {setTable1Select('table-option')}
        } else if (tableNumber === 2) {
            if (table2Select !== 'table-selected') {
                setTable2Select('table-selected')
            } else {setTable2Select('table-option')}
        } else if (tableNumber === 3) {
            if (table3Select !== 'table-selected') {
                setTable3Select('table-selected')
            } else {setTable3Select('table-option')}
        } else if (tableNumber === 4) {
            if (table4Select !== 'table-selected') {
                setTable4Select('table-selected')
            } else {setTable4Select('table-option')}
        } else if (tableNumber === 5) {
            if (table5Select !== 'table-selected') {
                setTable5Select('table-selected')
            } else {setTable5Select('table-option')}
        } else if (tableNumber === 6) {
            if (table6Select !== 'table-selected') {
                setTable6Select('table-selected')
            } else {setTable6Select('table-option')}
        } else if (tableNumber === 7) {
            if (table7Select !== 'table-selected') {
                setTable7Select('table-selected')
            } else {setTable7Select('table-option')}
        } else {
            if (table8Select !== 'table-selected') {
                setTable8Select('table-selected')
            } else {setTable8Select('table-option')}
        }
    }

    return (
        <div>
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
            <div>Table Details</div>
            <div>
            {selectedTableDetails !== null && (
                <div>
                    {selectedTableDetails.table} holds {selectedTableDetails.peopleSitting} people
                </div>
                )
            }
            </div>
        </div>
        </div>
    )
}

export default SelectTables;