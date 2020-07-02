import React, { Component } from 'react';

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

        fetch('https://ducky-api.herokuapp.com/games')
            .then(resp => resp.json())
            .then(data => this.getUsers(data))
    }

    getUsers = (data) =>{
        fetch('https://ducky-api.herokuapp.com/users')
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

        return gamesCopy.slice(0,10).map((game,i)=> {
            let user = this.state.users.find(user=> game.user_id === user.id)
        return (<li key={i}>{user.name}:<b>{game.score}</b>{' points'}</li>) 
        })
    }

    render() {
        
    
        return (
            <div className='lb-container'>
                <div className='lb-box'>
                <h1 className='lb-h'>High Scores</h1>
               <ol className='lb-list'>{this.printGames()}</ol>
               </div>
            </div>
        )
    }
}
