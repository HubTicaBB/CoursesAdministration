import React, { useState } from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = props => {
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });

    const handleChange = ({ target }) => {
        const updatedCourse = { 
            ...course, 
            [target.name]: target.value 
        };
        setCourse(updatedCourse);
    };

    return (
        <>
            <div className='jumbotron'>
                <h1>Manage Course</h1>
            </div>
            <CourseForm 
                course={ course } 
                onChange={ handleChange }
            />
        </>
    );
};

export default ManageCoursePage;
