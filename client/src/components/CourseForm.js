import React from 'react';
import TextInput from './common/TextInput';

const CourseForm = props => {
    return (        
        <form className='container'>
            <TextInput 
                id='title'
                value={ props.course.title }
                onChange={ props.onChange }
                name='title'
                label='Title'                
            />
            
            <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <div className='field'>
                    <select
                        id='author'
                        value={ props.course.authorId || '' }
                        onChange={ props.onChange }
                        name='authorId'
                        className='form-control'
                    >
                        <option value='' />
                        <option value='1'>Cory House</option>
                        <option value='2'>Scott Allen</option>
                    </select>
                </div>
            </div>

            <TextInput 
                id='category'
                value={ props.course.category }
                onChange={ props.onChange }
                name='category'
                label='Category'
            />

            <input type='submit' value='Save' className='btn btn-success mt-4' />
        </form>
    );
};

export default CourseForm;
