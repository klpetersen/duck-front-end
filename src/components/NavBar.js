import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div className='navigation-bar show' >
                <ul className='nav-list'>
                    <li className='nav-btn'><NavLink to="/" exact>Home</NavLink></li>
                    <li className='nav-btn'><NavLink to="/login" exact>Login</NavLink></li>
                    <li className='nav-btn'><NavLink to="/signup" exact>Sign Up</NavLink></li>
                    <li className='nav-btn'><NavLink to="/leaderboard" exact>Leader Board</NavLink></li>
                </ul>
            </div>
        )
    }
}
