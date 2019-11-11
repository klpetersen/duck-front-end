import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LeaderBoard from './components/LeaderBoard'
import Game from './components/Game'

class App extends React.Component {
render(){
    return (
      <Router>
        <div>
          <NavBar /> 
          <Route exact path="/" render={() => <Home /> }/>
          <Route path="/login" render={() => <Login /> } /> 
          <Route path='/signup' render={() => <SignUp /> } /> 
          <Route path='/leaderboard' render={() => <LeaderBoard /> } /> 
          <Route path='/game' render={() => <Game /> } /> 
        </div>
      </ Router>
    
    )
  }
}

export default App;
