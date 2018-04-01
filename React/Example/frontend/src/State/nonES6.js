import React from 'react';

var createReactClass = require('create-react-class');

var StateNonES6 = createReactClass({
    getInitialState: function() {
        return {
            username:"",
            password:""
        };
    },

    componentDidMount: function() {
        console.log("componentDidMount()");
        this.refs.userNameInput.focus();
    },

    handleSubmit: function() {
        console.log("handleSubmit");
        console.log("username:" + this.refs.userNameInput.value);
        console.log("password:" + this.refs.passwordInput.value);
        this.refs.userNameInput.focus();
        this.setState({
            username:this.refs.userNameInput.value,
            password:this.refs.passwordInput.value
        });
    },

    render: function() {
        return (
            <div>
                Login
                <div>
                    用户名：<input id="username" ref="userNameInput"/>
                </div>
                <div>
                    密码：<input id="password" type="password" ref="passwordInput"/>
                </div>
                <div>
                    <input type="button" value="登陆" onClick={this.handleSubmit}/>
                </div>
                <div>
                    <p>用户名 : "{this.state.username}"</p>
                    <p>密码 : "{this.state.password}"</p>
                </div>
            </div>
        );
    }
});

export default StateNonES6;
