import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className='navbar'>
            <nav>
                <div className='navbar-links'>
                    <Link to="/" className='navbar-link'>ℳ﹠ℳ SneakerWatch</Link>
                    <Link to="/sneakers" className='navbar-link'>👟Sneakers👟</Link>
                    <Link to="/sneakers/new" className='navbar-link'>Add Sneaker</Link>
                </div>
                <div className='navbar-right'>
                    <Link to="/profile" className='navbar-link'>Profile</Link>
                    <Link to="/search" className='navbar-link'>Search</Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
