import { useState } from "react";

const App=()=>{
    let [name, changeName]=useState("");
    let [fullName, changeFullName]=useState("");
    let [password, changePassword]=useState("");
    let [fpassword, changeFpassword]=useState("");

    const InputEvent1=(event)=>changeName(event.target.value);
    const InputEvent2=(event)=>changePassword(event.target.value);

    const Submit=(event)=>{
        event.preventDefault();
        changeFullName(name);
        changeFpassword(password);
    }
    return (
        <>
        <h1>Hello {name}</h1><br/>
        <h2>{fullName}</h2>
        <h2>{fpassword}</h2>
        <form onSubmit={Submit}>
        <input type="text" onChange={InputEvent1} value={name} placeholder="Enter your name"/><br/>
        <input type="password" onChange={InputEvent2} value={password} placeholder="Enter password"/><br/>
        <input type="submit" value="Submit"/>
        </form>
        </>
    );
}

export default App;