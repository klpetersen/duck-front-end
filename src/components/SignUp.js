import React, { Component } from 'react';

export default class SignUp extends Component {
    state={
        username:''
    }

    handleChange = (event) => {
        let target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: this.state.username
            })
        }).then(resp=>resp.json())
        .then(data=> {
            this.props.setCurrentUser(data)
            this.props.history.push('/')} )
    alert('Profile created!')
    }

    render() {

        return (
            
            <div className="form-page"> 
             <form onSubmit={this.handleSubmit}>
                <ul>
                    <li><label>Username</label></li>
                    <li><input type='text' name="username" placeholder='Username' onChange={this.handleChange} value={this.state.username}/></li>
                    <li><input type='submit' value="submit" className='submit-btn' /></li>
                </ul>
               </form>
            </div>
        )
    }
}
