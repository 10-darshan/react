import React from 'react';
import ReactDOM from 'react-dom';

var name="sports";
var temp="are";
var date=new Date();
var deadline=new Date();
deadline.setDate(deadline.getDate()+1);
var time=date.toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>Top {`${3+2} ${name} ${temp} ${date.toLocaleDateString()} ${time}`} </h1>
<h2>Date :- {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</h2>
<h2>Time :- {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h2>
<h2>{deadline.toLocaleDateString()}</h2>
    <ul>
      <li>Cricket</li>
      <li>Football</li>
      <li>Volleyball</li>
      <li>Table Tennis</li>
      <li>Badminton</li>
    </ul>
  </>,
  document.getElementById('root')
);