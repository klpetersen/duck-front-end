import React, { Component } from 'react';
import duckie from '../ducky.png';
import Show from './Show';

export default class Home extends Component {

    state={
        games:[]
    }


    componentDidMount(){
        console.log(this.props.currentUser)
        if(this.props.currentUser !== null){
            this.fetchGames()
        }
    }

    fetchGames = () => {
        fetch('http://localhost:3000/games')
            .then(resp => resp.json())
            .then(data => {
                if(this.props.currentUser !== null){
                    let userGames = data.filter(game=> game.user_id === this.props.currentUser.id)
                    this.setState({
                        games: userGames
                    })
                }
            })
    }

    
    render() {
        if(this.props.currentUser){
            return (
                <div>
                    <h1>Welcome, {this.props.currentUser.name}</h1>
                    <Show games={this.state.games}/>
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
