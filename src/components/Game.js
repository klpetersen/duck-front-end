import React, { Component } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';

export default class Game extends Component {
    state = {
        ikuraNum: 0,
        tunaNum:0
    }

    componentDidMount(){
        let navbar = document.getElementsByClassName('navigation-bar show')[0];
        navbar.classList.add('hidden');
        navbar.classList.remove('show');
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

    render() {
        return (
            <div>
                <Timer />
                <Canvas ikuraNum={this.state.ikuraNum} 
                        tunaNum={this.state.tunaNum}
                        addNum={this.addNum}
                        />
            </div>
        )
    }
}
