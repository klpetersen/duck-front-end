import React, { Component } from 'react';
import duckie from '../ducky.png';
import HomeShow from './HomeShow';

export default class Home extends Component {


    state={
        games:[]
    }


    componentDidMount(){

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
                    <HomeShow games={this.state.games}/>
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


// state = {
//     allGames: [],
//     currentUser: null
// }

// static getDerivedStateFromProps(props, state) {
//     if (props.currentUser !== state.currentUser) {
//         return {
//           currentUser: props.currentUser,
//         };
//       }
  
//       // Return null if the state hasn't changed
//       return null;
// }

// componentDidMount() {
//     // fetchGames = () => {
//         fetch('http://localhost:3000/games')
//             .then(resp => resp.json())
//             // .then(data => this.findUserGames(data))
//             .then(data => this.setState({
//                 allGames: data
//             }))
//             // .then(data => this.findUserGames())
//     // }
// }

// findUserGames = () => { 
//     let foundGames = this.state.allGames.filter(game => game.user_id === this.state.currentUser.id)
//     return foundGames
// }

// renderGames = () => {
//     let userGames = this.findUserGames()
//     console.log(userGames)
//     return userGames.map(game => <Show score={game.score} time={game.created_at}/>)
//     // console.log(list)
//     // return list;
// }

// render() {
//     console.log(this.state)
//     if(this.state.currentUser){
//         return (
//             <div>
//                 <h1>welcome, { this.state.currentUser ? this.state.currentUser.name : null }</h1>
//                 {/* {this.fetchGames()} */}
//                 { this.renderGames() }
//             </div>
//         )
//     }else{
//         return (
//             <div id="viewer">
//                 <img id="duckie" src={duckie} alt="duckie"/>
//             </div>
//         )
//     }
// }