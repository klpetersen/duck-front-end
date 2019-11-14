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

  state = { 
    currentUser: null
  }

  setCurrentUser = (user) => { 
    this.setState({ 
      currentUser: user
    })
  }

  signOut = () => {
    this.setState({
      currentUser: null
    })
  }

render(){
  // console.log(this.props.history)
  // console.log(this.state.currentUser)
    return (
      <Router>
        <div> 
          <NavBar currentUser={this.state.currentUser}/> 
          <Switch>
            <Route exact path="/" render={() => <Home /> }/>
            <Route exact path="/login" render={(routerProps) => <Login setCurrentUser={this.setCurrentUser} signOut={this.signOut} {...routerProps} /> } /> 
            <Route exact path='/signup' render={(routerProps) => <SignUp setCurrentUser={this.setCurrentUser} {...routerProps}/> } /> 
            <Route exact path='/leaderboard' render={() => <LeaderBoard /> } /> 
            <Route exact path='/game' render={() => <Game /> } /> 
          </Switch>
        </div>
      </ Router>
    
    )
  }
}

export default App;
