import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

class Signin extends React.Component {
    render() {
        return (
            <div className='signin-container'>
                <div className='signin-title'>Sign-In</div>
                <div>
                    <label for='email' className='signin-input-label'>Email</label>
                    <br />
                    <input type='text' id='email' className='signin-input'/>
                    <br />
                    <label for='password' className='signin-input-label'>Password</label>
                    <br />
                    <input type='text' id='password' className='signin-input'/>
                    <br />
                    <button className='signin-button'>Sign-in</button>
                    <div>
                        <Link to='/createaccount' className='signin-link'>Create an account</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signin;