import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => (
    <nav>
        <Link to='/' className='BrandName'>We Heart Crafting</Link>
        
        <div className='links'>
            <Link to='/'>About Us</Link>
            <Link to={props.user ? '/logout' : '/login'}>{props.user ? 'Log Out' : 'Log In'}</Link>
        </div>
    </nav>
    );

export default NavBar;
