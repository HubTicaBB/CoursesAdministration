import React from 'react';
import Header from './common/Header';
import HomePage from './HomePage';
import CoursesPage from './CoursesPage'
import AboutPage from './AboutPage';

const App = () => {
    const getPage = () => {
        const route = window.location.pathname;
        if (route === '/courses') return <CoursesPage />
        else if (route === '/about') return <AboutPage />
        return <HomePage />
    };

    return (
        <div className='container-fluid'>
            <Header />
            { getPage() }
        </div>
    );
};

export default App;