import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className='jumbotron'>
            <h1>About</h1>
            <p>This app uses React.</p>
            <Link to='/' className='btn btn-primary'>Back to Home Page</Link>
        </div>
    );
};

export default AboutPage;
