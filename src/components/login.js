import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            loginButtonMessage: 'Log in'
        }
    }
    loginHandler = () => {
        // Checks

        // Message change
        this.setState({
            loginButtonMessage: 'Logged in'
        })
    }
    render(){
        return(
            <div className="login">
                <div className="box">
                    <div className="header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg>
                        <h1 className="title">Login</h1>
                        <p className="text">Don't have an account? <a href="">Register here!</a></p>
                    </div>
                    <input type="text" className="fields" placeholder="E-mail"></input>
                    <input type="password" className="fields" placeholder="Password"></input>
                    <button className="primaryButton" onClick={this.loginHandler}>{this.state.loginButtonMessage}</button>
                </div>
            </div>
        );
    }
}

export default Login;