import React, { createContext } from 'react';
import CompB from './CompB';

const Fname=createContext();
const Lname=createContext();
const CompA=()=>{
    return (
    <>
    <Fname.Provider value={'Darshan'}>
        <Lname.Provider value={'Singh'}>
            <CompB/>
        </Lname.Provider>
    </Fname.Provider>
    </>);
}

export default CompA;
export {Fname, Lname};