import React, { Component } from 'react';
import duckie from '../baby-duck.png';
import bathtub from '../bathtub.png';
import bubbles from '../bubbles.png';


export default class Home extends Component {

    
    render() {
        return (
            <div id="viewer">
                <img id="duckie" src={duckie} alt="duckie"/>
                <img id="bathtub-img" src={bathtub} alt="bathtub"/>
                <img id="bubbles" src={bubbles} alt="bubbles" />
            </div>
        )
    }
}
