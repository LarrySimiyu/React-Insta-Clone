import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password: ''
         }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value});
    };
 
    loginSubmitHandler = event => {
        const user = this.state.username;
        //take in key and the value
        localStorage.setItem('user', `${user}`); // local storage needs to be in a string
        window.location.reload();

    }

    render() { 
        return ( 
            <form>
                <input 
                    type='text'
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name='username'
                    />
                <input 
                    type='password' //dont want to see password typed out
                    placeholder='enter password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />

                <button onClick={this.loginSubmitHandler}>Log In</button>

            </form>
         );
    }
}
 
export default Login;