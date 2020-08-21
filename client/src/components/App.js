import React from 'react';
import Header from './common/Header';
import HomePage from './HomePage';
import CoursesPage from './CoursesPage'
import AboutPage from './AboutPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';

const App = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/courses' component={ CoursesPage } />
                <Route path='/about' component={ AboutPage } />
                <Route path='/course/:slug' component={ ManageCoursePage } />
                <Redirect from='/about-page' to='/about' />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    );
};

export default App;
