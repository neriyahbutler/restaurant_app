import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar1 = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className="navbar-logo">
                    <Link to='/' className='navbar-logo-link'>
                        NAME HERE
                    </Link>
                </div>
                <div className='nav-menu'>
                    {false !== true && (
                        <Link to='/signin' className='nav-item'>
                        Sign In
                        </Link>
                    )}
                    <Link to='/reservedtable' className='nav-item'>Reserved Table</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar1;