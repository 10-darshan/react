import React from 'react';
import {Fname, Lname} from './CompA';
import CompD from './CompD'

const CompC=()=>{
    return (
    <>
    <Fname.Consumer>
        {(fname)=>{
            return (
                <Lname.Consumer>
                    {(lname)=>{
                        return (
                            <>
                            <h1>Welcome {fname} {lname}</h1>
                            <CompD/>
                            </>
                        );
                    }}
                </Lname.Consumer>
            );
        }}
    </Fname.Consumer>
    </>);
}

export default CompC;