import React, { Component } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';

export default class Game extends Component {
    state = {
        ikuraNum: 0,
        tunaNum:0,
        poopNum:0,
        score: 0,
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
        }else if(type === 'poop'){
            this.setState({
                poopNum: number
            })
        }
    }

    totalScore = (total) => {
        this.setState({
            score: total
        })
        this.saveGameOver()
    }

    
    updateTimer = () => { 
        let interval = setInterval(() => { 
            if (this.state.seconds > 0) { 
                this.setState({ 
                    seconds: this.state.seconds - 1
                }) 
            } else if (this.state.seconds === 0){ 
                this.setState({ 
                    gameOver: true
                })
                clearInterval(interval)
            }
        }, 1000 ) 
    }



    saveGameOver = () => { 
        fetch('https://ducky-api.herokuapp.com/games', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id, 
                score: this.state.score
            })
        })
        
    }
 
    render() {
        return (
            <div>
                <Timer seconds={this.state.seconds} {...this.props} />
                <Canvas ikuraNum={this.state.ikuraNum} 
                        tunaNum={this.state.tunaNum}
                        poopNum={this.state.poopNum}
                        addNum={this.addNum}
                        gameOver={this.state.gameOver}
                        totalScore={this.totalScore}
                        />
            </div>
        )
    }
}
