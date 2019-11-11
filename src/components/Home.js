import React, { Component } from 'react';
import duckie from '../ducky.png';



export default class Home extends Component {

    
    render() {
        return (
            <div id="viewer">
                <img id="duckie" src={duckie} alt="duckie"/>
            </div>
        )
    }
}
