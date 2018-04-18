import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Navbar, NavItem } from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => (
    <Navbar className="nav-style padder">
        <li><Link to="/">Home</Link></li>
        <li><Link to={props.user ? '/logout' : '/login'}>{props.user ? 'Log Out' : 'Log In'}</Link></li>
    </Navbar>
    );

export default NavBar;
