import { useState } from "react";

const App=()=>{
    let [text, changeText]=useState("");
    let [newText, changeNewText]=useState("");
    const onInput=(event)=>changeText(event.target.value);
    const onSubmit=()=>changeNewText(text);
    return (
        <>
        <h1>Hello {text}</h1>
        <input type="text" value={text} placeholder="Enter your name" onChange={onInput}></input>
        <h1>Hello {newText}</h1>
        <button onClick={onSubmit}>Submit</button>
        </>
    );
}
export default App;