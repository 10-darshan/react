import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Updating from './Updating';
import ViewCourseList from './ViewCourseList'
import AddCourse from './AddCourse';
class Links extends Component {
    render()
    {
        return(
            <div>
            <ul  class="nav nav-pills justify-content-center">
                <li class="navbar-brand">
                <Link to="/ViewCourse">ViewCourse</Link>
                </li>
                <li>
                <Link to="/AddCourse">AddCourse</Link>
                </li>
            </ul>
            </div>
        )
    }
}
class  Home extends React.Component{
    render()
    {
        return(

                <Router>
                    <div>
                        <Links/>
                        <Switch>
                            <Route exact path="/ViewCourse" component={ViewCourseList}/>
                            <Route exact path="/AddCourse" component={AddCourse}/>
                            <Route exact path="/Updating/:id" component={Updating}/>
                        </Switch>
                    </div>
                </Router>
        )
    }
}
export default Home;