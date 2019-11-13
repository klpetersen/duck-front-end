import React, { Component } from 'react';

export default class Timer extends Component {

    render() {
        return (
            <div>
                <div className='timer-box'>
                    <h1>{this.props.seconds}</h1>
                    {/* <button className='home-btn'>Home</button> */}
                </div>
            </div>
        )
    }
}
