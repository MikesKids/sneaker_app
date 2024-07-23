import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (

        <div className='navbar'>
    <nav>
        <h1>M&M Sneaker App</h1>
        <Link to="/" className='homepage'>Home</Link>
        <Link to="/create">Add Sneaker</Link>
    </nav>
    </div>
    );
};

export default NavBar;