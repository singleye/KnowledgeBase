import React from 'react';
import {authTokenAsync} from '../Actions/ajax';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // async/await approach
    async handleClick() {
        var result = await authTokenAsync(this.refs.username.value, this.refs.password.value);
        console.log(result);
        this.props.authCallback(result.signedIn, result.token);
    }

    render() {
        if (this.props.signedIn) {
            return (
                <div>Welcome</div>
            );
        }else {
            return(
                <div>
                   <div>username: <input type='text' ref='username'/></div>
                   <div>password: <input type='password' ref='password'/></div>
                   <div><input type='submit' value='login' onClick={this.handleClick}/></div>
                </div>
            );
        }
    }
}

export default class LoginAsync extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signedIn:false, token:''};
        this.authCB = this.authCB.bind(this);
    }

    authCB(signedIn, token) {
        console.log("signedIn: " + signedIn + ", token:" + token);
        this.setState({signedIn:signedIn, token:token});
    }

    render() {
        return (<LoginForm signedIn={this.state.signedIn} authCallback={this.authCB} />);
    }
}
