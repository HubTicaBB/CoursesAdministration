import React from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = props => {
    return (
        <>
            <div className='jumbotron'>
                <h1>Manage Course</h1>
            </div>
            <CourseForm />
        </>
    );
};

export default ManageCoursePage;
