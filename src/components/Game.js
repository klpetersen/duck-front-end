import React, { Component } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';

export default class Game extends Component {
    state = {
        num: 1, 
        seconds: 45, 
        gameOver: false
    }

    componentDidMount(){
        let navbar = document.getElementsByClassName('navigation-bar show')[0];
        navbar.classList.add('hidden');
        navbar.classList.remove('show');
        this.updateTimer();
    }

    updateTimer = () => { 
        setInterval(() => { 
            if (this.state.seconds > 0) { 
                this.setState({ 
                    seconds: this.state.seconds - 1
                }) 
            } else if (this.state.seconds === 0){ 
                this.setState({ 
                    gameOver: true
                })
            }
        }, 1000 ) 
       
    }
 

    render() {
        return (
            <div>
                <Timer seconds={this.state.seconds} />
                <Canvas num={this.state.num} addNum={this.addNum}/>
            </div>
        )
    }
}
