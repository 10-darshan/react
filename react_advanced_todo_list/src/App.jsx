import React, { useState } from 'react';
import List from './List';

const App=()=>{
    let [item,setItem]=useState('');
    let [list,setList]=useState([]);
    const onInput=(event)=>{
        setItem(event.target.value);
    }
    const onAdd=()=>{
        setList((oldList)=>[...oldList,item]);
        setItem('');
    }
    const deleteItem=(id)=>{
        setList((oldArray)=>oldArray.filter((elem,index)=>index!==id));
    }
    return (
        <>
        <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>Todo List</h1>
            <br/>
            <input type="text" onChange={onInput} value={item} placeholder="Add an Item"/>
            <button disabled={!item} onClick={onAdd}>+</button>
            <ol>
                {list.map((value,index)=><List text={value} id={index} key={index} onSubmit={deleteItem}/>)}
            </ol>
            </div>
        </div>
        </>
    );
}

export default App;