import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='jumbotron'>
            <h1>Pluralsight Administration</h1>
            <p>React, Fux, and React Router for ultra-responsive web apps.</p>
            <Link to='/about' className='btn btn-primary'>About</Link>
        </div>
    );
};

export default HomePage;