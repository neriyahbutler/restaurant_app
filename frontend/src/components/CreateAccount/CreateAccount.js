import React from 'react';
import './CreateAccount.css';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields : {},
            errors: {}
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    handleValidation() {
        
    }

    accountSubmit(e) {
        e.preventDefault();

        console.log(this.state.fields)
    }

    render() {
        return (
            <div className='createaccount-container'>
                <div className='createaccount-title'>Create Account</div>
                <form onSubmit={this.accountSubmit.bind(this)}>
                    <div className='createaccount-row'>
                        <div className='createaccount-row1'>
                            <label for='firstName' className='createaccount-input'>First Name</label>
                            <label for='lastName' className='createaccount-input'>Last Name</label>
                        </div>
                        <div className='createaccount-row1'>
                            <input type='text' id='firstName' className='createaccount-input' onChange={this.handleChange.bind(this, "firstName")}></input>
                            <input type='text' id='lastName' className='createaccount-input' onChange={this.handleChange.bind(this, "lastName")}></input>
                        </div>
                    </div>
                    <div className='createaccount-row'>
                        <label for='phoneNumber' className='createaccount-input'>Phone Number</label>
                        <label for='email' className='createaccount-input'>Email Address</label>

                        <input type='text' id='phoneNumber' className='createaccount-input' onChange={this.handleChange.bind(this, "phoneNumber")}></input>
                        <input type='text' id='email' className='createaccount-input' onChange={this.handleChange.bind(this, "email")}></input>
                    </div>
                    <div className='createaccount-row'>
                        <label for='password' className='createaccount-input'>Create Password</label>
                        <input type='text' id='password' className='createaccount-input' onChange={this.handleChange.bind(this, "password")}></input>
                    </div>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}

export default CreateAccount;