import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import DateTimePicker from 'react-datetime-picker'

import "react-datepicker/dist/react-datepicker.css";
import './TableQuery.css';

class TableQuery extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        fields: {},
        errors: {},
        date: ""
    }
}

    render() {
        return (
            <div className='tablequery-container'>
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
                            <DateTimePicker selected={this.state.date} onChange={(date_input) => this.setState({date: date_input})} value={this.state.date} />
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
}

export default TableQuery