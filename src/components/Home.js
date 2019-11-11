import React, { Component } from 'react';
import duckie from '../ducky.png';



export default class Home extends Component {

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    }
    
    render() {
        return (
            <div id="viewer">
                <img id="duckie" src={duckie} alt="duckie"/>
            </div>
        )
    }
}
