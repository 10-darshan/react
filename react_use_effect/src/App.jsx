import React, { useEffect, useState } from 'react';

const App=()=>{
    let [num, setNum]=useState(0);
    let [nums, setNums]=useState(0);
    useEffect(()=>{
        //alert("Hello");
        //document.getElementsByTagName('title')[0].innerHTML="clicked "+num+" times";
        document.title=`clicked ${num} times`;
    },[num]);
    return (
        <>
        <button onClick={()=>setNum(num+1)}>Click {num}</button><br/>
        <button onClick={()=>setNums(nums+1)}>Click {nums}</button>
        </>
    );
}

export default App;