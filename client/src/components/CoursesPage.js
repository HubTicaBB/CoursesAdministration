import React, { useState, useEffect } from 'react';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(data => setCourses(data));
    }, [])

    return (
        <>
            <div className='jumbotron'>
                <h1>Courses</h1>
                <Link to='/course' className='btn btn-success mt-2'>Add new course</Link>
            </div>
            <CourseList courses={ courses } />
        </>
    );
}

export default CoursesPage;
