import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to='/' className='Left'>About Us</Link>
                <Link to='/' className='Left'>Contact Us</Link>
                <Link to='/' className='BrandName'>We Heart Crafting</Link>
            </nav>
        </div>
    );
};

export default NavBar;