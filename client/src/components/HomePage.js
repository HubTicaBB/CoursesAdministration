import React from 'react';

const HomePage = () => {
    return (
        <div className='jumbotron'>
            <h1>Pluralsight Administration</h1>
            <p>React, Fux, and React Router for ultra-responsive web apps.</p>
            <a href='/about' className='btn btn-primary'>About</a>
        </div>
    );
};

export default HomePage;