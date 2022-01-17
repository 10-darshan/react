import React, { useState } from 'react';
import List from './List';

const App=()=>{
    let [element, setElement]=useState("");
    let [list,setList]=useState([]);
    const input=(event)=> setElement(event.target.value);

    const add=()=>{
      setList((oldArray)=>[...oldArray,element]);
      setElement("");
    };
    
    const deleteList=(id)=>{
        setList((oldArray)=>{
            return oldArray.filter((arrElem,index)=>{
                return index!==id;
            });
        });
    };
    return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" onChange={input} value={element} placeholder="Add an Item"/>
            <button disabled={!element} onClick={add}>+</button>
            <ol>
                {list.map((value, index)=>{
                    return <List li={value} id={index} key={index} onSelect={deleteList} />
                })}
            </ol>
        </div>
    </div>
    </>
    );
}
export default App;