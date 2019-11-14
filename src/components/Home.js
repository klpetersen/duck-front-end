import React, { Component } from 'react';
import duckie from '../ducky.png';



export default class Home extends Component {


    // componentDidMount(){
    //     const history = document.querySelector('.history-list');
    //     let list = this.fetchGames()
    //     console.log(list);
    //     history.innerHTML = list;
    // }

    fetchGames = () => {
        fetch('http://localhost:3000/games')
            .then(resp => resp.json())
            .then(data => this.findUserGames(data))
    }

    findUserGames = (games) => { 
        let foundGames = games.filter(game => game.user_id === this.props.currentUser.id)
        // console.log(foundGames)
        return foundGames.map(game=> <li>{game.created_at}:{game.score}</li>)
    }
    
    render() {
        if(this.props.currentUser){
            return (
                <div>
                    <h1>welcome, {this.props.currentUser.name}</h1>
                    <ul className="history-list"></ul>
                </div>
            )
        }else{
            return (
                <div id="viewer">
                    <img id="duckie" src={duckie} alt="duckie"/>
                </div>
            )
        }
    }
}
