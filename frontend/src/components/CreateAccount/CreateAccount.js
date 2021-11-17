import React from 'react';
import './CreateAccount.css';
import axios from 'axios';

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
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        
        if(!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "Please enter your first name"
        }

        if(!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "Please enter your last name"
        }

        if(!fields["phoneNumber"]) {
            formIsValid = false;
            errors["phoneNumber"] = "Please enter your phone number"
        }

        if(!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email"
        }

        if(!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password"
        }

        this.setState({errors});
        return formIsValid
    }

    accountSubmit(e) {
        e.preventDefault();
        console.log(this.state.fields)

        if (this.handleValidation() === true) {

            const formInput = {
                firstName: this.state.fields["firstName"],
                lastName: this.state.fields["lastName"],
                phoneNumber: this.state.fields["phoneNumber"],
                email: this.state.fields["email"],
                password: this.state.fields["password"]
            }

            axios.post("http://localhost:5000/createaccount/newaccount/", formInput)
        } else { console.log("Failed validation")}
    }

    render() {
        return (
            <div className='createaccount-container'>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <div className="navbar-logo">
                            <a href='http://localhost:3000/' className='navbar-logo-link'>
                                NAME HERE
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

                <div className='createaccount-title'>Create Account</div>
                <form onSubmit={this.accountSubmit.bind(this)}>

                    <div className='createaccount-row'>
                        <div className='createaccount-row1'>
                            <label for='firstName' className='createaccount-input'>
                                <div className='input-label'>
                                    First Name
                                </div>
                            </label>
                            <label for='lastName' className='createaccount-input'>
                                <div className='input-label'>
                                    Last Name
                                </div>
                            </label>
                        </div>
                        <div className='createaccount-row1'>
                            <div className='input-column'>
                                <div className='input-label'>
                                    <input type='text' id='firstName' className='createaccount-input' onChange={this.handleChange.bind(this, "firstName")}></input>
                                </div>
                            </div>
                            <div className='input-column'>
                                <input type='text' id='lastName' className='createaccount-input' onChange={this.handleChange.bind(this, "lastName")}></input>
                            </div>
                        </div>
                        <div className='createaccount-row1'>
                            <div className='input-column'>
                                <div className='input-error' id='error_firstName'>
                                    {this.state.errors["firstName"]}    
                                </div>
                                <div className='input-error' id='error_lastName'>
                                    {this.state.errors["lastName"]}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='createaccount-row'>
                        <div className='createaccount-row1'>
                            <label for='phoneNumber' className='createaccount-input'>
                                <div className='input-label'>
                                    Phone Number
                                </div>
                            </label>
                            <label for='email' className='createaccount-input'>
                                <div className='input-label'>
                                    Email Address
                                </div>
                            </label>
                        </div>

                        <div className='createaccount-row1'>
                            <div className='input-column'>
                                <div className='input-label'>
                                    <input type='text' id='phoneNumber' className='createaccount-input' onChange={this.handleChange.bind(this, "phoneNumber")}></input>
                                </div>
                            </div>
                            <div className='input-column'>
                                <input type='text' id='email' className='createaccount-input' onChange={this.handleChange.bind(this, "email")}></input>
                            </div>
                        </div>

                        <div className='createaccount-row1'>
                            <div className='input-column'>
                                <div className='input-error' id='error_phoneNumber'>
                                    {this.state.errors["phoneNumber"]}
                                </div>
                                <div className='input-error' id='error_email'>
                                    {this.state.errors["email"]}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='createaccount-row1'>
                        <div className='input-column'>
                            <label for='password' className='createaccount-input'>
                                <div className='input-label'>
                                    Create Password
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className='createaccount-row1'>
                        <div className='input-column'>
                            <input type='text' id='password' className='createaccount-input' onChange={this.handleChange.bind(this, "password")}></input>
                        </div>
                    </div>

                    <div className='createaccount-row1'>
                        <div className='input-column'>
                            <div className='input-error' id='error_password'>
                                {this.state.errors["password"]}
                            </div>
                        </div>
                    </div>

                    <button value='submit'>Create Account</button>
                </form>
            </div>
        )
    }
}

export default CreateAccount;