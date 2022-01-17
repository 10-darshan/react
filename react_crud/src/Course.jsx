import React from 'react';
import './course.css'

const Course=(props)=>{
  console.log(props.course.courseDescription)
    return (
        <>
        <div className="heading">
    <h2>{props.courseTitle}</h2>
</div>

<div className="container">
  <form action="/course/addCourse" method="POST">

    <input type="hidden" name="_id" value="{{data._id}}"/>

    <label for="courseName">Course Name</label>
    <input type="text" id="courseName" name="courseName"  required="required" value={props.course.courseName} placeholder="Course Name.."/>

    <label for="courseDuration">Course Duration (in months)</label>
    <input type="number" id="courseDuration" name="courseDuration" required="required" value={props.course.courseDuration} placeholder="Course Duration.."/>

    <label for="courseDescription">Course Description</label>
    <textarea id="courseDescription" name="courseDescription" style={{height:"100px"}} placeholder="Write something about course.." >{props.course.courseDescription}</textarea>

    <input type="submit" value="Submit"/>
    
    </form>
    
  <form action="/course/list"><input type="submit" value="Back" style={{backgroundColor: "red"}}/></form>
</div>
        </>
    );
};

export default Course;