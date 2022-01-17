import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
        <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
        <NavLink exact activeClassName="active_class" to="/user/Darshan/Singh">User</NavLink>
        <NavLink exact activeClassName="active_class" to="/help/1101-7657897656">Help</NavLink>
        <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
        </>
    );
}

export default NavBar;