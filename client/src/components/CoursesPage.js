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
            <h2>Courses</h2>
            <Link to='/course' className='btn btn-success mt-2 mb-5'>Add new course</Link>
            <CourseList courses={ courses } />
        </>
    );
}

export default CoursesPage;
