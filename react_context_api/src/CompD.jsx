import React, { useContext } from 'react';
import {Fname, Lname} from './CompA';

const CompD=()=>{
    const fname=useContext(Fname);
    const lname=useContext(Lname);
    return (
        <h2>Welcome {fname} {lname}</h2>
    );
}

export default CompD;