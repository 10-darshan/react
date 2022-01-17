import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const User=()=>{
    const {fname, lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return (
        <>
        <h1>{fname} {lname}</h1>
        Current Location : {location.pathname} <br/>
        {location.pathname===`/user/Darshan/Singh`? 
        <>
        <button onClick={()=>history.goBack()}>Back</button>
        <button onClick={()=>history.push('/')}>Home</button>
        </>
        :null}
        </>
    );
}

export default User;