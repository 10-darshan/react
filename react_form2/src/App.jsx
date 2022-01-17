const { useState } = require("react");

const App=()=>{
    let [detail,setDetail]=useState({
        username:"",
        email:"",
        password:""
    });
    console.log(detail);

    const inputEvent=(event)=>{
        //const value=event.target.value;
        //const name=event.target.name;
        const {value, name}=event.target;
        setDetail((preValue)=>{
            return {
                ...preValue,
                [name]:value
            }
            /*if(name==='username') {
                return {
                    username:value,
                    email:preValue.email,
                    password:preValue.password
                };
            }
            else if(name==='email') {
                return {
                    username:preValue.username,
                    email:value,
                    password:preValue.password
                };
            }
            else{
                return {
                    username:preValue.username,
                    email:preValue.email,
                    password:value
                };
            }*/
        });
    }

    const submit=(event)=>{
        event.preventDefault();
        alert("form submitted");
    }
    return (
        <>
        <h1>Hello {detail.username} {detail.email} {detail.password}</h1>
        <form onSubmit={submit}>
        <input type="text" onChange={inputEvent} name="username" value={detail.username} placeholder="Enter you name"/><br/>
        <input type="email" onChange={inputEvent} name="email" value={detail.email} placeholder="Enter you email"/><br/>
        <input type="password" onChange={inputEvent} name="password" value={detail.password} placeholder="Enter you password"/><br/>
        <input type="submit" value="Submit"/>
        </form>
        </>
    );
}
export default App;