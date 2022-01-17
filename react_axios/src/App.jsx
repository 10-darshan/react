import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App=()=>{
    let [num, setNum]=useState(1);
    let [name, setName]=useState('');
    let [moves, setMoves]=useState();
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            //console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        };
        getData();
    });
    return (
        <>
        <h1><span style={{color:'red'}}>{num}  </span>selected</h1>
        <h1><span style={{color:'red'}}>{name} </span></h1>
        <h1><span style={{color:'red'}}>{moves}</span></h1>
        <select value={num} onChange={(event)=>setNum(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
        </select>
        </>
    );
}

export default App;