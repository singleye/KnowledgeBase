import React from 'react';
import {authTokenPromise} from '../Actions/ajax';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // PROMISE way
    handleClick() {
        authTokenPromise(this.refs.username.value, this.refs.password.value).then(
            res => res.json()
        ).then(
            (result) => {
                this.props.authCallback(true, result.token);
            },
            (error) => {
                this.props.authCallback(false, '');
            }
        )
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

export default class LoginApp extends React.Component {
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
