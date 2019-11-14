import React, { Component } from 'react';
import LeaderShow from './LeaderShow';

export default class LeaderBoard extends Component {

    state = {
        games: [],
        users: []
    }

    componentDidMount(){
        this.getGames();
    }

    componentDidUpdate(){
        // this.printGames();
    }

    getGames = () => {

        fetch('http://localhost:3000/games')
            .then(resp => resp.json())
            .then(data => this.getUsers(data))
    }

    getUsers = (data) =>{
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                users: resp,
                games: data
            })
        })
    }

    printGames = () => {
        let gamesCopy = this.state.games;
        gamesCopy.sort(function(a,b){
            return b.score-a.score;
        })

        return gamesCopy.slice(0,9).map((game,i)=> {
            let user = this.state.users.find(user=> game.user_id === user.id)
            return <li key={i}>{user.name}: {game.score}</li>
        })
    }

    render() {
        
    
        return (
            <div>
               <LeaderShow {...this.state}/>
               <ul>{this.printGames()}</ul>
            </div>
        )
    }
}
