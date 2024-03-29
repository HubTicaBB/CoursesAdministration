import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: 'orange' };

    return (
        <nav className='mt-1 mb-3'>
            <NavLink exact to='/' activeStyle={ activeStyle }>Home</NavLink>{ ' | ' }
            <NavLink to='/courses' activeStyle={ activeStyle }>Courses</NavLink>{ ' | ' }
            <NavLink to='/about' activeStyle={ activeStyle }>About</NavLink>
        </nav>
    );
};

export default Header;
