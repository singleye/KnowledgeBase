import React, {Component} from 'react';

export default class LoginES6 extends Component {
    constructor(props) {
        super(props);

        // ES6必须在constructor中进行绑定
        this.handleSubmit = this.handleSubmit.bind(this);

        // ES6必须在constructor中进行state初始化
        this.state = {username:"", password:""};
    }

    componentDidMount() {
        console.log("componentDidMount()");
        this.refs.userNameInput.focus();
    }

    handleSubmit() {
        console.log("username:" + this.refs.userNameInput.value);
        console.log("password:" + this.refs.passwordInput.value);

        this.setState({username:this.refs.userNameInput.value,
                      password:this.refs.passwordInput.value});
    }

    render() {
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
}
