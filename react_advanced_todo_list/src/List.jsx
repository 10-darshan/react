import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const List=(props)=>{
    let [flag,setFlag]=useState(false);
    const underline=()=>{
        if(flag)
        setFlag(false);
        else
        setFlag(true);
    }
    return (
        <div className='todo_style'>
            <span onClick={underline}>
                <DeleteIcon className="fa fa-times" />
            </span>
            <li style={{textDecoration:flag?'line-through':'none'}}>{props.text}</li>
            <span style={{visibility: flag? 'visible' : 'hidden'}}>
            <DeleteForeverIcon className="fa fa-times" onClick={()=>props.onSubmit(props.id)}/>
            </span>
        </div>
    );
}

export default List;