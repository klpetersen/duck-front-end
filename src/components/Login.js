import React, { Component } from 'react';


export default class Login extends Component {
    
    state = { 
        username:''
    }

    componentDidMount(){
        this.props.signOut()
    }

    handleChange = (event) => {
        let target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }

    handleSubmit = (event) =>  { 
       event.preventDefault(); 
       fetch('https://ducky-api.herokuapp.com/users')
       .then(resp => resp.json())
       .then(resp => this.findUser(resp))
    }

    findUser = (users) => { 
       let foundUser = users.find(user => user.name === this.state.username)
       if (foundUser) {
        this.props.setCurrentUser(foundUser)
        this.props.history.push('/')
       } else { 
           alert('No user found! Please sign up!')
       }
    }

    render() {
        return (
            <div className="form-page"> 
             <form onSubmit={this.handleSubmit}>
                <ul>
                    <li>Login here!</li>
                    <li><label>Username</label></li>
                    <li><input type='text' name="username" placeholder='Username' onChange={this.handleChange} value={this.state.username}/></li>
                    <li><input type='submit' value="submit" className='submit-btn'/></li>
                </ul>
               </form>
            </div>
        )
    }
}
