import React, { Component } from 'react';

export default class SignUp extends Component {
    state={
        username:'',
        password:'',
        avatar:''
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
                name: this.state.username,
                password: this.state.password,
                avatar: this.state.avatar
            })
        }).then(resp=>resp.json())
        .then(data=>console.log(data))
    }

    render() {

        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <p>
                    <label>Username</label>
                    <input type='text' name="username" placeholder='Username' onChange={this.handleChange} value={this.state.username}/>
                   </p>
                   <p>
                    <label>Password</label>
                    <input type='text' name="password" placeholder='Password' onChange={this.handleChange} value={this.state.password} />  
                   </p>
                   <p>
                    <input type='submit' value="submit" />  
                   </p>
               </form>
            </div>
        )
    }
}
