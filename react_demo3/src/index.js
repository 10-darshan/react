import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var heading={
  textAlign: 'center',
  fontWeight: 'bold'
};
var css={};
var today=new Date(2014,4,17,14);
var hours=today.getHours();
var greeting;
if(hours<12){
  greeting='Good Morning';
  css.color='orange';
}
else if(hours>=12 && hours<19){
  greeting='Good Afternoon';
  css.color='green';
}
else{
  greeting='Good Night';
  css.color='red';
}

ReactDOM.render(
  <>
  <h2 style={heading}>Hello <span style={css}>{greeting}</span></h2>
  </>,
  document.getElementById('root')
);
