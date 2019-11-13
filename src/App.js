import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LeaderBoard from './components/LeaderBoard'
import Game from './components/Game'

class App extends React.Component {

render(){
  // console.log(this.props.history)
    return (
      <Router>
        <div>
          <NavBar /> 
          <Switch>
            <Route exact path="/" render={() => <Home /> }/>
            <Route exact path="/login" render={() => <Login /> } /> 
            <Route exact path='/signup' render={(routerProps) => <SignUp setUser={this.setUser} {...routerProps}/> } /> 
            <Route exact path='/leaderboard' render={() => <LeaderBoard /> } /> 
            <Route exact path='/game' render={() => <Game /> } /> 
          </Switch>
        </div>
      </ Router>
    
    )
  }
}

export default App;
