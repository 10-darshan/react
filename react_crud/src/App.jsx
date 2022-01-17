import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';
import './index.css'
import {Switch, Route, Redirect, NavLink, useHistory} from 'react-router-dom';
import Course from './Course';

const App = () => {
    let [course, setCourse] = useState([
        {
            courseId: 12345,
            courseName: 'hjh vj',
            courseDuration: 5,
            courseDescription: 'fj gjkhm'
        }
    ]);
    useEffect(() => {
        async function getData() {
            const result = await axios.get(`http://localhost:9000/course/`);
            setCourse(result.data);
        }
        getData();
    })
    const history= useHistory();
    return (
        <>
        <Switch>
            <Route exact path="/addCourse" render={()=><Course courseTitle="Add Course" course={course}/>}/>
        </Switch>
            <div className="div1">
                <h2>COURSES</h2>        
            </div>

            <div className="div2">
                <table className="content-table">
                    <thead>
                        <tr>
                            <td>Course Id</td>
                            <td>Course Name</td>
                            <td>Course Duration</td>
                            <td>Course Description</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {course.map((value, index) => <List key={value._id} course={value} />)}
                    </tbody>
                </table>
            </div>

            <div className="div1">
                {/* <form action="/course/add">
                    <input type="submit" value="Add" style={{}} />
                </form> */}
                {/* <button onClick={()=><Redirect to="/addCourse"/>}>Add</button> */}
                 <button onClick={()=>history.push('/addCourse')}>Add</button>
            </div>
            
        </>
    )
}

export default App;

