import React from 'react';

const CourseForm = props => {
    return (
        <form className='container'>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <div className='field'>
                    <input 
                        id='title'
                        type='text'
                        value={ props.course.title }
                        onChange={ props.onTitleChange }
                        name='title'
                        className='form-control'
                    />
                </div>
            </div>
            
            <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <div className='field'>
                    <select
                        id='author'
                        value={ props.course.authorId || '' }
                        onChange={ props.onAuthorChange }
                        name='authorId'
                        className='form-control'
                    >
                        <option value='' />
                        <option value='1'>Cory House</option>
                        <option value='2'>Scott Allen</option>
                    </select>
                </div>
            </div>

            <div className='form-group'>
                <label htmlFor='category'>Category</label>
                <div className='field'>
                    <input 
                        id='category'
                        type='text'
                        value={ props.course.category }
                        onChange={ props.onCategoryChange }
                        name='category'
                        className='form-control'
                    />
                </div>
            </div>

            <input type='submit' value='Save' className='btn btn-success mt-4' />
        </form>
    );
};

export default CourseForm;
