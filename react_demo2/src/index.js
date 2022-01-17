import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var name = "Darshan";
var heading = {
  color: 'rgb(0, 0, 0)',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px blue',
  margin: '50px 0px',
  fontFamily: "'Josefin Sans', sans-serif"
}

ReactDOM.render(
  <>
    <h1 style={heading} contentEditable='true'>{name}'s Photo Gallery</h1>
    <div className="image">
      <img src="https://picsum.photos/200" alt="Random " />
    </div>
    <div className="image">
      <img src="https://picsum.photos/200/300" alt="Random " />
      <img src="https://picsum.photos/200/500" alt="Random " />
    </div>
    <div className="image">
      <img src="https://picsum.photos/300/500" alt="Random " />
      <img src="https://picsum.photos/400/500" alt="Random " />
      <img src="https://picsum.photos/200/900" alt="Random " />
    </div>
    <div className="image">
      <img src="https://picsum.photos/450/500" alt="Random " />
      <img src="https://picsum.photos/200/320" alt="Random " />
    </div>
    <div className="image">
      <img src="https://picsum.photos/100/350" alt="Random " />

    </div>
  </>,
  document.getElementById('root')
);
