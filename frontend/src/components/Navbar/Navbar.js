import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="navbar-logo">
                        <Link to='/' className='navbar-logo-link'>
                            NAME HERE
                        </Link>
                    </div>
    
                    <div className='nav-menu'>
                        <Link to='/signin' className='nav-item'>Sign In</Link>
                        <Link to='/reservedtable' className='nav-item'>Reserved Table</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

// const Navbar = () => {
//     return (
//         <nav className='navbar'>
//             <div className='navbar-container'>
//                 <div className="navbar-logo">
//                     NAME HERE
//                 </div>

//                 <div className='nav-menu'>
//                     <Link to='/signin' className='nav-item'>Sign In</Link>
//                     <Link to='/reservedtable' className='nav-item'>Reserved Table</Link>
//                 </div>
//             </div>
//         </nav>
//     )
// };

export default Navbar;