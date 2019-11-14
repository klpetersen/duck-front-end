import React, { Component } from 'react';


export default class HomeShow extends Component {

    showContent = () => {
        if(this.props.games.length===0){
            return <h3>No game yet.</h3>
        }else{
            return this.props.games.map((game,i) => {
                let time = game.created_at;
                let timeCopy = time;
                //2019-11-14T20:49:55.021Z
                timeCopy=timeCopy.split('.')[0];
                let date = timeCopy.split('T')[0];
                let hour = timeCopy.split('T')[1];
                hour = hour.split(':').slice(0, 2);
                let hr = parseInt(hour[0])-5;
                let minute = hour[1];

               
                return <li key={i}>{date} ({hr}:{minute}) --- {game.score}</li>
            })
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
