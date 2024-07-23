import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    <nav>
        <h1>M&M Sneaker App</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Add Sneaker</Link>
    </nav>
};

export default Navbar;