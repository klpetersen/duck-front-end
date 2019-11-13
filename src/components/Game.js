import React, { Component } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';

export default class Game extends Component {
    state = {
        ikuraNum: 0,
        tunaNum:0,
        seconds: 45, 
        gameOver: false
    }

    componentDidMount(){
        let navbar = document.getElementsByClassName('navigation-bar show')[0];
        navbar.classList.add('hidden');
        navbar.classList.remove('show');
        this.updateTimer();
    }


    addNum = (number, type) => {
        if(type === 'ikura'){
            this.setState({
                ikuraNum: number
            })
        }else if(type === 'tuna'){
            this.setState({
                tunaNum: number
            })
        }
        console.log(this.state)
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
                <Canvas ikuraNum={this.state.ikuraNum} 
                        tunaNum={this.state.tunaNum}
                        addNum={this.addNum}
                        />
            </div>
        )
    }
}
