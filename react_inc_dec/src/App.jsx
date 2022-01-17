import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App=()=>{
    let [count, setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>{
        if(count===0)
        alert("Lower limit reached");
        else
        setCount(count-1);
    }
    return (
        <>
        <h1>{count}</h1>
        <Tooltip title="Increment">
        <Button variant="contained" color="primary" onClick={increment}><AddIcon/></Button>
        </Tooltip>
        <Tooltip title="Decrement">
        <Button variant="contained" color="secondary" onClick={decrement}><RemoveIcon/></Button>
        </Tooltip>
        </>
    );
}

export default App;