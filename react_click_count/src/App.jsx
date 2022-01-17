const { useState } = require("react");

const App=()=>{
    //const state=useState();
    let [time, setTime]=useState(new Date().toLocaleTimeString());
    let [count, setCount]=useState(0);
    const timeChange=()=>setTime(new Date().toLocaleTimeString());
    const incr=()=>setCount(count+1);
    setInterval(timeChange,1000);
    return (
        <>
        <div className="container">
        <h1>{count}</h1>
        <button className="click" onClick={incr}>Click</button>
        <h2>{time}</h2>
        <button className="time" onClick={timeChange}>Time</button>
        </div>
        
        </>
    )
}

export default App;        