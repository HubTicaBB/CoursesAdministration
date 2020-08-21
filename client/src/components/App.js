import React from 'react';
import Header from './common/Header';
import HomePage from './HomePage';
import CoursesPage from './CoursesPage'
import AboutPage from './AboutPage';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const App = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/courses' component={ CoursesPage } />
                <Route path='/about' component={ AboutPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    );
};

export default App;
