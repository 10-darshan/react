import React from 'react';
import ReactDOM from 'react-dom';
import xyz,{school,showName,showSchool} from './App';
import * as biodata from './App';

ReactDOM.render(
    <>
    <h1>Biodata</h1>
    <h2>{xyz}</h2>
    <h2>{school}</h2>
    <h2>{showSchool()}</h2>
    <h2>{showName()}</h2>
    <h2>{biodata.default}</h2>
    <h2>{biodata.showSchool()}</h2>
    </>,document.getElementById('root')
);