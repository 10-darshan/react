import React, { Component } from 'react';
import axios from 'axios';
class Updating extends Component {

    constructor(props)
    {
        super(props);
        this.path=`course/${this.props.match.params._id}`;
        this.state={
        Courses:[
            {
                courseId:"",
                courseName:"",
                courseDescription:"",
                courseDuration:""
            }
        ]
    }
    }
    componentWillMount()
    {
        axios.get(`course/${this.props.match.params._id}`)
        .then(response=>{
            this.setState({Courses:response.data});
            console.log(this.state.Courses);
        })
        .catch(error =>{console.log(error)});
    }
    FormHandle=(event)=>{
        const Course=event.target.name;
        let newCourses=this.state.Courses;
        newCourses[Course]=event.target.value;
        
       this.setState({Courses:newCourses});
    }
    handleUpdate=(event)=>{
        axios.put(this.path,this.state.Courses)
        .then(response=>{
         console.log("done")
        })
        .catch(error=>{
            console.log(error);
        })
        this.props.history.push("/ViewCourse");
        window.location.reload(false);

    }
    render() {
        return (
            <div>
                 <form onSubmit={this.handleUpdate}>
                        <p>CourseName<input type="text" name="courseName" value={this.state.Courses.name} onChange={this.FormHandle}/></p>
                        <p>CourseDescription<textarea name="courseDescription" value={this.state.Courses.description} onChange={this.FormHandle}/></p>
                        <p>CourseDuration<input type="number" name="courseDuration" value={this.state.Courses.duration} onChange={this.FormHandle}/></p>
                        <p><input type="submit" value="Update"/></p>

                    </form>
            </div>
        );
    }
}

export default Updating;