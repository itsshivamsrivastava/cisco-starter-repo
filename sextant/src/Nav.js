import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>

                <Link to='/' className='navbar-brand'>Sextant</Link>
                <div className='collapse navbar-collapse' id='navbarText'>

                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link active'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-link active'>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className='nav-link active'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Nav;