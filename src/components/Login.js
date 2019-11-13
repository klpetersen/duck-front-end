import React, { Component } from 'react';


export default class Login extends Component {
    
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

    handleSubmit() { 
       
    }

    render() {
        return (
            <div className="form-page"> 
             <form onSubmit={this.handleSubmit}>
                <ul>
                    <li><label>Username</label></li>
                    <li><input type='text' name="username" placeholder='Username' onChange={this.handleChange} value={this.state.username}/></li>
                    <li><label>Password</label></li>
                    <li><input type='text' name="password" placeholder='Password' onChange={this.handleChange} value={this.state.password} /></li>  
                    <li><input type='submit' value="submit" /></li>
                </ul>
               </form>
            </div>
        )
    }
}
