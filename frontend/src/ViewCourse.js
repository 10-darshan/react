import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class ViewCourse extends Component {
    Handledelete=event=>
    {
        event.preventDefault();
        var detid=this.props.courseId;
        const url=`course/${detid}`;
        axios.delete(url)
        .then(response=>{
        })
        .catch(error=>{
            console.log(error);
        })
        window.location.reload(false);
        
    }
    render() {
        const path=`/Updating/${this.props.courseId}`;
        return (
                <tr>
                    <td>
                        {this.props.courseId}
                    </td>
                    <td>
                        {this.props.courseName}
                    </td>
                    <td>
                        {this.props.courseDescription}
                    </td>
                    <td>
                        {this.props.courseDuration}
                    </td>
                    <td>
                    <Link class="btn btn-info" to={path}>Update</Link>
                    </td>
                    <td>
                    <button onClick={this.Handledelete}>Delete</button>
                    </td>
                    
                </tr>
        );
    }
}

export default ViewCourse;