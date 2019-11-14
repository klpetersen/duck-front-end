import React, { Component } from 'react';


export default class Show extends Component {

    showContent = () => {
        if(this.props.games.length===0){
            return <h3>No game yet.</h3>
        }else{
            return this.props.games.map((game,i) => <li key={i}>{game.created_at}: {game.score}</li>)
        }
    }

    render() {
        return(
            <div>
                <h3>Game History</h3>
                <ul>
                    {this.showContent()}
                </ul>
            </div>
        )
    }
}
