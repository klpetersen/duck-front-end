import React, { Component } from 'react';
import Canvas from './Canvas';

export default class Game extends Component {
    componentDidMount(){
        let navbar = document.getElementsByClassName('navigation-bar show')[0];
        navbar.classList.add('hidden');
        navbar.classList.remove('show');
    }

    render() {
        return (
            <div>
                <Canvas />
            </div>
        )
    }
}
