import React, { Component } from 'react';

export default class Timer extends Component {

    handleClick = () => { 
        this.props.history.push('/')
        let navbar = document.getElementsByClassName('navigation-bar hidden')[0];
        navbar.classList.add('show');
        navbar.classList.remove('hidden');
    }

    render() {
        return (
            <div>
                <div className='timer-box'>
                    <h1>{this.props.seconds}</h1>
                    <button className='home-btn' onClick={() => this.handleClick()}>Home</button>
                </div>
            </div>
        )
    }
}
