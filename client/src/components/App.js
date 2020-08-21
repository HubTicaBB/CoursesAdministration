import React from 'react';
import Header from './common/Header';
import HomePage from './HomePage';
import CoursesPage from './CoursesPage'
import AboutPage from './AboutPage';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <Route exact path='/' component={ HomePage } />
            <Route path='/courses' component={ CoursesPage } />
            <Route path='/about' component={ AboutPage } />
        </div>
    );
};

export default App;
