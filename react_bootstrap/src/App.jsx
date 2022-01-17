import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
    return (
    <>
    <h1 className="text-center text-capitalize mt-5">Welcome</h1>
    <button className="btn btn-success">Click</button>
    <div class="btn-group">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <button type="button" class="btn btn-primary">Sony</button>
  </div>
  <button className="alert-primary text-danger">Touch</button>
    </>
    );
}

export default App;