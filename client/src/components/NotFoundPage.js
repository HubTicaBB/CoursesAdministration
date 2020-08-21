import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='jumbotron'>
            <h3 className='text-warning'>Error 404</h3>
            <h1>Page Not Found</h1>
            <Link to='/' className='btn btn-primary mt-3'>Back to Homepage</Link>
        </div>);
};

export default NotFoundPage;
