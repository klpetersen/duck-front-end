import React, { Component } from 'react';
import sushi from '../sushi.png';
import tuna from '../tuna.png';
import poop from '../poop.png';

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
                    <div className="timer-empty">
                        <div> 
                            <img id='tunaImg' src={tuna} className='icon' alt="tuna sushi" />: 5 point</div>
                        <div>
                            <img id='sushi' src={sushi} className='icon' alt="ikura sushi" />: 1 point</div>
                        <div>
                            <img id='poopImg' src={poop} className="icon" alt="poop" />: -10 point</div>
                    </div>
                    <div className="timer-h1-div">
                        <h1>{this.props.seconds}</h1>
                    </div>
                    <div className="timer-btn-div">
                        <button className='home-btn' onClick={() => this.handleClick()}><i className="fal fa-home-heart fa-4x" ></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
