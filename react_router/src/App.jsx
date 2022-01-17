import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import NavBar from './NavBar';
import User from './User';
import Help from './Help';
import Search from './Search';

const App=()=>{
    const Name=()=><h1>This is contact name page</h1>
    return (
        <>
        <h1>My Website</h1>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={()=><Home name="Home"/>} />
            <Route exact path="/about" render={()=><About name="About"/>} />
            <Route exact path="/Contact" component={Contact} />
            <Route path="/Contact/name" component={Name} />
            <Route exact path="/user/:fname/:lname" component={User} />
            <Route exact path="/help/:number" component={Help} />
            <Route exact path="/search" component={Search} />
            <Route component={Error} />
            {/* rfegveftrv */}
        </Switch>
        </>
    );
}

export default App;


// use render when passing props
// else use component