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

    const handleTitleChange = event => {
        const updatedCourse = { ...course, title: event.target.value };
        setCourse(updatedCourse);
    };

    const handleAuthorChange = event => {
        const updatedCourse = { ...course, authorId: event.target.value };
        setCourse(updatedCourse);
    };

    const handleCategoryChange = event => {
        const updatedCourse = { ...course, category: event.target.value };
        setCourse(updatedCourse);
    };

    return (
        <>
            <div className='jumbotron'>
                <h1>Manage Course</h1>
            </div>
            <CourseForm 
                course={ course } 
                onTitleChange={ handleTitleChange } 
                onAuthorChange={ handleAuthorChange }            
                onCategoryChange={ handleCategoryChange }
            />
        </>
    );
};

export default ManageCoursePage;
