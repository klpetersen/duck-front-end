import React, { Component } from 'react';
import duckie from '../baby-duck.png';


export default class Home extends Component {

    
    render() {
        return (
            <div id="viewer">
                <img src={duckie} alt="duckie"/>
            </div>
        )
    }
}
