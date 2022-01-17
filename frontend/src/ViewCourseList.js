import React, { Component } from 'react';
import ViewCourse from './ViewCourse'
import axios from 'axios'
class ViewCourseList extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            Courses:[]
        };
    }
    componentDidMount(){
        axios.get("course")
        .then(response=>{
            this.setState({Courses:response.data});
            
        })
        .catch(error =>{console.log(error)});
}
    render() {
        var show=this.state.Courses.map(course=>
            <ViewCourse key={course.courseId} id={course.courseId} name={course.courseName} description={course.courseDescription} duration={course.courseDuration}></ViewCourse>);
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                               Description
                            </th>
                            <th>
                                Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {show}
                    </tbody>
                </table>
                {this.state.Courses.courseId}
            </div>
        );
    }
}

export default ViewCourseList;