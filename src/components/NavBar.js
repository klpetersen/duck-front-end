import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div className='navigation-bar'>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/login" exact>Login</NavLink></li>
                    <li><NavLink to="/signup" exact>Sign Up</NavLink></li>
                    <li><NavLink to="/leaderboard" exact>Leader Board</NavLink></li>
                </ul>
            </div>
        )
    }
}
