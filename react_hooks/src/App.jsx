import { useState } from "react";

const App=()=>{
    //let text="Click Me";
    let [text, changeState]=useState("Click Me 😄");
    const changeText=()=>changeState("Clicked 😢");
    const normalText=()=>changeState("Click Me 😄");
    return (
        <>
    <div className="container" style={{backgroundColor:'black'}}>
    <button onClick={changeText} onDoubleClick={normalText}>{text}</button>
    </div>
    </>
    );
}
export default App;