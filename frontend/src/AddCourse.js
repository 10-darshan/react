import React, { Component } from 'react';
import axios from 'axios';
class AddCourse extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            description:"",
            duration:""
        }
    }
    FormHandle=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleAdd=(event)=>
    {
        event.preventDefault();
        axios.post("/course",this.state)
        .then(response=>{
           alert("successfully added");
        })
        .catch(error=>{
            console.log(error);
        }
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                        <p>CourseName<input type="text" name="courseName"  onChange={this.FormHandle}/></p>
                        <p>CourseDescription<textarea name="courseDescription"  onChange={this.FormHandle}/></p>
                        <p>CourseDuration<input type="number" name="courseDuration"  onChange={this.FormHandle}/></p>
                        <p><input type="submit" value="AddCourse"/></p>

                    </form>
            </div>
        );
    }
}

export default AddCourse;