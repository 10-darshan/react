import React from 'react';
import axios from 'axios';

const List = (props) => {
    return (
        <>
            <tr>
                <td> {props.course.courseId} </td>
                <td> {props.course.courseName} </td>
                <td> {props.course.courseDuration} </td>
                <td> {props.course.courseDescription} </td>
                <td> <button>
                    <a href="/course/edit/{{this._id}}">
                        Edit
                    </a>
                </button>
                    <button style={{ backgroundColor: "red" }} onClick={()=>axios.delete(`http://localhost:9000/course/${props.course._id}`)}>
                        <a href="/course/delete/{{this._id}}">Delete</a>
                    </button></td>
            </tr>
        </>
    );
}

export default List;