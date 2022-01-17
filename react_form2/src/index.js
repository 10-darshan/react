import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>,document.getElementById('root'));

// Spread Operator -
const fullName=['Darshan', 'Singh', 'Rawat'];
const bioData=[1,...fullName,5000,'male'];
//console.log(fullName);
//console.log(bioData);

const merge=[...fullName,...bioData];
//console.log(merge);

const [first,...remaining]=bioData;
//console.log(first);
//console.log(remaining);

const name={
    firstName:'Darshan',
    middleName:'Singh',
    lastName:'Rawat'
};
const employee={
    id:110,
    ...name,
    gender:'male',
    salary:'1000000'
};
////console.log(employee);