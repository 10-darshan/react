import React from 'react';
import { NavLink } from 'react-router-dom';

const Error=()=>{
    return (
        <>
        <h1>Error 404 - Oops! Page not found</h1>
        <br/><br/><br/>
        <NavLink to="/"><button>Home</button></NavLink>
        </>
    );
}

export default Error;

