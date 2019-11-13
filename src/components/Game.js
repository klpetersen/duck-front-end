import React, { Component } from 'react';
import Canvas from './Canvas';
import Timer from './Timer';

export default class Game extends Component {
    state = {
        num: 1
    }

    componentDidMount(){
        let navbar = document.getElementsByClassName('navigation-bar show')[0];
        navbar.classList.add('hidden');
        navbar.classList.remove('show');
    }

    // addNum = (number) => {
    //     this.setState({
    //         num: number
    //     })
    //     console.log(number)
    // }

    render() {
        return (
            <div>
                <Timer />
                <Canvas num={this.state.num} addNum={this.addNum}/>
            </div>
        )
    }
}
