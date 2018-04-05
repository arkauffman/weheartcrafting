import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => (
    <nav>
        <Link to='/' className='BrandName'>We Heart Crafting</Link>
        <Link to={props.user ? '/logout' : '/login'}>{props.user ? 'Log Out' : 'Log In'}</Link>
    </nav>
    );

export default NavBar;
